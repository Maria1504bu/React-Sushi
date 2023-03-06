import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/FilterSlice'
import cart from './slices/CartSlice'
import items from './slices/ItemsSlice'

export const store = configureStore({
    reducer: { filter, cart, items }
})

export type StoreState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();