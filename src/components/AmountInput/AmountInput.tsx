import styles from "./AmountInput.module.scss";
import Currency from "../../types/currency.ts";

interface AmountInputProps {
    disabled?: boolean
    amount: number,
    onAmountChange: (amount: number) => void,
    currency: Currency | null,
    onCurrencyChange: (currency: Currency) => void,
}

export default function AmountInput(props: AmountInputProps) {
    const getCurrencyText = () => {
        if (props.currency === null) {
            return ""
        }
        return props.currency.code;
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
            disabled={props.disabled ?? false}
            value={getCurrencyText()}
            maxLength={3}/>
    </div>
}