import styles from "./CurrencyExchangePanel.module.scss";
import AmountWithCurrency from "../AmountWithCurrency/AmountWithCurrency.tsx";

export default function CurrencyExchangePanel() {
    return <div className={styles.currencyExchangePanel}>
        <h3>Waluta źródłowa</h3>
        <AmountWithCurrency type={"input"} />
        <h3>Waluta docelowa</h3>
        <AmountWithCurrency type={"output"} />
        <hr className={styles.buttonSeparator} />
        <button className={styles.calculateButton} >
            Oblicz
        </button>
    </div>;
}