import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CurrencyRate from "@/types/currencyRate.ts";

export interface CurrenciesRatesSliceState {
    currencyRates: CurrencyRate[];
    timestamp: number | null
}

const initialState: CurrenciesRatesSliceState = {
    currencyRates: [],
    timestamp: null,
}

export const currenciesRatesSlice = createSlice({
    name: "currenciesRates",
    initialState,
    reducers: {
        updateCurrencyRates(state, action: PayloadAction<CurrencyRate[]>) {
            state.currencyRates = action.payload;
        },
        updateCurrencyRatesTimestamp(state, action: PayloadAction<number>) {
            state.timestamp = action.payload;
        }
    }
})

export const {updateCurrencyRates, updateCurrencyRatesTimestamp} = currenciesRatesSlice.actions;

export default currenciesRatesSlice.reducer;