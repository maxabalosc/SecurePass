// assets/js/passkeys.js

import { $ , goTo } from './utils.js';
import { t } from './i18n.js';

async function ensureSessionUnlocked() {
  if (window.__SECUREPASS_SESSION && window.__SECUREPASS_SESSION.aesKey) return true;

  
  const pw = prompt(t('token') || 'Enter password to unlock passkeys:');
  if (!pw) return false; 

  try {
    const { loadEncryptedPasskeys } = await import('./secure-storage.js');
    
    const res = await loadEncryptedPasskeys({ password: pw });

    
    window.__SECUREPASS_SESSION = window.__SECUREPASS_SESSION || {};
    window.__SECUREPASS_SESSION.aesKey = res.aesKey || null;
    window.__SECUREPASS_SESSION.passkeys = Array.isArray(res.arr) ? res.arr : [];

    return true;
  } catch (err) {
    console.warn('Passkeys unlock failed (decrypt):', err);
    alert(t('msg_auth_failed') || 'Could not unlock passkeys (wrong password or data corrupted).');
    return false;
  }
}

export function initPasskeysPage(){
  const su = localStorage.getItem('securepass_user'); if(!su){ goTo('register.html'); return; }
  const listEl = $('passkeysList');
  const btnAdd = $('btnAddPasskey');

  function getSessionArray(){
    return (window.__SECUREPASS_SESSION && Array.isArray(window.__SECUREPASS_SESSION.passkeys)) ? window.__SECUREPASS_SESSION.passkeys : [];
  }

  async function renderPasskeysList(){
    if(!listEl) return;

    
    if(!window.__SECUREPASS_SESSION || !window.__SECUREPASS_SESSION.aesKey) {
      const ok = await ensureSessionUnlocked();
      if(!ok){
        listEl.innerHTML = `<div class="muted">${t('passkeys_no')}</div>`;
        return;
      }
    }

    const arr = getSessionArray();
    listEl.innerHTML = '';
    if(arr.length === 0){
      listEl.innerHTML = `<div class="muted">${t('passkeys_no')}</div>`;
      return;
    }

    arr.forEach((p,i) => {
      const node = document.createElement('div');
      node.className = 'passkey-item';
      node.innerHTML = `
        <div>
          <strong>${p.name}</strong>
          ${p.desc ? `<div class="muted small">${p.desc}</div>` : ''}
          <div class="muted small">${new Date(p.createdAt).toLocaleString()}</div>
        </div>
        <div><button class="btn ghost" data-idx="${i}">Delete</button></div>`;
      listEl.appendChild(node);
    });

    listEl.querySelectorAll('button[data-idx]').forEach(btn=>{
      btn.addEventListener('click', async (e)=>{
        const idx = Number(btn.getAttribute('data-idx'));
        const arr = getSessionArray();
        if(idx<0||idx>=arr.length) return;
        if(!confirm(t('passkeys_delete_confirm'))) return;

        
        if(!window.__SECUREPASS_SESSION || !window.__SECUREPASS_SESSION.aesKey){
          const ok = await ensureSessionUnlocked();
          if(!ok) return;
        }

        arr.splice(idx,1);
        const { saveEncryptedPasskeys } = await import('./secure-storage.js');
        await saveEncryptedPasskeys(arr, { aesKey: window.__SECUREPASS_SESSION.aesKey });
        renderPasskeysList();
      });
    });
  }

  if(btnAdd) btnAdd.addEventListener('click', async () => {
    
    if(!window.__SECUREPASS_SESSION || !window.__SECUREPASS_SESSION.aesKey){
      const ok = await ensureSessionUnlocked();
      if(!ok) return;
    }

    const name = prompt(t('passkeys_add'))?.trim();
    if(!name) return alert('Please enter a valid passkey name.');

    const desc = prompt('Enter a short description (e.g., Site and User):')?.trim() || '';

    const idBytes = crypto.getRandomValues(new Uint8Array(12));
    const idB64 = btoa(String.fromCharCode(...idBytes));
    const pk = { id: idB64, name, desc, createdAt: new Date().toISOString() };

    const arr = getSessionArray();
    arr.push(pk);

    const { saveEncryptedPasskeys } = await import('./secure-storage.js');
    await saveEncryptedPasskeys(arr, { aesKey: window.__SECUREPASS_SESSION.aesKey });

    renderPasskeysList();
    alert('Passkey saved successfully');
  });

  
  renderPasskeysList();
}
