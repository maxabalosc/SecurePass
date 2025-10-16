
const KEY_USER = "securepass_user";
const KEY_HASH = "securepass_hash";
const KEY_BIO = "securepass_bio";
const KEY_PASSKEYS = "securepass_passkeys";
const KEY_TUTORIAL_HIDE = "securepass_tutorial_hide";
const KEY_LANG = "securepass_lang";


const translations = {
  en: {
    brand_title: "SECUREPASS", brand_sub: "Secure access",
    register_title: "Create your account",
    login_title: "Sign in", label_username: "Username", label_password: "Password",
    ph_username: "Username", ph_password: "Password", hint_min8: "Minimum 8 characters.",
    btn_login: "Sign in", btn_register: "Register", fingerprint_label: "Sign in with fingerprint",
    tutorial_title: "Welcome to SecurePass", tutorial_p1: "First, register a user using the Register button. Afterwards you can sign in and enable fingerprint.",
    got_it: "Got it", dont_show: "Don't show again",
    msg_complete_fields: "Please complete username and password", msg_no_user: "No user registered. Please register first.",
    msg_registered: "User registered successfully", msg_short_pw: "Password is too short (min 4 chars).",
    msg_credentials_incorrect: "Incorrect credentials", msg_auth_failed: "Authentication failed",
    home_change: "Settings", home_passkeys: "View passkeys", home_logout: "Sign out",
    passkeys_title: "Stored passkeys", passkeys_add: "Register passkey", back: "Back",
    passkeys_no: "No passkeys stored.", passkeys_delete_confirm: "Delete passkey?",
    settings_title: "Change password & fingerprint", label_user: "User", label_newpassword: "New password",
    ph_newpassword: "New password", btn_save: "Save",
    btn_cancel: "Cancel", settings_saved: "Changes saved",
    label_add_bio: "Add biometric", btn_configure_bio: "Configure biometric", biometric_title: "Biometric configuration",
    biometric_placeholder: "This is a placeholder for biometric configuration. When implemented natively this screen will call the OS biometric enrollment/verification APIs.",
    biometric_do_config: "Configure now (demo)", biometric_configured: "Biometric configured (demo).",
    no_biometric_registered: "No biometric registered. Enable it in Settings.",
    
    label_welcome: "Welcome",
    home_welcome_prefix: "Welcome"
  },
  es: {
    brand_title: "SECUREPASS", brand_sub: "Acceso seguro",
    register_title: "Crea tu cuenta",
    login_title: "Iniciar sesión", label_username: "Usuario", label_password: "Contraseña",
    ph_username: "Usuario", ph_password: "Contraseña", hint_min8: "Mínimo 8 caracteres.",
    btn_login: "Ingresar", btn_register: "Registrar", fingerprint_label: "Iniciar con huella",
    tutorial_title: "Bienvenido a SecurePass", tutorial_p1: "Primero registra un usuario usando el botón Registrar. Después podrás ingresar y habilitar huella.",
    got_it: "Entendido", dont_show: "No mostrar nuevamente",
    msg_complete_fields: "Completa usuario y contraseña", msg_no_user: "No hay usuario registrado. Regístrate primero.",
    msg_registered: "Usuario registrado correctamente", msg_short_pw: "La contraseña es muy corta (min 4 caracteres).",
    msg_credentials_incorrect: "Credenciales incorrectas", msg_auth_failed: "Autenticación fallida",
    home_change: "Configuración", home_passkeys: "Ver passkeys", home_logout: "Cerrar sesión",
    passkeys_title: "Passkeys guardadas", passkeys_add: "Registrar passkey", back: "Volver",
    passkeys_no: "No hay passkeys registradas.", passkeys_delete_confirm: "¿Eliminar passkey?",
    settings_title: "Cambiar contraseña y huella", label_user: "Usuario", label_newpassword: "Nueva contraseña",
    ph_newpassword: "Nueva contraseña", label_enable_bio: "Habilitar autenticación biométrica", btn_save: "Guardar",
    btn_cancel: "Cancelar", settings_saved: "Cambios guardados",
    label_add_bio: "Añadir biometría", btn_configure_bio: "Configurar biometría", biometric_title: "Configuración biométrica",
    biometric_placeholder: "Este es un placeholder para la configuración biométrica. Cuando se implemente nativamente esta pantalla llamará a las APIs del sistema.",
    biometric_do_config: "Configurar ahora (demo)", biometric_configured: "Biometría configurada (demo).",
    no_biometric_registered: "No hay huella registrada. Actívala en Ajustes.",
    
    label_welcome: "Bienvenido",
    home_welcome_prefix: "Bienvenido"
  },
  zh: {
    brand_title: "SECUREPASS", brand_sub: "安全访问",
    register_title: "创建帐户",
    login_title: "登录", label_username: "用户名", label_password: "密码",
    ph_username: "用户名", ph_password: "密码", hint_min8: "至少 8 个字符。",
    btn_login: "登录", btn_register: "注册", fingerprint_label: "使用指纹登录",
    tutorial_title: "欢迎使用 SecurePass", tutorial_p1: "首先使用“注册”按钮注册用户。之后您可以登录并启用指纹。",
    got_it: "知道了", dont_show: "不再显示",
    msg_complete_fields: "请填写用户名和密码", msg_no_user: "未注册用户。请先注册。",
    msg_registered: "用户注册成功", msg_short_pw: "密码太短（至少 4 个字符）。",
    msg_credentials_incorrect: "凭证错误", msg_auth_failed: "身份验证失败",
    home_change: "设置", home_passkeys: "查看 passkeys", home_logout: "登出",
    passkeys_title: "已保存的 passkeys", passkeys_add: "注册 passkey", back: "返回",
    passkeys_no: "没有已保存的 passkeys。", passkeys_delete_confirm: "删除该 passkey？",
    settings_title: "更改密码与指纹", label_user: "用户名", label_newpassword: "新密码",
    ph_newpassword: "新密码", label_enable_bio: "启用生物识别认证", btn_save: "保存",
    btn_cancel: "取消", settings_saved: "已保存更改",
    label_add_bio: "添加生物识别", btn_configure_bio: "配置生物识别", biometric_title: "生物识别配置",
    biometric_placeholder: "这是生物识别配置的占位符。实现原生功能时，这个界面将调用系统的生物识别注册/验证接口。",
    biometric_do_config: "现在配置（演示）", biometric_configured: "生物识别已配置（演示）。",
    no_biometric_registered: "未注册生物识别。请在设置中启用。",
    
    label_welcome: "欢迎",
    home_welcome_prefix: "欢迎"
  }
};

function getLang(){ return localStorage.getItem(KEY_LANG) || 'en'; }
function setLang(lang){ localStorage.setItem(KEY_LANG, lang); applyTranslations(); }
function t(key){ const lang = getLang(); return (translations[lang] && translations[lang][key]) || translations.en[key] || key; }

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

  
  document.querySelectorAll('label, .readonly, .muted, .card-title, .fingerprint-label, .brand-sub').forEach(el=>{
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


const $ = id => document.getElementById(id);
function showMsgOnPage(selector, txtKeyOrText, success=false){
  const el = document.querySelector(selector);
  if(!el) return;
  const maybe = (translations[getLang()] && translations[getLang()][txtKeyOrText]);
  el.textContent = maybe ? t(txtKeyOrText) : txtKeyOrText;
  el.style.color = success ? '#4CAF50' : '';
}


async function sha256Base64(text){
  const enc = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest('SHA-256', enc);
  const arr = Array.from(new Uint8Array(buf));
  return btoa(String.fromCharCode(...arr));
}


function getStoredUser(){ return localStorage.getItem(KEY_USER); }
function getStoredHash(){ return localStorage.getItem(KEY_HASH); }
function isBioEnabled(){ return localStorage.getItem(KEY_BIO) === 'true'; }
function getPasskeys(){ try{ return JSON.parse(localStorage.getItem(KEY_PASSKEYS) || '[]'); }catch(e){ return []; } }
function savePasskeys(arr){ localStorage.setItem(KEY_PASSKEYS, JSON.stringify(arr)); }


function goTo(page){ window.location.href = page; }


function showTutorialModal(){ if(localStorage.getItem(KEY_TUTORIAL_HIDE) === 'true') return; const m = $('tutorialModal'); if(m) m.classList.remove('hidden'); }
function hideTutorialModal(persistNoShow=false){ const m = $('tutorialModal'); if(m) m.classList.add('hidden'); if(persistNoShow) localStorage.setItem(KEY_TUTORIAL_HIDE,'true'); }

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


function initRegisterPage(){
  if(getStoredUser()){ goTo('login.html'); return; }

  const btnRegisterOnly = $('btnRegisterOnly');
  const regUser = $('regUsername');
  const regPass = $('regPassword');
  const msg = $('registerMsg');

  showTutorialModal();

  btnRegisterOnly.addEventListener('click', async () => {
    const u = regUser.value.trim();
    const p = regPass.value;
    if(!u || !p){ msg.textContent = t('msg_complete_fields'); return; }
    if(p.length < 4){ msg.textContent = t('msg_short_pw'); return; }
    const hash = await sha256Base64(p);
    localStorage.setItem(KEY_USER, u);
    localStorage.setItem(KEY_HASH, hash);
    localStorage.setItem(KEY_BIO, 'false');
    localStorage.setItem(KEY_TUTORIAL_HIDE, 'true');
    msg.textContent = t('msg_registered');
    msg.style.color = '#4CAF50';
    setTimeout(()=> goTo('login.html'), 900);
  });
}


function initLoginPage(){
  if(!getStoredUser()){ goTo('register.html'); return; }

  const greeting = $('greeting');
  const passwordInput = $('password');
  const btnLogin = $('btnLogin');
  const btnFingerprint = $('btnFingerprint');
  const togglePwd = $('togglePwd');
  const msgSelector = '#msg';

  greeting.textContent = getStoredUser();

  btnLogin.addEventListener('click', async () => {
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
    togglePwd.textContent = passwordInput.type==='password' ? '👁':'🛇';
  });


function initHomePage(){
  const su = getStoredUser();
  if(!su){ goTo('register.html'); return; }
  const welcomeEl = $('welcome'); if(welcomeEl) welcomeEl.textContent = `${t('home_welcome_prefix')} — ${su}`;

  const gotoSettings = $('gotoSettings'); if(gotoSettings){ gotoSettings.addEventListener('click',(e)=>{ e.preventDefault(); goTo('settings.html'); }); }
  const gotoPasskeys = $('gotoPasskeys'); if(gotoPasskeys){ gotoPasskeys.addEventListener('click',(e)=>{ e.preventDefault(); goTo('passkeys.html'); }); }
  const btnLogout = $('btnLogout'); if(btnLogout) btnLogout.addEventListener('click', ()=> goTo('login.html'));
}


function initPasskeysPage(){
  const su = getStoredUser(); if(!su){ goTo('register.html'); return; }
  const listEl = $('passkeysList');
  const btnAdd = $('btnAddPasskey');
  renderPasskeysList();

  if(btnAdd) btnAdd.addEventListener('click', async () => {
    const name = prompt(t('passkeys_add')) || `Passkey ${Date.now()}`;
    const idBytes = crypto.getRandomValues(new Uint8Array(12));
    const idB64 = btoa(String.fromCharCode(...idBytes));
    const pk = { id: idB64, name, createdAt: new Date().toISOString() };
    const arr = getPasskeys(); arr.push(pk); savePasskeys(arr); renderPasskeysList(); alert(t('passkeys_add') + ' — OK');
  });

  function renderPasskeysList(){
    if(!listEl) return;
    const arr = getPasskeys(); listEl.innerHTML = '';
    if(arr.length === 0){ listEl.innerHTML = `<div class="muted">${t('passkeys_no')}</div>`; return; }
    arr.forEach((p,i) => {
      const node = document.createElement('div');
      node.className = 'passkey-item';
      node.innerHTML = `<div><strong>${p.name}</strong><div class="muted small">${new Date(p.createdAt).toLocaleString()}</div></div>
                        <div><button class="btn ghost" onclick="removePasskey(${i})">Delete</button></div>`;
      listEl.appendChild(node);
    });
  }
}
window.removePasskey = function(idx){
  const arr = getPasskeys(); if(idx<0||idx>=arr.length) return; if(!confirm(t('passkeys_delete_confirm'))) return; arr.splice(idx,1); savePasskeys(arr); location.reload();
};

  if(btnSave) btnSave.addEventListener('click', async () => {
    const np = newPwd.value.trim();
    const enable = chk.checked;
    const newName = currentUser.value.trim();

    if(newName && newName !== su) localStorage.setItem(KEY_USER, newName);

    if(np){
      if(np.length < 4){ msg.textContent = t('msg_short_pw'); msg.style.color = '#ff5555'; return; }
      const h = await sha256Base64(np);
      localStorage.setItem(KEY_HASH, h);
      newPwd.value = '';
    }

    localStorage.setItem(KEY_BIO, enable ? 'true' : 'false');
    msg.textContent = t('settings_saved'); msg.style.color = '#4CAF50';
    setTimeout(()=> goTo('home.html'), 900);
  });
}


