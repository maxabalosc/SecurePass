const KEY_USER = "securepass_user";
const KEY_HASH = "securepass_hash";
const KEY_PASSKEYS = "securepass_passkeys";
const KEY_TUTORIAL_HIDE = "securepass_tutorial_hide";
const KEY_LANG = "securepass_lang";

/* ---------------- Traducciones ---------------- */
const translations = {
  en: {
    brand_title: "SECUREPASS", brand_sub: "Secure access",
    register_title: "Create your account",
    login_title: "Sign in", label_username: "Username", label_password: "Password", label_regPassword2: "Re-enter password",
    ph_username: "Username", ph_password: "Password", ph_password2: "Re-enter password", ph_newpassword2: "Re-enter password", hint_min8: "Minimum 8 characters.",
    btn_login: "Sign in", btn_register: "Register",
    tutorial_title: "Welcome to SecurePass", tutorial_p1: "First, register a user using the Register button.",
    got_it: "Got it", dont_show: "Don't show again",
    msg_complete_fields: "Please complete username and password", msg_no_user: "No user registered. Please register first.",
    msg_registered: "User registered successfully", msg_short_pw: "Password is too short (min 8 chars).",
    msg_pw_not_same: "Passwords are not identical.", msg_pw_not_special: "Password must contain at least 1 special character.",
    msg_uppercase_required: "Password must contain at least 1 uppercase letter.",
    msg_pw_no_digit: "Password must contain at least 1 digit.",
    msg_credentials_incorrect: "Incorrect credentials", msg_auth_failed: "Authentication failed",
    home_change: "Settings", home_passkeys: "View passkeys", home_logout: "Sign out",
    passkeys_title: "Stored passkeys", passkeys_add: "Register passkey", back: "Back",
    passkeys_no: "No passkeys stored.", passkeys_delete_confirm: "Delete passkey?",
    settings_title: "Change password", label_user: "User", label_newpassword: "New password", label_currentpassword: "Current Password", ph_currentpassword: "Current password",
    ph_newpassword: "New password", label_newpassword2: " ", msg_enter_current_pw: "Please enter your current password", msg_current_pw_wrong: "Try entering your current password again", msg_current_pw_required: "Enter your current password",
    msg_password_changed_success: "Password has been successfully changed", btn_save: "Save",
    btn_cancel: "Back", settings_saved: "Changes saved",
    label_welcome: "Welcome", home_welcome_prefix: "Welcome",
    msg_new_pw_empty: "Enter a new password."
  },
  es: {
    brand_title: "SECUREPASS", brand_sub: "Acceso seguro",
    register_title: "Crea tu cuenta",
    login_title: "Iniciar sesión", label_username: "Usuario", label_password: "Contraseña", label_regPassword2: "Confirme contraseña",
    ph_username: "Usuario", ph_password: "Contraseña", ph_password2: "Confirme contraseña", ph_newpassword2: "Confirme contraseña", hint_min8: "Mínimo 8 caracteres.",
    btn_login: "Ingresar", btn_register: "Registrar",
    tutorial_title: "Bienvenido a SecurePass", tutorial_p1: "Primero registra un usuario usando el botón Registrar.",
    got_it: "Entendido", dont_show: "No mostrar nuevamente",
    msg_complete_fields: "Completa usuario y contraseña", msg_no_user: "No hay usuario registrado. Regístrate primero.",
    msg_registered: "Usuario registrado correctamente", msg_short_pw: "La contraseña es muy corta (min 8 caracteres).",
    msg_pw_not_same: "Contraseñas no coinciden.", msg_pw_not_special: "La contraseña debe contener al menos 1 caracter especial",
    msg_uppercase_required: "La contraseña debe contener al menos 1 mayúscula.",
    msg_pw_no_digit: "La contraseña debe contener al menos 1 número.",
    msg_credentials_incorrect: "Credenciales incorrectas", msg_auth_failed: "Autenticación fallida",
    home_change: "Configuración", home_passkeys: "Ver passkeys", home_logout: "Cerrar sesión",
    passkeys_title: "Passkeys guardadas", passkeys_add: "Registrar passkey", back: "Volver",
    passkeys_no: "No hay passkeys registradas.", passkeys_delete_confirm: "¿Eliminar passkey?",
    settings_title: "Cambiar contraseña", label_user: "Usuario", label_newpassword: "Nueva contraseña", label_currentpassword: "Contraseña actual", ph_currentpassword: "Contraseña actual",
    ph_newpassword: "Nueva contraseña", label_newpassword2: " ", msg_enter_current_pw:"Ingrese su contraseña", msg_current_pw_wrong:"Intente ingresar su contraseña nuevamente", msg_current_pw_required:"Ingrese su contraseña actual",
    msg_password_changed_success: "Contraseña ha sido cambiada exitosamente", btn_save: "Guardar",
    btn_cancel: "Volver", settings_saved: "Cambios guardados",
    label_welcome: "Bienvenido", home_welcome_prefix: "Bienvenido",
    msg_new_pw_empty: "Ingrese una nueva contraseña."
  },
  zh: {
    brand_title: "SECUREPASS", brand_sub: "安全访问",
    register_title: "创建帐户",
    login_title: "登录", label_username: "用户名", label_password: "密码", label_regPassword2: "确认密码",
    ph_username: "用户名", ph_password: "密码", ph_password2: "确认密码", ph_newpassword2: "确认密码", hint_min8: "至少 8 个字符。",
    btn_login: "登录", btn_register: "注册",
    tutorial_title: "欢迎使用 SecurePass", tutorial_p1: "首先使用“注册”按钮注册用户。",
    got_it: "知道了", dont_show: "不再显示",
    msg_complete_fields: "请填写用户名和密码", msg_no_user: "未注册用户。请先注册。",
    msg_registered: "用户注册成功", msg_short_pw: "密码太短（至少 8 个字符）。",
    msg_pw_not_same: "密码不匹配。", msg_pw_not_special: "密码必须至少包含 1 个特殊字符",
    msg_uppercase_required: "密码必须至少包含 1 个大写字母。",
    msg_pw_no_digit: "密码必须至少包含 1 个数字。",
    msg_credentials_incorrect: "凭证错误", msg_auth_failed: "身份验证失败",
    home_change: "设置", home_passkeys: "查看 passkeys", home_logout: "登出",
    passkeys_title: "已保存的 passkeys", passkeys_add: "注册 passkey", back: "返回",
    passkeys_no: "没有已保存的 passkeys。", passkeys_delete_confirm: "删除该 passkey？",
    settings_title: "更改密码", label_user: "用户名", label_newpassword: "新密码", label_currentpassword: "当前密码", ph_currentpassword: "当前密码",
    ph_newpassword: "新密码", label_newpassword2: " ", msg_enter_current_pw: "请输入您当前的密码", msg_current_pw_wrong: "请重试输入您当前的密码", msg_current_pw_required: "请输入您当前的密码",
    msg_password_changed_success: "密码已成功更改", btn_save: "保存",
    btn_cancel: "取消", settings_saved: "已保存更改",
    label_welcome: "欢迎", home_welcome_prefix: "欢迎",
    msg_new_pw_empty: "请输入新密码。"
  }
};

/* ---------------- helper translate ---------------- */
function getLang(){ return localStorage.getItem(KEY_LANG) || 'en'; }
function setLang(lang){ localStorage.setItem(KEY_LANG, lang); applyTranslations(); }
function t(key){ const lang = getLang(); return (translations[lang] && translations[lang][key]) || (translations.en && translations.en[key]) || key; }

function applyTranslations(){
  const lang = getLang();
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(key) el.innerText = t(key);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const key = el.getAttribute('data-i18n-placeholder');
    if(key) el.placeholder = t(key);
  });

  document.querySelectorAll('label, .readonly, .muted, .card-title, .brand-sub').forEach(el=>{
    const text = (el.innerText || '').trim();
    if(text && translations[getLang()] && translations[getLang()][text]) {
      el.innerText = t(text);
    }
  });

  const welcomeEl = document.getElementById('welcome');
  if(welcomeEl && getStoredUser()){
    const prefix = t('home_welcome_prefix') || t('label_welcome') || '';
    welcomeEl.textContent = `${prefix} — ${getStoredUser()}`;
  }
}

/* ---------------- helper translate ---------------- */
const $ = id => document.getElementById(id);
function showMsgOnPage(selector, txtKeyOrText, success=false){
  const el = document.querySelector(selector);
  if(!el) return;
  const maybe = (translations[getLang()] && translations[getLang()][txtKeyOrText]);
  el.textContent = maybe ? t(txtKeyOrText) : txtKeyOrText;
  el.style.color = success ? '#4CAF50' : '';
}

/* ---------------- crypto ---------------- */
async function sha256Base64(text){
  const enc = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest('SHA-256', enc);
  const arr = Array.from(new Uint8Array(buf));
  return btoa(String.fromCharCode(...arr));
}

/* ---------------- helper almacenamiento ---------------- */
function getStoredUser(){ return localStorage.getItem(KEY_USER); }
function getStoredHash(){ return localStorage.getItem(KEY_HASH); }
function getPasskeys(){ try{ return JSON.parse(localStorage.getItem(KEY_PASSKEYS) || '[]'); }catch(e){ return []; } }
function savePasskeys(arr){ localStorage.setItem(KEY_PASSKEYS, JSON.stringify(arr)); }

function goTo(page){ window.location.href = page; }

function showTutorialModal(){ if(localStorage.getItem(KEY_TUTORIAL_HIDE) === 'true') return; const m = $('tutorialModal'); if(m) m.classList.remove('hidden'); }
function hideTutorialModal(persistNoShow=false){ const m = $('tutorialModal'); if(m) m.classList.add('hidden'); if(persistNoShow) localStorage.setItem(KEY_TUTORIAL_HIDE,'true'); }

/* ---------------- App ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#langSelect').forEach(sel=>{
    sel.value = getLang();
    sel.addEventListener('change', (e)=> setLang(e.target.value));
  });

  applyTranslations();
  const page = document.body.dataset.page || '';

  const brandTitle = document.querySelector('.brand-title');
  if(brandTitle) brandTitle.addEventListener('click', ()=> { if(getStoredUser()) goTo('home.html'); else goTo('register.html'); });

  const btnGotIt = $('tutorialGotIt'); if(btnGotIt) btnGotIt.addEventListener('click', ()=> hideTutorialModal(false));
  const btnDontShow = $('tutorialDontShow'); if(btnDontShow) btnDontShow.addEventListener('click', ()=> hideTutorialModal(true));

  if(page === 'register') initRegisterPage();
  if(page === 'login') initLoginPage();
  if(page === 'home') initHomePage();
  if(page === 'passkeys') initPasskeysPage();
  if(page === 'settings') initSettingsPage();
});

/* ---------------- helper validación ---------------- */
function passwordMeetsRequirements(pw){
  if(!pw || typeof pw !== 'string') return { ok:false, reason: 'empty' };
  if(pw.length < 8) return { ok:false, reason: 'short' };
  if(!/[A-Z]/.test(pw)) return { ok:false, reason: 'uppercase' };
  if(!/\d/.test(pw)) return { ok:false, reason: 'digit' };
  if(!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pw)) return { ok:false, reason: 'special' };
  return { ok:true };
}

/* ---------------- Register ---------------- */
function initRegisterPage(){
  if(getStoredUser()){ goTo('login.html'); return; }

  const btnRegister = $('btnRegisterOnly') || $('btnRegister') || $('btnRegisterFinal');
  const regUser = $('regUsername') || $('username');
  const regPass = $('regPassword') || $('password');
  const regPass2 = $('regPassword2') || $('password2');
  const msg = $('registerMsg') || $('msg');

  showTutorialModal();

  if(!btnRegister) return;
  btnRegister.addEventListener('click', async () => {
    const u = regUser?.value.trim() || '';
    const p = regPass?.value || '';
    const p2 = regPass2?.value || '';

    if(!u || !p){ if(msg) msg.textContent = t('msg_complete_fields'); return; }

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
    localStorage.setItem(KEY_USER, u);
    localStorage.setItem(KEY_HASH, hash);
    localStorage.setItem(KEY_TUTORIAL_HIDE, 'true');

    if(msg){ msg.textContent = t('msg_registered'); msg.style.color = '#4CAF50'; }
    setTimeout(()=> goTo('login.html'), 900);
  });
}

/* ---------------- Login ---------------- */
function initLoginPage(){
  if(!getStoredUser()){ goTo('register.html'); return; }

  const greeting = $('greeting') || $('welcomeLabel') || $('welcome');
  const passwordInput = $('password');
  const btnLogin = $('btnLogin');
  const togglePwd = $('togglePwd');
  const msgSelector = '#msg';

  if(greeting) greeting.textContent = getStoredUser();

  if(btnLogin) btnLogin.addEventListener('click', async () => {
    const pass = passwordInput.value;
    if(!pass){ showMsgOnPage(msgSelector,'msg_complete_fields'); return; }
    const hash = await sha256Base64(pass);
    if(hash === getStoredHash()){
      goTo('home.html');
    } else {
      showMsgOnPage(msgSelector,'msg_credentials_incorrect');
    }
  });

  if(togglePwd) togglePwd.addEventListener('click', ()=> {
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    togglePwd.textContent = passwordInput.type==='password' ? '👁' : '🛇';
  });
}

/* ---------------- Home ---------------- */
function initHomePage(){
  const su = getStoredUser();
  if(!su){ goTo('register.html'); return; }
  const welcomeEl = $('welcome') || $('usernameDisplay') || $('greeting');
  if(welcomeEl) welcomeEl.textContent = `${t('home_welcome_prefix')} — ${su}`;

  const gotoSettings = $('gotoSettings');
  if(gotoSettings) gotoSettings.addEventListener('click',(e)=>{ e.preventDefault(); goTo('settings.html'); });

  const gotoPasskeys = $('gotoPasskeys');
  if(gotoPasskeys) gotoPasskeys.addEventListener('click',(e)=>{ e.preventDefault(); goTo('passkeys.html'); });

  const btnLogout = $('btnLogout');
  if(btnLogout) btnLogout.addEventListener('click', ()=> {
    // simple logout: redirect to login
    goTo('login.html');
  });
}

/* ---------------- Passkeys ---------------- */
function initPasskeysPage(){
  const su = getStoredUser(); if(!su){ goTo('register.html'); return; }
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

  /* ---------------- Función Passkeys ---------------- */
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


/* ---------------- Settings ---------------- */
function initSettingsPage(){
  const su = getStoredUser(); if(!su){ goTo('register.html'); return; }
  const currentUser = $('currentUser'); if(currentUser) currentUser.value = su;
  const btnSave = $('btnSave');
  const newPwd = $('newPassword');
  const newPwd2 = $('newPassword2'); // nueva confirmación agregada
  const currentPwd = $('currentPassword');
  const msg = $('settingsMsg');

  if(btnSave) btnSave.addEventListener('click', async () => {
    const np = newPwd?.value.trim() || '';
    const np2 = newPwd2?.value || '';
    const cp = currentPwd?.value || '';
    const newName = currentUser?.value.trim() || '';

    if(newName && newName !== su) localStorage.setItem(KEY_USER, newName);

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

      // guardar nueva contraseña
      const h = await sha256Base64(np);
      localStorage.setItem(KEY_HASH, h);
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
