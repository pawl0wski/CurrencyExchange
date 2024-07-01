import styles from "./HistoryPanelEntryFromTo.module.scss";
import CurrencyFlag from "../CurrencyFlag/CurrencyFlag.tsx";

interface HistoryPanelEntryFromToProps {
    code: string,
    amount: number,
}

export default function HistoryPanelEntryFromTo(props: HistoryPanelEntryFromToProps): JSX.Element {
    const { code, amount } = props;

    return <div className={styles.historyPanelFromTo}>
        <div className={styles.currencyFlag}>
            <CurrencyFlag currencyCode={code} />
        </div>
        <p>
            {amount}
        </p>
        <p>
            {code}
        </p>
    </div>;
}