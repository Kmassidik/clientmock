import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./Features/Counter/counterSlice";
import nameChanger from "./Features/NameChanger/nameChanger";

export default configureStore({
    reducer: {
        counter : counterReducer,
        name : nameChanger
    },
})