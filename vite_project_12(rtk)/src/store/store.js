import { configureStore } from '@reduxjs/toolkit'
import {counterSlice} from "./slices/counter"

const store = configureStore({
    reducer: {
        counter:counterSlice
    }
})

export const RootState = store.getState
export const AppDispatch = store.dispatch

export default store
