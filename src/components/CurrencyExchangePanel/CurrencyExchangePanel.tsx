import styles from "./CurrencyExchangePanel.module.scss";
import AmountWithCurrency from "@/components/AmountWithCurrency/AmountWithCurrency.tsx";
import {
    setFromAmount,
    setFromCurrency,
    setToCurrency
} from "@/slices/currentExchangeSlice.ts";
import { useExchangeSave } from "@/hooks/useExchangeSave.ts";
import { useToAmountCalculator } from "@/hooks/useToAmountCalculator.ts";
import { useCurrentExchangeState } from "@/hooks/useCurrentExchangeState.ts";
import { useDispatch } from "react-redux";

export default function CurrencyExchangePanel() {
    const {fromAmount, fromCurrency, toAmount, toCurrency} = useCurrentExchangeState();
    const {handleExchangeSave} = useExchangeSave();
    useToAmountCalculator(fromAmount, fromCurrency, toCurrency);
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
        <button className={styles.saveButton} onClick={handleExchangeSave} >
            Zapisz
        </button>
    </div>;
}