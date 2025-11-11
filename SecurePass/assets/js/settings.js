// assets/js/settings.js

import { getStoredUser, getStoredPasswordRecord, setStoredPasswordRecord } from './storage.js';
import { $ , sha256Base64, goTo, showMsgOnPage } from './utils.js';
import { t } from './i18n.js';
import { randomBytes, toBase64, fromBase64, deriveBitsForPasswordRecord } from './crypto-utils.js';

export function passwordMeetsRequirements(pw){
  if(!pw || typeof pw !== 'string') return { ok:false, reason: 'empty' };
  if(pw.length < 8) return { ok:false, reason: 'short' };
  if(!/[A-Z]/.test(pw)) return { ok:false, reason: 'uppercase' };
  if(!/\d/.test(pw)) return { ok:false, reason: 'digit' };
  if(!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pw)) return { ok:false, reason: 'special' };
  return { ok:true };
}

export function initSettingsPage(){
  const su = getStoredUser(); if(!su){ goTo('register.html'); return; }
  const currentUser = $('currentUser'); if(currentUser) currentUser.value = su;
  const btnSave = $('btnSave');
  const newPwd = $('newPassword');
  const newPwd2 = $('newPassword2');
  const currentPwd = $('currentPassword');
  const msg = $('settingsMsg');

  if(btnSave) btnSave.addEventListener('click', async () => {
    const np = newPwd?.value.trim() || '';
    const np2 = newPwd2?.value || '';
    const cp = currentPwd?.value || '';
    const newName = currentUser?.value.trim() || '';

    if(newName && newName !== su) localStorage.setItem('securepass_user', newName);

    if(np){
      
      if(!cp) { if(msg) msg.textContent = t('msg_current_pw_required'); return; }

      const rec = getStoredPasswordRecord();
      if(!rec) { if(msg) msg.textContent = t('msg_current_pw_wrong'); return; }

      try {
        const saltBuf = fromBase64(rec.salt);
        const bits = await deriveBitsForPasswordRecord(cp, saltBuf, rec.iterations);
        const b64 = toBase64(bits);
        if(b64 !== rec.hash){ if(msg) msg.textContent = t('msg_current_pw_wrong'); return; }
      } catch(e){
        if(msg) msg.textContent = t('msg_current_pw_wrong'); return;
      }

      if(np !== np2) { if(msg) msg.textContent = t('msg_pw_not_same'); return; }

      const check = passwordMeetsRequirements(np);
      if(!check.ok){
        if(msg){
          switch(check.reason){
            case 'short': msg.textContent = t('msg_short_pw'); break;
            case 'uppercase': msg.textContent = t('msg_uppercase_required'); break;
            case 'digit': msg.textContent = t('msg_pw_no_digit'); break;
            case 'special': msg.textContent = t('msg_pw_not_special'); break;
            default: msg.textContent = t('msg_short_pw'); break;
          }
        }
        return;
      }

      const session = window.__SECUREPASS_SESSION || {};
      const passkeysArr = Array.isArray(session.passkeys) ? session.passkeys : [];

      const newSalt = randomBytes(16);
      const iterations = 200_000;
      const newBits = await deriveBitsForPasswordRecord(np, newSalt, iterations);
      const newRecord = { salt: toBase64(newSalt.buffer), hash: toBase64(newBits), iterations };
      setStoredPasswordRecord(newRecord);

      
      if(passkeysArr.length > 0){
        try {
          const { saveEncryptedPasskeys } = await import('./secure-storage.js');
          await saveEncryptedPasskeys(passkeysArr, { password: np });
        } catch(err){
          console.warn('Failed to re-encrypt passkeys with new password:', err);
        
        }
      }

      newPwd.value = '';
      newPwd2.value = '';
      currentPwd.value = '';
      if(msg){ msg.textContent = t('msg_password_changed_success'); msg.style.color = '#4CAF50'; }
      setTimeout(()=> goTo('home.html'), 900);
      return;
    } else if (cp && !np) {
      if(msg) msg.textContent = t('msg_new_pw_empty'); return;
    }

    if(msg){ msg.textContent = t('settings_saved'); msg.style.color = '#4CAF50'; }
    setTimeout(()=> goTo('home.html'), 900);
  });
}
