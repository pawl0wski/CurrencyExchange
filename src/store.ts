import {configureStore} from "@reduxjs/toolkit";
import exchangeReducer, { ExchangeSliceState } from "./slices/exchangeSlice.ts";
import currenciesReducer, {CurrenciesSliceState} from "./slices/currenciesSlice.ts";
import currenciesRatesReducer, { CurrenciesRatesSliceState } from "./slices/currenciesRatesSlice.ts";
import historyReducer, { HistorySliceState } from "./slices/historySlice.ts";

export interface RootStoreState {
    exchange: ExchangeSliceState,
    currencies: CurrenciesSliceState,
    currenciesRates: CurrenciesRatesSliceState,
    history: HistorySliceState
}

function saveState(state: RootStoreState) {
    const serializedState = JSON.stringify(state)
    localStorage.setItem("state", serializedState)
}

function loadState() : RootStoreState | null {
    const serializedState = localStorage.getItem("state");

    if (serializedState !== null)
        return JSON.parse(serializedState);

    return null;
}

const savedState = loadState()

const store =  configureStore({
    preloadedState: savedState ?? undefined,
    reducer: {
        history: historyReducer,
        exchange: exchangeReducer,
        currencies: currenciesReducer,
        currenciesRates: currenciesRatesReducer,
    }
})

    store.subscribe(() => {
    saveState(store.getState());
})

export default store;