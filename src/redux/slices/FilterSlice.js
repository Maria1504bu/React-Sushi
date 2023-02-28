import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    categoryId: 0,
    sort: { value: "рейтингу", sortBy: "rating", order: "desc" },
    searchValue: '',
    currentPage: 1
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
        },
        setCurrentPage(state, actions){
            state.currentPage = actions.payload;
        },
        setFilter(state, actions){
            state.categoryId = Number(actions.payload.categoryId);
            state.sort = actions.payload.sort;
            state.searchValue = actions.payload.searchValue;
            state.currentPage = Number(actions.payload.currentPage);
        }
    }
})

export const { setCategoryId, setSort, setSearchValue, setCurrentPage, setFilter } = FilterSlice.actions;

export default FilterSlice.reducer;