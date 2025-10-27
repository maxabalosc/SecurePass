// assets/js/utils.js

export const $ = id => document.getElementById(id);

export function showMsgOnPage(selector, txtKeyOrText, success=false, tFn){
  const el = document.querySelector(selector);
  if(!el) return;
  const maybe = (tFn && tFn(txtKeyOrText));
  el.textContent = maybe ? tFn(txtKeyOrText) : txtKeyOrText;
  el.style.color = success ? '#4CAF50' : '';
}

export async function sha256Base64(text){
  const enc = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest('SHA-256', enc);
  const arr = Array.from(new Uint8Array(buf));
  return btoa(String.fromCharCode(...arr));
}

export function goTo(page){ window.location.href = page; }
