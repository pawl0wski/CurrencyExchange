import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExchangeSliceState } from "./exchangeSlice.ts";

export interface HistorySliceState {
    exchanges: ExchangeSliceState[]
}

const initialState: HistorySliceState = {
    exchanges: []
}

export const historySlice = createSlice({
    name: "history",
    initialState,
    reducers: {
        addHistoryExchange(state, action: PayloadAction<ExchangeSliceState>) {
            state.exchanges.push(action.payload);
        },
        removeHistoryExchange(state, action: PayloadAction<ExchangeSliceState>) {
            state.exchanges.splice(state.exchanges.indexOf(action.payload), 1);
        }
    }
})

export const {addHistoryExchange, removeHistoryExchange} = historySlice.actions;

export default historySlice.reducer;