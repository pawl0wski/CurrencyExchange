import CurrencyInput from "../CurrencyInput/CurrencyInput.tsx";
import AmountInput from "../AmountInput/AmountInput.tsx";
import styles from "./AmountWithCurrencyInput.module.scss";
import Currency from "../../types/currency.ts";

interface AmountWithCurrencyProps {
    type: "from" | "to";
    amount: number,
    onAmountChange: (amount: number) => void,
    currency: Currency | null,
    onCurrencyChange: (currency: Currency) => void,
}

export default function AmountWithCurrency(props: AmountWithCurrencyProps) {
    return <div className={styles.amountWithCurrency}>
        <div className={styles.amountInput}>
            <label>Kwota</label>
            <AmountInput
                amount={props.amount}
                onAmountChange={props.onAmountChange}
                currency={props.currency}
                onCurrencyChange={props.onCurrencyChange}
                disabled={props.type == "to"} />
        </div>
        <div className={styles.currencyInput}>
            <label>Waluta</label>
            <CurrencyInput
                currency={props.currency}
                onCurrencyChange={props.onCurrencyChange}
            />
        </div>
    </div>
}