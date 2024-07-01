import { MdArrowRightAlt, MdDelete } from "react-icons/md";
import styles from "./HistoryPanelEntry.module.scss";
import { ExchangeSliceState } from "../../slices/exchangeSlice.ts";
import HistoryPanelEntryFromTo from "./HistoryPanelEntryFromTo.tsx";
import { useDispatch } from "react-redux";
import { removeHistoryExchange } from "../../slices/historySlice.ts";

interface HistoryPanelEntryProps {
    historyExchange : ExchangeSliceState;
}

export default function HistoryPanelEntry(props: HistoryPanelEntryProps) {
    const {fromCurrency, toCurrency, fromAmount, toAmount} = props.historyExchange;
    const dispatcher = useDispatch();

    return <div className={styles.historyPanelEntry}>
        <HistoryPanelEntryFromTo code={fromCurrency?.code ?? ""} amount={fromAmount} />
        <div className={styles.arrow}>
            <MdArrowRightAlt />
        </div>
        <HistoryPanelEntryFromTo code={toCurrency?.code ?? ""} amount={toAmount} />

        <button onClick={() => dispatcher(removeHistoryExchange(props.historyExchange))}>
            <MdDelete />
        </button>
    </div>
}