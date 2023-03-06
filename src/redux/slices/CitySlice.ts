import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface City {
    name: string,
    pathData: string | null
}

const initialState: City = {
    name: "Виберіть місто",
    pathData: ""
}

const CitySlice = createSlice({
    name: "city",
    initialState,
    reducers: {
        setCity(state, actions: PayloadAction<City>) {
            console.log("state");
            state.name = actions.payload.name;
            if (actions.payload.pathData) {
                const regex = new RegExp("m [\\d.]+,[\\d.]+");
                state.pathData = actions.payload.pathData.replace(regex, "m 10,10");
            }
            console.log(state);
            console.log(state.name);
            console.log(state.pathData);
        }
    }
})

export const { setCity } = CitySlice.actions;
export default CitySlice.reducer;