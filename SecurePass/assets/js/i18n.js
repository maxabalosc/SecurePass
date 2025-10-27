// assets/js/i18n.js

// translations
export const KEY_LANG = "securepass_lang";

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

export function getLang(){ return localStorage.getItem(KEY_LANG) || 'en'; }
export function setLang(lang){ localStorage.setItem(KEY_LANG, lang); applyTranslations(); }
export function t(key){ const lang = getLang(); return (translations[lang] && translations[lang][key]) || (translations.en && translations.en[key]) || key; }

export function applyTranslations(){
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
  if(welcomeEl && localStorage.getItem('securepass_user')){
    const prefix = t('home_welcome_prefix') || t('label_welcome') || '';
    welcomeEl.textContent = `${prefix} — ${localStorage.getItem('securepass_user')}`;
  }
}
