// assets/js/storage.js

export const KEY_USER = "securepass_user";
export const KEY_HASH = "securepass_hash";
export const KEY_PASSKEYS = "securepass_passkeys";
export const KEY_TUTORIAL_HIDE = "securepass_tutorial_hide";

export function getStoredUser(){ return localStorage.getItem(KEY_USER); }
export function setStoredUser(u){ localStorage.setItem(KEY_USER, u); }
export function getStoredHash(){ return localStorage.getItem(KEY_HASH); }
export function setStoredHash(h){ localStorage.setItem(KEY_HASH, h); }

export function getPasskeys(){ try{ return JSON.parse(localStorage.getItem(KEY_PASSKEYS) || '[]'); }catch(e){ return []; } }
export function savePasskeys(arr){ localStorage.setItem(KEY_PASSKEYS, JSON.stringify(arr)); }

export function clearAppData(){ 
  localStorage.removeItem(KEY_USER);
  localStorage.removeItem(KEY_HASH);
  localStorage.removeItem(KEY_PASSKEYS);
  localStorage.removeItem(KEY_TUTORIAL_HIDE);
}
