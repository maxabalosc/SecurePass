// assets/js/storage.js

export const KEY_USER = "securepass_user";
export const KEY_PW_RECORD = "securepass_pw_record"; 
export const KEY_TUTORIAL_HIDE = "securepass_tutorial_hide";

export function getStoredUser(){ return localStorage.getItem(KEY_USER); }
export function setStoredUser(u){ localStorage.setItem(KEY_USER, u); }

export function getStoredPasswordRecord(){
  try {
    const v = localStorage.getItem(KEY_PW_RECORD);
    return v ? JSON.parse(v) : null;
  } catch(e){ return null; }
}
export function setStoredPasswordRecord(obj){
  localStorage.setItem(KEY_PW_RECORD, JSON.stringify(obj));
}

export function clearAppData(){ 
  localStorage.removeItem(KEY_USER);
  localStorage.removeItem(KEY_PW_RECORD);
  localStorage.removeItem(KEY_TUTORIAL_HIDE);
}
