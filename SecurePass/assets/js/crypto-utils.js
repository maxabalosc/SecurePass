// assets/js/crypto-utils.js
const enc = new TextEncoder();
const dec = new TextDecoder();

export function randomBytes(len=16){
  const b = new Uint8Array(len);
  crypto.getRandomValues(b);
  return b;
}

export function toBase64(buf){
  return btoa(String.fromCharCode(...new Uint8Array(buf)));
}
export function fromBase64(b64){
  const s = atob(b64);
  const arr = new Uint8Array(s.length);
  for(let i=0;i<s.length;i++) arr[i] = s.charCodeAt(i);
  return arr.buffer;
}

export async function deriveKeyFromPassword(password, saltBuffer, iterations = 200_000){
  const pwKey = await crypto.subtle.importKey('raw', enc.encode(password), {name:'PBKDF2'}, false, ['deriveKey']);
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt: saltBuffer, iterations, hash: 'SHA-256' },
    pwKey,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt','decrypt']
  );
}

export async function deriveBitsForPasswordRecord(password, saltBuffer, iterations = 200_000) {
  const pwKey = await crypto.subtle.importKey('raw', enc.encode(password), {name:'PBKDF2'}, false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({ name:'PBKDF2', salt: saltBuffer, iterations, hash: 'SHA-256' }, pwKey, 256);
  return bits;
}

export async function encryptObject(obj, aesKey){
  const iv = randomBytes(12);
  const plain = enc.encode(JSON.stringify(obj));
  const ct = await crypto.subtle.encrypt({name:'AES-GCM', iv}, aesKey, plain);
  return { ct: toBase64(ct), iv: toBase64(iv) };
}

export async function decryptObject(ctB64, ivB64, aesKey){
  const ct = fromBase64(ctB64);
  const iv = new Uint8Array(fromBase64(ivB64));
  const plainBuf = await crypto.subtle.decrypt({name:'AES-GCM', iv}, aesKey, ct);
  return JSON.parse(dec.decode(plainBuf));
}
