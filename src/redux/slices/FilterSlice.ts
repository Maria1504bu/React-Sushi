import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortType } from '../../components/Sort';

export interface FilterSliceState {
    categoryId: number,
    sort: SortType,
    searchValue: string,
    currentPage: number
}

const initialState: FilterSliceState = {
    categoryId: 0,
    sort: { value: "рейтингу", sortBy: "rating", order: "desc" },
    searchValue: '',
    currentPage: 1
}

const FilterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setCategoryId(state, actions: PayloadAction<number>) {
            state.categoryId = actions.payload;
        },
        setSort(state, actions: PayloadAction<SortType>) {
            state.sort = actions.payload;
        },
        setSearchValue(state, actions: PayloadAction<string>) {
            state.searchValue = actions.payload;
        },
        setCurrentPage(state, actions: PayloadAction<number>){
            state.currentPage = actions.payload;
        },
        setFilter(state, actions: PayloadAction<FilterSliceState>){
            state.categoryId = Number(actions.payload.categoryId);
            state.sort = actions.payload.sort;
            state.searchValue = actions.payload.searchValue;
            state.currentPage = Number(actions.payload.currentPage);
        }
    }
})

export const { setCategoryId, setSort, setSearchValue, setCurrentPage, setFilter } = FilterSlice.actions;

export default FilterSlice.reducer;