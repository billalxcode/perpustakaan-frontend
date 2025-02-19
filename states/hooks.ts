import { useDispatch, useSelector, useStore } from 'react-redux';
import { AppDispatch, AppStore, RootState } from './store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: (selector: (state: RootState) => unknown) => unknown = useSelector;
export const useAppStore: () => AppStore = useStore;