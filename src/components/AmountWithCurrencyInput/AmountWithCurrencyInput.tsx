import CurrencyInput from "../CurrencyInput/CurrencyInput.tsx";
import AmountInput from "../AmountInput/AmountInput.tsx";
import styles from "./AmountWithCurrencyInput.module.scss";

export default function AmountWithCurrencyInput() {
    return <div className={styles.amountWithCurrency}>
        <div className={styles.amountInput}>
            <label>Kwota</label>
            <AmountInput />
        </div>
        <div className={styles.currencyInput}>
            <label>Waluta</label>
            <CurrencyInput />
        </div>
    </div>
}