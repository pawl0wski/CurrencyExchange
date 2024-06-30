import HistoryExchange from "../../types/historyExchange.ts";
import { MdArrowRightAlt, MdDelete } from "react-icons/md";
import styles from "./HistoryPanelEntry.module.scss";
import CurrencyFlag from "../CurrencyFlag/CurrencyFlag.tsx";

interface HistoryPanelEntryProps {
    historyEntry : HistoryExchange;
}

export default function HistoryPanelEntry(props: HistoryPanelEntryProps) {
    const historyEntry = props.historyEntry;

    return <div className={styles.historyPanelEntry}>
        <div className={styles.historyPanelFrom}>
            <CurrencyFlag currencyCode={historyEntry.from.code} />
            <p>
                {historyEntry.fromAmount}
            </p>
            <p>
                {historyEntry.from.code}
            </p>
        </div>

        <MdArrowRightAlt />
        <div className={styles.historyPanelTo}>
            <CurrencyFlag currencyCode={historyEntry.to.code} />
            <p>
                {historyEntry.toAmount}
            </p>
            <p>
                {historyEntry.to.code}
            </p>
        </div>

        <button>
            <MdDelete />
        </button>
    </div>
}