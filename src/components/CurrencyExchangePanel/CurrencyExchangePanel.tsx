import styles from "./CurrencyExchangePanel.module.scss";
import AmountWithCurrency from "@/components/AmountWithCurrency/AmountWithCurrency.tsx";
import { useDispatch, useSelector } from "react-redux";
import { RootStoreState } from "@/store.ts";
import {
    CurrentExchangeSliceState,
    setFromAmount,
    setFromCurrency,
    setToAmount,
    setToCurrency
} from "@/slices/currentExchangeSlice.ts";
import { useEffect } from "react";
import { calculateAmount } from "@/utils/calculateAmount.ts";
import CurrencyRate from "@/types/currencyRate.ts";
import { addHistoryExchange } from "@/slices/exchangeHistoriesSlice.ts";

export default function CurrencyExchangePanel() {
    const exchangeSliceState = useSelector<RootStoreState, CurrentExchangeSliceState>(state => state.currentExchange)
    const {fromCurrency, toCurrency, fromAmount, toAmount} = exchangeSliceState;

    const dispatcher = useDispatch();
    const currencyRates = useSelector<RootStoreState, CurrencyRate[] | null>(state => state.currenciesRates.currencyRates);

    useEffect(() => {
        if (currencyRates !== null && (fromCurrency !== null && toCurrency !== null)) {
            const toAmount = calculateAmount(fromAmount, fromCurrency, toCurrency, currencyRates)
            dispatcher(setToAmount(toAmount))
        }
    }, [fromCurrency, fromAmount, toCurrency]);


    const onSaveButton = () => {
        dispatcher(addHistoryExchange(exchangeSliceState));
    }

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
        <button className={styles.saveButton} onClick={onSaveButton} >
            Zapisz
        </button>
    </div>;
}