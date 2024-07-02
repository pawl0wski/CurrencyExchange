import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Currency from "@/types/currency.ts";

export interface CurrentExchangeSliceState {
    fromAmount: number,
    fromCurrency: Currency | null,
    toAmount: number,
    toCurrency: Currency | null,
}

const initialState: CurrentExchangeSliceState = {
    fromAmount: 0,
    fromCurrency: null,
    toAmount: 0,
    toCurrency: null
};

export const currentExchangeSlice = createSlice({
    name: "currentExchange",
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
        swapCurrencies(state) {
            const tempCurrency = state.fromCurrency;

            state.fromCurrency = state.toCurrency;
            state.toCurrency = tempCurrency;

            state.fromAmount = state.toAmount;
        }
    }
});

export const {
    setFromAmount,
    setFromCurrency,
    setToCurrency,
    setToAmount,
    swapCurrencies
} = currentExchangeSlice.actions;

export default currentExchangeSlice.reducer;