import styles from "./CurrencyExchangePanel.module.scss";
import AmountWithCurrency from "../AmountWithCurrency/AmountWithCurrency.tsx";
import { useDispatch, useSelector } from "react-redux";
import { RootStoreState } from "../../store.ts";
import Currency from "../../types/currency.ts";
import { setFromAmount, setFromCurrency, setToCurrency } from "../../slices/exchangeSlice.ts";

export default function CurrencyExchangePanel() {
    const fromAmount = useSelector<RootStoreState, number>(state => state.exchange.fromAmount)
    const fromCurrency = useSelector<RootStoreState, Currency | null>(state => state.exchange.from)
    const toAmount = useSelector<RootStoreState, number>(state => state.exchange.toAmount)
    const toCurrency = useSelector<RootStoreState, Currency | null>(state => state.exchange.to)

    const dispatcher = useDispatch();

    return <div className={styles.currencyExchangePanel}>
        <h3>Waluta źródłowa</h3>
        <AmountWithCurrency
            type={"from"}
            amount={fromAmount}
            currency={fromCurrency}
            onCurrencyChange={(currency) => dispatcher(setFromCurrency(currency))}
            onAmountChange={(amount) => dispatcher(setFromAmount(amount))}
        />
        <h3>Waluta docelowa</h3>
        <AmountWithCurrency
            type={"to"}
            amount={toAmount}
            currency={toCurrency}
            onCurrencyChange={(currency) => dispatcher(setToCurrency(currency))}
            onAmountChange={() => {}}
        />
        <hr className={styles.buttonSeparator} />
        <button className={styles.calculateButton} >
            Oblicz
        </button>
    </div>;
}