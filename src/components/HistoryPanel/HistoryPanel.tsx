import HistoryPanelEntry from "./HistoryPanelEntry.tsx";
import { useSelector } from "react-redux";
import { RootStoreState } from "../../store.ts";
import { ExchangeSliceState } from "../../slices/exchangeSlice.ts";
import styles from "./HistoryPanel.module.scss";

export default function HistoryPanel() {
    const historyExchanges = useSelector<RootStoreState, ExchangeSliceState[]>(state => state.history.exchanges);

    return <div className={styles.historyPanel}>
        {historyExchanges.map(
            (historyEntry, i) =>
                <HistoryPanelEntry key={i} historyExchange={historyEntry} />)}
    </div>;
}