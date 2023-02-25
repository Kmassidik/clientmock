import { configureStore } from '@reduxjs/toolkit'
import slice from "./Features/Fetch/fetchData";

export default configureStore({
    reducer: {
        fetchData: slice,
    },
})