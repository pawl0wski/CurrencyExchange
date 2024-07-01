import HistoryPanelEntry from "./HistoryPanelEntry.tsx";
import styles from "./HistoryPanel.module.scss";
import { useHistoryExchanges } from "@/hooks/useHistoryExchanges.ts";

export default function HistoryPanel() {
    const historyExchanges = useHistoryExchanges();

    return <div className={styles.historyPanel}>
        {historyExchanges.map(
            (historyEntry) =>
                <HistoryPanelEntry key={historyEntry.id} historyExchange={historyEntry} />)}
    </div>;
}