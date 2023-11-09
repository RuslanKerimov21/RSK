import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    sliders: [],
}
const mainReduce = createSlice({
    name: 'offer',
    initialState,
    reducers: {
        setSDLS(state, action){

        }
    }
})
export const { setSDLS } = mainReduce.actions;
export default mainReduce.reducer;