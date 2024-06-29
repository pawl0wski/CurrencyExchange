import CurrencyInput from "../CurrencyInput/CurrencyInput.tsx";
import AmountInput from "../AmountInput/AmountInput.tsx";
import styles from "./AmountWithCurrencyInput.module.scss";

interface AmountWithCurrencyProps {
    type: "input" | "output";
}

export default function AmountWithCurrency(props: AmountWithCurrencyProps) {
    return <div className={styles.amountWithCurrency}>
        <div className={styles.amountInput}>
            <label>Kwota</label>
            <AmountInput disabled={props.type == "output"} />
        </div>
        <div className={styles.currencyInput}>
            <label>Waluta</label>
            <CurrencyInput />
        </div>
    </div>
}