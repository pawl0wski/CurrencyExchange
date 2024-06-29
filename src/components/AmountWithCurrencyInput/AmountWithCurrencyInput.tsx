import CurrencyInput from "../CurrencyInput/CurrencyInput.tsx";
import AmountInput from "../AmountInput/AmountInput.tsx";
import styles from "./AmountWithCurrencyInput.module.scss";

export default function AmountWithCurrencyInput() {
    return <div className={styles.amountWithCurrency}>
        <AmountInput />
        <CurrencyInput />
    </div>
}