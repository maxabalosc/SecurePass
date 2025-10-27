// assets/js/passkeys.js

import { getPasskeys, savePasskeys } from './storage.js';
import { $ , goTo } from './utils.js';
import { t } from './i18n.js';

export function initPasskeysPage(){
  const su = localStorage.getItem('securepass_user'); if(!su){ goTo('register.html'); return; }
  const listEl = $('passkeysList');
  const btnAdd = $('btnAddPasskey');

  function renderPasskeysList(){
    if(!listEl) return;
    const arr = getPasskeys(); 
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
      btn.addEventListener('click', (e)=>{
        const idx = Number(btn.getAttribute('data-idx'));
        const arr = getPasskeys();
        if(idx<0||idx>=arr.length) return;
        if(!confirm(t('passkeys_delete_confirm'))) return;
        arr.splice(idx,1);
        savePasskeys(arr);
        renderPasskeysList();
      });
    });
  }

  if(btnAdd) btnAdd.addEventListener('click', async () => {
    const name = prompt(t('passkeys_add'))?.trim();
    if(!name) return alert('Please enter a valid passkey name.');

    const desc = prompt('Enter a short description (e.g., Site and User):')?.trim() || '';

    const idBytes = crypto.getRandomValues(new Uint8Array(12));
    const idB64 = btoa(String.fromCharCode(...idBytes));

    const pk = { id: idB64, name, desc, createdAt: new Date().toISOString() };
    const arr = getPasskeys();
    arr.push(pk);
    savePasskeys(arr);
    renderPasskeysList();
    alert('Passkey saved successfully');
  });

  renderPasskeysList();
}
