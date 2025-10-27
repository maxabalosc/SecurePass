// assets/js/settings.js

import { getStoredUser, getStoredHash, setStoredHash } from './storage.js';
import { $ , sha256Base64, goTo, showMsgOnPage } from './utils.js';
import { t } from './i18n.js';

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
      // require current password to change
      if(!cp) { if(msg) msg.textContent = t('msg_current_pw_required'); return; }

      // verify current password
      const storedHash = getStoredHash();
      const currentHash = await sha256Base64(cp);
      if(currentHash !== storedHash) { if(msg) msg.textContent = t('msg_current_pw_wrong'); return; }

      // check new passwords match
      if(np !== np2) { if(msg) msg.textContent = t('msg_pw_not_same'); return; }

      // validate new password
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

      // save new password
      const h = await sha256Base64(np);
      setStoredHash(h);
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
