import { MdArrowRightAlt, MdDelete } from "react-icons/md";
import styles from "./HistoryPanelEntry.module.scss";
import HistoryPanelEntryFromTo from "./HistoryPanelEntryFromTo.tsx";
import { useDispatch } from "react-redux";
import { HistoryExchangeState, removeHistoryExchange } from "@/slices/exchangeHistoriesSlice.ts";

interface HistoryPanelEntryProps {
    historyExchange : HistoryExchangeState;
}

export default function HistoryPanelEntry(props: HistoryPanelEntryProps) {
    const {fromCurrency, toCurrency, fromAmount, toAmount, id} = props.historyExchange;
    const dispatcher = useDispatch();

    return <div className={styles.historyPanelEntry}>
        <HistoryPanelEntryFromTo code={fromCurrency?.code ?? ""} amount={fromAmount} />
        <div className={styles.arrow}>
            <MdArrowRightAlt />
        </div>
        <HistoryPanelEntryFromTo code={toCurrency?.code ?? ""} amount={toAmount} />
        <button onClick={() => dispatcher(removeHistoryExchange(id))}>
            <MdDelete />
        </button>
    </div>
}