export function getItem(key: LocalStorageKeys) {
  if ('localStorage' in globalThis) {
    return localStorage.getItem(key);
  }
}

export function setItem(key: string, data: string) {
  if ('localStorage' in globalThis) {
    return localStorage.setItem(key, data);
  }
}

export enum LocalStorageKeys {
  User = 'user',
}
