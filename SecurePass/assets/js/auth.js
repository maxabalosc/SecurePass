// assets/js/auth.js

import { getStoredUser, setStoredUser, setStoredHash, getStoredHash } from './storage.js';
import { sha256Base64, $ , goTo, showMsgOnPage } from './utils.js';
import { t, applyTranslations } from './i18n.js';

export function initRegisterPage(){
  if(getStoredUser()){ goTo('login.html'); return; }

  const btnRegister = $('btnRegisterOnly') || $('btnRegister') || $('btnRegisterFinal');
  const regUser = $('regUsername') || $('username');
  const regPass = $('regPassword') || $('password');
  const regPass2 = $('regPassword2') || $('password2');
  const msg = $('registerMsg') || $('msg');

  // register user and tutorial
  const m = $('tutorialModal'); if(m && localStorage.getItem('securepass_tutorial_hide') !== 'true') m.classList.remove('hidden');

  if(!btnRegister) return;
  btnRegister.addEventListener('click', async () => {
    const u = regUser?.value.trim() || '';
    const p = regPass?.value || '';
    const p2 = regPass2?.value || '';

    if(!u || !p){ if(msg) msg.textContent = t('msg_complete_fields'); return; }

    // password validation
    const check = passwordMeetsRequirements(p);
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

    const hash = await sha256Base64(p);
    setStoredUser(u);
    setStoredHash(hash);
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
    if(!pass){ showMsgOnPage(msgSelector, 'msg_complete_fields', false, t); return; }
    const hash = await sha256Base64(pass);
    if(hash === getStoredHash()){
      goTo('home.html');
    } else {
      showMsgOnPage(msgSelector, 'msg_credentials_incorrect', false, t);
    }
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
  const btnLogout = $('btnLogout'); if(btnLogout) btnLogout.addEventListener('click', ()=> { goTo('login.html'); });
}
