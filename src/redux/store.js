import navReduce from './reducers/navReduce';
import mainReduce from './reducers/homeReduce';
import payloadReduce from './reducers/payloadReduce';
import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
    reducer: {
        main: mainReduce,
        navigation: navReduce,
        payloads: payloadReduce,
    },
})