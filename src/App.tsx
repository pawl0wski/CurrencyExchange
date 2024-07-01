import './App.module.scss'
import CurrencyExchangePanel from "./components/CurrencyExchangePanel/CurrencyExchangePanel.tsx";
import styles from "./App.module.scss";
import HistoryPanel from "./components/HistoryPanel/HistoryPanel.tsx";
import { useEffect } from "react";
import { getCurrenciesFromApi } from "./services/currenciesService.ts";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrencies } from "./slices/currenciesSlice.ts";
import { RootStoreState } from "./store.ts";
import Currency from "./types/currency.ts";

function App() {
    const dispatch = useDispatch();
    const currencies = useSelector<RootStoreState, Currency[]>(state => state.currencies.currencies);

    useEffect(() => {
        if (currencies.length === 0 )
            getCurrenciesFromApi().then((currencies) => {
                dispatch(updateCurrencies(currencies))
            })

            // DEBUG: To reduce Quota usage
            // getCurrenciesRateFromApi().then((currenciesRate) => {
            //     dispatch(updateCurrencyRates(currenciesRate))
            // })
    }, []);

    return (
    <main className={styles.app}>
        <h1>Przelicznik walut</h1>
        <CurrencyExchangePanel />
        <h2>Historia</h2>
        <HistoryPanel />
    </main>
  )
}

export default App
