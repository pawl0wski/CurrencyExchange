import HistoryPanelEntry from "./HistoryPanelEntry.tsx";
import { useSelector } from "react-redux";
import { RootStoreState } from "@/store.ts";
import { CurrentExchangeSliceState } from "@/slices/currentExchangeSlice.ts";
import styles from "./HistoryPanel.module.scss";

export default function HistoryPanel() {
    const historyExchanges = useSelector<RootStoreState, CurrentExchangeSliceState[]>(state => state.exchangeHistories.exchanges);

    return <div className={styles.historyPanel}>
        {historyExchanges.map(
            (historyEntry, i) =>
                <HistoryPanelEntry key={i} historyExchange={historyEntry} />)}
    </div>;
}