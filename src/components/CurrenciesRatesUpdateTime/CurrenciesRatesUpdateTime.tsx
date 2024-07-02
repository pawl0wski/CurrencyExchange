import { useSelector } from "react-redux";
import { RootStoreState } from "@/store.ts";
import { useMemo } from "react";
import styles from "./CurrenciesRatesUpdateTime.module.scss";
import { useCurrenciesRatesUpdater } from "@/hooks/useCurrenciesRatesUpdater.ts";

export default function CurrenciesRatesUpdateTime() {
    const updateTimestamp = useSelector<RootStoreState, number | null>((state) => state.currenciesRates.timestamp);
    const updateCurrenciesRates = useCurrenciesRatesUpdater();

    const updateTimeText = useMemo(() => {
        if (updateTimestamp === null)
            return "Pobieranie...";

        const updateDate = new Date(updateTimestamp);
        return `Kursy zaaktualizowano: ${updateDate.toLocaleString("pl-PL")}.`;
    }, [updateTimestamp]);

    return <div className={styles.updateTimeWithRefreshButton}>
        <p className={styles.updateTime}>{updateTimeText}</p>
        <a className={styles.refreshButton} onClick={updateCurrenciesRates}>Zaaktualizuj.</a>
    </div>;
}