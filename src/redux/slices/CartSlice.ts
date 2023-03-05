import { cartItemsFromLS, computeTotalCount, computeTotalPrice, saveToLS } from './../../utils/cartCalculation';
import { StoreState } from './../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CartItemProps = {
    id: string,
    title: string,
    imageUrl: string,
    price: number,
    type?: string,
    count: number
}

export interface CartSliceState {
    items: CartItemProps[],
    totalPrice: number,
    totalCount: number
}

const initialState: CartSliceState = cartItemsFromLS();

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, actions: PayloadAction<CartItemProps>) {
            const existItem = state.items.find((obj) => obj.id === actions.payload.id && obj.type === actions.payload.type);
            if (existItem) {
                existItem.count++;
            } else {
                state.items.push({ ...actions.payload, count: 1 });
            }
            saveToLS(state.items);
            state.totalCount = computeTotalCount(state.items);
            state.totalPrice = computeTotalPrice(state.items);
        },
        minusItem(state, actions: PayloadAction<CartItemProps>) {
            const existItem = state.items.find((obj) => obj.id === actions.payload.id && obj.type === actions.payload.type);
            if (existItem) existItem.count--;
            saveToLS(state.items);
            state.totalCount = computeTotalCount(state.items);
            state.totalPrice = computeTotalPrice(state.items);
        },
        removeItem(state, actions: PayloadAction<CartItemProps>) {
            state.items = state.items.filter((obj) => obj.id !== actions.payload.id || obj.type !== actions.payload.type);
            saveToLS(state.items);
            state.totalCount = computeTotalCount(state.items);
            state.totalPrice = computeTotalPrice(state.items);
        },
        clearCart(state) {
            state.items = [];
            state.totalPrice = 0;
            state.totalCount = 0;
        }
    }
})
export const { addItem, minusItem, removeItem, clearCart } = CartSlice.actions;

export const selectItemCount = (id: string, type: string | undefined) => (state: StoreState) =>
    state.cart.items.find((item: CartItemProps) => item.id === id && item.type === type)?.count;

export default CartSlice.reducer;
