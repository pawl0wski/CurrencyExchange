import { configureStore } from "@reduxjs/toolkit";
import exchangeReducer, { ExchangeSliceState } from "./slices/exchangeSlice.ts";
import currenciesReducer, { CurrenciesSliceState } from "./slices/currenciesSlice.ts";
import currenciesRatesReducer, { CurrenciesRatesSliceState } from "./slices/currenciesRatesSlice.ts";
import historyReducer, { HistorySliceState } from "./slices/historySlice.ts";
import { loadStateFromLocalStorage, saveStoreToLocalStorage } from "@/utils/stateStorage.ts";

export interface RootStoreState {
    exchange: ExchangeSliceState,
    currencies: CurrenciesSliceState,
    currenciesRates: CurrenciesRatesSliceState,
    history: HistorySliceState
}

const store = configureStore({
    preloadedState: loadStateFromLocalStorage(),
    reducer: {
        history: historyReducer,
        exchange: exchangeReducer,
        currencies: currenciesReducer,
        currenciesRates: currenciesRatesReducer
    }
});

store.subscribe(() => {
    saveStoreToLocalStorage(store.getState());
});

export default store;