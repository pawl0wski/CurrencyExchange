import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrentExchangeSliceState } from "./currentExchangeSlice.ts";

export interface ExchangeHistoriesSliceState {
    exchanges: CurrentExchangeSliceState[]
}

const initialState: ExchangeHistoriesSliceState = {
    exchanges: []
}

export const exchangeHistoriesSlice = createSlice({
    name: "exchangeHistories",
    initialState,
    reducers: {
        addHistoryExchange(state, action: PayloadAction<CurrentExchangeSliceState>) {
            state.exchanges.push(action.payload);
        },
        removeHistoryExchange(state, action: PayloadAction<CurrentExchangeSliceState>) {
            state.exchanges.splice(state.exchanges.indexOf(action.payload), 1);
        }
    }
})

export const {addHistoryExchange, removeHistoryExchange} = exchangeHistoriesSlice.actions;

export default exchangeHistoriesSlice.reducer;