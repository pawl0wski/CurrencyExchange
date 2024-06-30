import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Currency from "../types/currency.ts";

export interface CurrenciesSliceState {
    currencies: Currency[]
}

const initialState: CurrenciesSliceState = {
    currencies: []
}

export const currenciesSlice = createSlice({
    name: "currencies",
    initialState,
    reducers: {
        updateCurrencies: (state, action: PayloadAction<Currency[]>) => {
            state.currencies = action.payload;
        },
        updateFavorite: (state, action: PayloadAction<Currency>) => {
            const { code, favorite } = action.payload;

            const index = state.currencies.findIndex(cur => cur.code === code);
            if (index !== -1) {
                state.currencies[index].favorite = favorite;
            }
        }
    }
})

export const {updateCurrencies, updateFavorite} = currenciesSlice.actions;

export default currenciesSlice.reducer;