import type { IStore } from '../store/store';

export function saveStore(store: IStore): void {
  const serializedStore = JSON.stringify(store);
  localStorage.setItem('store', serializedStore);
}
