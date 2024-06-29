import styles from "./CurrencyExchangePanel.module.scss"
import AmountWithCurrencyInput from "../AmountWithCurrencyInput/AmountWithCurrencyInput.tsx";

export default function CurrencyExchangePanel() {
    return <div className={styles.currencyExchangePanel}>
        <AmountWithCurrencyInput />
    </div>
}