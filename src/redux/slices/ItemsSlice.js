import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItems = createAsyncThunk('items/fetchStatus',
    async ({page, sortWithOrder, category, search}) => 
        await (await axios.get("https://63f3a4c5de3a0b242b46ab95.mockapi.io/items" + page + sortWithOrder + category + search)).data
)

const initialState = {
    items : [],
    status: "isLoading"
}
const ItemsSlice = createSlice({
    name: 'items', 
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchItems.pending, (state) => {
            state.items = [];
            state.status = 'isLoading';
        });
        builder.addCase(fetchItems.fulfilled, (state, actions) => {
            console.log(actions.payload);
            state.items = actions.payload;
            state.status = 'success';
        });
        builder.addCase(fetchItems.rejected, (state) => {
            state.items = [];
            state.status = 'error';
        })
    }
})

export default ItemsSlice.reducer;