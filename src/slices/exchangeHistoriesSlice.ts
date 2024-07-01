import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrentExchangeSliceState } from "./currentExchangeSlice.ts";
import { v4 as uuidv4 } from "uuid";

export interface HistoryExchangeState extends CurrentExchangeSliceState {
    id: string,
    timestamp: number,
}

export interface ExchangeHistoriesSliceState {
    exchanges: HistoryExchangeState[];
}

const initialState: ExchangeHistoriesSliceState = {
    exchanges: []
};

export const exchangeHistoriesSlice = createSlice({
    name: "exchangeHistories",
    initialState,
    reducers: {
        addHistoryExchange(state, action: PayloadAction<CurrentExchangeSliceState>) {
            state.exchanges.push({ ...action.payload, timestamp: Date.now(), id: uuidv4() });
        },
        removeHistoryExchange(state, action: PayloadAction<string>) {
            state.exchanges = state.exchanges.filter(exchange => exchange.id !== action.payload);
        }
    }
});

export const { addHistoryExchange, removeHistoryExchange } = exchangeHistoriesSlice.actions;

export default exchangeHistoriesSlice.reducer;