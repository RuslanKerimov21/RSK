import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    yotube: false,
    sidebar: false,
    levels: ['Высшее', 'Среднее'],
    workses: [],
}
const payloadReduce = createSlice({
    name: 'payloads',
    initialState,
    reducers: {
        openYT(state, action) {
            state.yotube = action.payload;
        },
        openSidebar(state, action) {
            state.sidebar = action.payload;
        },
    }
})
export const { openYT, openSidebar, openHelpbox, openLoacalization } = payloadReduce.actions;
export default payloadReduce.reducer;