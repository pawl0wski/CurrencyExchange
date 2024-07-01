import { configureStore } from "@reduxjs/toolkit";
import currentExchangeReducer, { CurrentExchangeSliceState } from "./slices/currentExchangeSlice.ts";
import currenciesReducer, { CurrenciesSliceState } from "./slices/currenciesSlice.ts";
import currenciesRatesReducer, { CurrenciesRatesSliceState } from "./slices/currenciesRatesSlice.ts";
import exchangeHistoriesReducer, { ExchangeHistoriesSliceState } from "./slices/exchangeHistoriesSlice.ts";
import { loadStateFromLocalStorage, saveStoreToLocalStorage } from "@/utils/stateStorage.ts";

export interface RootStoreState {
    currentExchange: CurrentExchangeSliceState,
    currencies: CurrenciesSliceState,
    currenciesRates: CurrenciesRatesSliceState,
    exchangeHistories: ExchangeHistoriesSliceState
}

const store = configureStore({
    preloadedState: loadStateFromLocalStorage(),
    reducer: {
        exchangeHistories: exchangeHistoriesReducer,
        currentExchange: currentExchangeReducer,
        currencies: currenciesReducer,
        currenciesRates: currenciesRatesReducer
    }
});

store.subscribe(() => {
    saveStoreToLocalStorage(store.getState());
});

export default store;