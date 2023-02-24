import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    categoryId: 0,
    sort: { value: "рейтингу", sortBy: "rating", order: "desc" },
    searchValue: ''
}

const FilterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setCategoryId(state, actions) {
            state.categoryId = actions.payload;
        },
        setSort(state, actions) {
            state.sort = actions.payload;
        },
        setSearchValue(state, actions) {
            state.searchValue = actions.payload;
        }
    }
})

export const { setCategoryId, setSort, setSearchValue } = FilterSlice.actions;

export default FilterSlice.reducer;