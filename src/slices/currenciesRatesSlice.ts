import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CurrencyRates from "@/types/currencyRates.ts";

export interface CurrenciesRatesSliceState {
    currencyRates: CurrencyRates | null;
}

const initialState: CurrenciesRatesSliceState = {
    currencyRates: null
}

export const currenciesRatesSlice = createSlice({
    name: "currencyRates",
    initialState,
    reducers: {
        updateCurrencyRates(state, action: PayloadAction<CurrencyRates>) {
            state.currencyRates = action.payload;
        }
    }
})

export const {updateCurrencyRates} = currenciesRatesSlice.actions;

export default currenciesRatesSlice.reducer;