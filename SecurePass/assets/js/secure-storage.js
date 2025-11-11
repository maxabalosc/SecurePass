// assets/js/secure-storage.js
import { idbGet, idbPut } from './idb-simple.js';
import { randomBytes, toBase64, fromBase64, deriveKeyFromPassword, encryptObject, decryptObject, deriveBitsForPasswordRecord } from './crypto-utils.js';

const STORE_KEY = 'securepass:encrypted_passkeys';
const SALT_KEY = 'securepass:enc_salt';

export async function saveEncryptedPasskeys(passkeysArray, opts){
  let aesKey = null;

  if(opts && opts.aesKey){
    aesKey = opts.aesKey;
  } else if(opts && opts.password){
    
    let saltB64 = await idbGet(SALT_KEY);
    if(!saltB64){
      const salt = randomBytes(16);
      saltB64 = toBase64(salt.buffer);
      await idbPut(SALT_KEY, saltB64);
    }
    const saltBuf = fromBase64(saltB64);
    aesKey = await deriveKeyFromPassword(opts.password, saltBuf);
  } else {
    throw new Error('saveEncryptedPasskeys requires opts.aesKey or opts.password');
  }

  const { ct, iv } = await encryptObject(passkeysArray, aesKey);
  await idbPut(STORE_KEY, { ct, iv });
}

export async function loadEncryptedPasskeys(opts){
  if(opts && opts.aesKey){
    const rec = await idbGet(STORE_KEY);
    if(!rec) return [];
    const arr = await decryptObject(rec.ct, rec.iv, opts.aesKey);
    return arr;
  } else if(opts && opts.password){
    const rec = await idbGet(STORE_KEY);
    
    let saltB64 = await idbGet(SALT_KEY);
    if(!saltB64){
      
      const salt = randomBytes(16);
      saltB64 = toBase64(salt.buffer);
      await idbPut(SALT_KEY, saltB64);
    }
    const saltBuf = fromBase64(saltB64);

    const aesKey = await deriveKeyFromPassword(opts.password, saltBuf);

    if(!rec) {
      return { arr: [], aesKey };
    }

    const arr = await decryptObject(rec.ct, rec.iv, aesKey);
    return { arr, aesKey };
  } else {
    throw new Error('loadEncryptedPasskeys requires opts.aesKey or opts.password');
  }
}

export async function clearEncryptedPasskeys(){
  await idbPut(STORE_KEY, null);
}
