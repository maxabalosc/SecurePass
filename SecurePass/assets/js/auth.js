// assets/js/auth.js

import { getStoredUser, setStoredUser, setStoredPasswordRecord, getStoredPasswordRecord } from './storage.js';
import { sha256Base64, $ , goTo, showMsgOnPage } from './utils.js';
import { t } from './i18n.js';
import { randomBytes, toBase64, fromBase64, deriveBitsForPasswordRecord, deriveKeyFromPassword } from './crypto-utils.js';

export function initRegisterPage(){
  if(getStoredUser()){ goTo('login.html'); return; }

  const btnRegister = $('btnRegisterOnly') || $('btnRegister') || $('btnRegisterFinal');
  const regUser = $('regUsername') || $('username');
  const regPass = $('regPassword') || $('password');
  const regPass2 = $('regPassword2') || $('password2');
  const msg = $('registerMsg') || $('msg');

  const m = $('tutorialModal'); if(m && localStorage.getItem('securepass_tutorial_hide') !== 'true') m.classList.remove('hidden');

  if(!btnRegister) return;
  btnRegister.addEventListener('click', async () => {
    const u = regUser?.value.trim() || '';
    const p = regPass?.value || '';
    const p2 = regPass2?.value || '';

    if(!u || !p){ if(msg) msg.textContent = t('msg_complete_fields'); return; }

    const check = window.passwordMeetsRequirements ? window.passwordMeetsRequirements(p) : { ok:true };
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

    if(p !== p2){ if(msg) msg.textContent = t('msg_pw_not_same'); return; }

    const salt = randomBytes(16);
    const iterations = 200_000;
    const bits = await deriveBitsForPasswordRecord(p, salt, iterations); 
    const record = { salt: toBase64(salt.buffer), hash: toBase64(bits), iterations };
    setStoredUser(u);
    setStoredPasswordRecord(record);
    localStorage.setItem('securepass_tutorial_hide','true');

    if(msg){ msg.textContent = t('msg_registered'); msg.style.color = '#4CAF50'; }
    setTimeout(()=> goTo('login.html'), 900);
  });
}

export function initLoginPage(){
  if(!getStoredUser()){ goTo('register.html'); return; }

  const greeting = $('greeting') || $('welcomeLabel') || $('welcome');
  const passwordInput = $('password');
  const btnLogin = $('btnLogin');
  const togglePwd = $('togglePwd');
  const msgSelector = '#msg';

  if(greeting) greeting.textContent = getStoredUser();

  if(btnLogin) btnLogin.addEventListener('click', async () => {
    const pass = passwordInput.value;
    if(!pass){ showMsgOnPage(msgSelector, 'msg_complete_fields', false, (k)=>k); return; }

    const rec = getStoredPasswordRecord();
    if(!rec){ showMsgOnPage(msgSelector, 'msg_no_user', false, (k)=>k); return; }

    try {
      
      const saltBuf = fromBase64(rec.salt);
      const bits = await deriveBitsForPasswordRecord(pass, saltBuf, rec.iterations);
      const b64 = toBase64(bits);
      if(b64 !== rec.hash){
        showMsgOnPage(msgSelector, 'msg_credentials_incorrect', false, (k)=>k);
        return;
      }
    } catch(err){
      console.error('Password verify error', err);
      showMsgOnPage(msgSelector, 'msg_credentials_incorrect', false, (k)=>k);
      return;
    }

    window.__SECUREPASS_SESSION = window.__SECUREPASS_SESSION || {};
    window.__SECUREPASS_SESSION.aesKey = null;
    window.__SECUREPASS_SESSION.passkeys = [];

    try {
      const ss = await import('./secure-storage.js');
      
      const res = await ss.loadEncryptedPasskeys({ password: pass });
      if(res && res.aesKey){
        window.__SECUREPASS_SESSION.aesKey = res.aesKey;
        window.__SECUREPASS_SESSION.passkeys = Array.isArray(res.arr) ? res.arr : [];
      } else {
        
        window.__SECUREPASS_SESSION.aesKey = null;
        window.__SECUREPASS_SESSION.passkeys = res && Array.isArray(res) ? res : [];
      }
    } catch(err){
      console.warn('Could not load encrypted passkeys:', err);
      window.__SECUREPASS_SESSION.aesKey = null;
      window.__SECUREPASS_SESSION.passkeys = [];
    }

    passwordInput.value = '';
    goTo('home.html');
  });

  if(togglePwd) togglePwd.addEventListener('click', ()=> {
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    togglePwd.textContent = passwordInput.type==='password' ? '👁' : '🛇';
  });
}

export function initHomePage(){
  const su = getStoredUser();
  if(!su){ goTo('register.html'); return; }
  const welcomeEl = $('welcome') || $('usernameDisplay') || $('greeting');
  if(welcomeEl) welcomeEl.textContent = `${t('home_welcome_prefix')} — ${su}`;

  const gotoSettings = $('gotoSettings'); if(gotoSettings) gotoSettings.addEventListener('click',(e)=>{ e.preventDefault(); goTo('settings.html'); });
  const gotoPasskeys = $('gotoPasskeys'); if(gotoPasskeys) gotoPasskeys.addEventListener('click',(e)=>{ e.preventDefault(); goTo('passkeys.html'); });

  const btnLogout = $('btnLogout');
  if(btnLogout) btnLogout.addEventListener('click', ()=> {
    if(window.__SECUREPASS_SESSION){
      window.__SECUREPASS_SESSION.aesKey = null;
      window.__SECUREPASS_SESSION.passkeys = [];
    }
    goTo('login.html');
  });
}
