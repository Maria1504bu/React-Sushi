import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    totalPrice: 0, 
    totalCount: 0
}

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, actions) {
            const existItem = state.items.find((obj) => obj.id === actions.payload.id && obj.type === actions.payload.type);
            if (existItem) {
                existItem.count++;
            } else{
            state.items.push({ ...actions.payload, count: 1 });
            }
            state.totalPrice = state.items.reduce((sum, item) => sum + item.count * item.price, 0)
            state.totalCount = state.items.reduce((sum, item) => sum + item.count, 0);
        },
        minusItem(state, actions) {
            const existItem = state.items.find((obj) => obj.id === actions.payload.id && obj.type === actions.payload.type);
            if (existItem.count === 1) {
                state.items = state.items.filter((obj) => obj.id !== actions.payload.id || obj.type !== actions.payload.type);
            } else {
                existItem.count--;
            }
            state.totalPrice = state.items.reduce((sum, item) => sum + item.count * item.price, 0)
            state.totalCount = state.items.reduce((sum, item) => sum + item.count, 0);
        },
        removeItem(state, actions) {
            state.items = state.items.filter((obj) => obj.id !== actions.payload.id || obj.type !== actions.payload.type);
            state.totalPrice = state.items.reduce((sum, item) => sum + item.count * item.price, 0)
            state.totalCount = state.items.reduce((sum, item) => sum + item.count, 0);
        },
        clearCart(state) {
            state.items = [];
            state.totalPrice = 0;
            state.totalCount = 0;
          }
    }
})
export const { addItem, minusItem, removeItem, clearCart } = CartSlice.actions;

export default CartSlice.reducer;