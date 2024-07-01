import CurrencyExchangePanel from "@/components/CurrencyExchangePanel/CurrencyExchangePanel.tsx";
import styles from "./App.module.scss";
import HistoryPanel from "@/components/HistoryPanel/HistoryPanel.tsx";
import { useEffect } from "react";
import { getCurrenciesFromApi } from "@/services/currenciesService.ts";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrencies } from "@/slices/currenciesSlice.ts";
import { RootStoreState } from "@/store.ts";
import Currency from "@/types/currency.ts";

function App() {
    const dispatch = useDispatch();
    const currencies = useSelector<RootStoreState, Currency[]>(state => state.currencies.currencies);

    useEffect(() => {
        if (currencies.length === 0 )
            getCurrenciesFromApi().then((currencies) => {
                dispatch(updateCurrencies(currencies))
            })

            // getCurrenciesRateFromApi().then((currenciesRatesWithTimestamp) => {
            //     const {timestamp, currenciesRatios} = currenciesRatesWithTimestamp;
            //     dispatch(updateCurrencyRates(currenciesRatios))
            //     dispatch(updateCurrencyRatesTimestamp(timestamp))
            // })
    }, [currencies.length, dispatch]);

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
