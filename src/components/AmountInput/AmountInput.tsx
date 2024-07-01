import styles from "./AmountInput.module.scss";
import Currency from "../../types/currency.ts";
import { useEffect, useState, ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { RootStoreState } from "../../store.ts";

interface AmountInputProps {
    disabled?: boolean
    amount: number,
    onAmountChange: (amount: number) => void,
    currency: Currency | null,
    onCurrencyChange: (currency: Currency) => void,
}

export default function AmountInput(props: AmountInputProps) {
    const [currencyCode, setCurrencyCode] = useState<string>("");
    const currencies = useSelector<RootStoreState, Currency[]>(state => state.currencies.currencies);

    useEffect(() => {
        setCurrencyCode(props.currency?.code ?? "");
    }, [props.currency]);

    const onCurrencyTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newCode = e.target.value.toUpperCase()
        if (currencyCode !== null)
            setCurrencyCode(newCode);
        if (newCode.length == 3) {
            const foundCurrency = currencies.find(c => c.code == newCode)
            if (foundCurrency !== undefined){
                props.onCurrencyChange(foundCurrency);
            }
        }
    }

    const onCurrencyChangeAbort = () => {
        setCurrencyCode(props.currency?.code ?? currencyCode);
    }

    return <div className={styles.amountInput}>
        <input
            className={styles.amount}
            type="number"
            disabled={props.disabled ?? false}
            value={props.amount}
            onChange={(e) => props.onAmountChange(parseFloat(e.target.value))}
        />
        <input
            className={styles.currency}
            type="text"
            onChange={onCurrencyTextChange}
            onBlur={onCurrencyChangeAbort}
            value={currencyCode}
            maxLength={3}/>
    </div>
}