import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./counterSlice"
let store = configureStore({
    reducer:{
        counter:CounterSlice
        // test:TestSlice,
        // anka:AnkaSlice
    }
})

export default store