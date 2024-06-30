import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Currency from "../types/currency.ts";

export interface ExchangeSliceState {
    fromAmount: number,
    from: Currency | null,
    toAmount: number,
    to: Currency | null,
}

const initialState: ExchangeSliceState = {
    fromAmount: 0,
    from: null,
    toAmount: 0,
    to: null,
}

export const exchangeSlice = createSlice({
    name: "exchange",
    initialState,
    reducers: {
        setFromAmount(state, action: PayloadAction<number>) {
            state.fromAmount = action.payload;
        },
        setFromCurrency(state, action: PayloadAction<Currency>) {
            state.from = action.payload;
        },
        setToCurrency(state, action: PayloadAction<Currency>) {
            state.to = action.payload;
        }
    }
})

export const {setFromAmount, setFromCurrency, setToCurrency} = exchangeSlice.actions;

export default exchangeSlice.reducer;