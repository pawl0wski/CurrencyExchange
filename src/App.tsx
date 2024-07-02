import CurrencyExchangePanel from "@/components/CurrencyExchangePanel/CurrencyExchangePanel.tsx";
import styles from "./App.module.scss";
import HistoryPanel from "@/components/HistoryPanel/HistoryPanel.tsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStoreState } from "@/store.ts";
import Currency from "@/types/currency.ts";
import CurrenciesRatesUpdateTime from "@/components/CurrenciesRatesUpdateTime/CurrenciesRatesUpdateTime.tsx";
import { useCurrenciesUpdater } from "@/hooks/useCurrenciesUpdater.ts";

function App() {
    const dispatch = useDispatch();
    const currencies = useSelector<RootStoreState, Currency[]>(state => state.currencies.currencies);
    // const updateCurrenciesRates = useCurrenciesRatesUpdater();
    const updateCurrencies = useCurrenciesUpdater();

    useEffect(() => {
        const updateState = async () => {
            if (currencies.length === 0)
                await updateCurrencies();

            // await updateCurrenciesRates()
        };

        updateState().then(() => console.log("Data updated."));

    }, [currencies.length, dispatch]);

    return (
        <main className={styles.app}>
            <h1>Przelicznik walut</h1>
            <CurrenciesRatesUpdateTime />
            <CurrencyExchangePanel />
            <h2>Historia</h2>
            <HistoryPanel />
        </main>
    );
}

export default App;
