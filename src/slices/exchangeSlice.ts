import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Currency from "../types/currency.ts";

export interface ExchangeSliceState {
    fromAmount: number,
    fromCurrency: Currency | null,
    toAmount: number,
    toCurrency: Currency | null,
}

const initialState: ExchangeSliceState = {
    fromAmount: 0,
    fromCurrency: null,
    toAmount: 0,
    toCurrency: null,
}

export const exchangeSlice = createSlice({
    name: "exchange",
    initialState,
    reducers: {
        setFromAmount(state, action: PayloadAction<number>) {
            state.fromAmount = action.payload;
        },
        setFromCurrency(state, action: PayloadAction<Currency>) {
            state.fromCurrency = action.payload;
        },
        setToCurrency(state, action: PayloadAction<Currency>) {
            state.toCurrency = action.payload;
        },
        setToAmount(state, action: PayloadAction<number>) {
            state.toAmount = action.payload;
        },
    }
})

export const {setFromAmount, setFromCurrency, setToCurrency, setToAmount} = exchangeSlice.actions;

export default exchangeSlice.reducer;