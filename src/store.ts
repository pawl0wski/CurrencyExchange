import {configureStore} from "@reduxjs/toolkit";
import exchangeReducer, { ExchangeSliceState } from "./slices/exchangeSlice.ts";

export interface RootStoreState {
    exchange: ExchangeSliceState
}

export default configureStore({
    reducer: {
        exchange: exchangeReducer,
    }
})