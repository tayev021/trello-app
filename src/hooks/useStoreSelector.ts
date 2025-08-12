import { useSelector, type TypedUseSelectorHook } from 'react-redux';
import type { IStore } from '../store/store';

export const useStoreSelector: TypedUseSelectorHook<IStore> = useSelector;
