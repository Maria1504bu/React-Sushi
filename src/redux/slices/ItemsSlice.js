import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItems = createAsyncThunk('items/fetchStatus',
    async (_, thunkApi) => {
        const {categoryId, sort, searchValue, currentPage} = thunkApi.getState().filter;
        let page = "?page=" + currentPage + "&limit=4";
        let sortWithOrder = sort ? "&sortBy=" + sort.sortBy + "&order=" + sort.order : "";
        let category = categoryId === 0 ? '' : '&category=' + categoryId;
        let search = searchValue === '' ? '' : "&title=" + searchValue
        
        const { data } = await axios.get("https://63f3a4c5de3a0b242b46ab95.mockapi.io/items" + page + sortWithOrder + category + search);
        return data;
    }
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