import {configureStore} from "@reduxjs/toolkit";
import exchangeReducer, { ExchangeSliceState } from "./slices/exchangeSlice.ts";
import currenciesReducer, {CurrenciesSliceState} from "./slices/currenciesSlice.ts";

export interface RootStoreState {
    exchange: ExchangeSliceState,
    currencies: CurrenciesSliceState
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
        exchange: exchangeReducer,
        currencies: currenciesReducer,
    }
})

    store.subscribe(() => {
    saveState(store.getState());
})

export default store;