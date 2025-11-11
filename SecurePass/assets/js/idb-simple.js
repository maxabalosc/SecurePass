// assets/js/idb-simple.js
export function openDB(name='securepass-db', store='kv') {
  return new Promise((resolve, reject) => {
    const rq = indexedDB.open(name, 1);
    rq.onupgradeneeded = () => {
      const db = rq.result;
      if(!db.objectStoreNames.contains(store)) db.createObjectStore(store);
    };
    rq.onsuccess = () => resolve(rq.result);
    rq.onerror = () => reject(rq.error);
  });
}

export async function idbPut(key, value, name='securepass-db', store='kv') {
  const db = await openDB(name, store);
  return new Promise((res, rej) => {
    const tx = db.transaction(store, 'readwrite');
    tx.objectStore(store).put(value, key);
    tx.oncomplete = () => res();
    tx.onerror = () => rej(tx.error);
  });
}

export async function idbGet(key, name='securepass-db', store='kv') {
  const db = await openDB(name, store);
  return new Promise((res, rej) => {
    const tx = db.transaction(store, 'readonly');
    const rq = tx.objectStore(store).get(key);
    rq.onsuccess = () => res(rq.result);
    rq.onerror = () => rej(rq.error);
  });
}

export async function idbDelete(key, name='securepass-db', store='kv'){
  const db = await openDB(name, store);
  return new Promise((res, rej) => {
    const tx = db.transaction(store, 'readwrite');
    tx.objectStore(store).delete(key);
    tx.oncomplete = () => res();
    tx.onerror = () => rej(tx.error);
  });
}
