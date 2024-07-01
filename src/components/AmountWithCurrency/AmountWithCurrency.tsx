import CurrencyInput from "@/components/CurrencyInput/CurrencyInput.tsx";
import AmountInput from "@/components/AmountInput/AmountInput.tsx";
import styles from "./AmountWithCurrencyInput.module.scss";
import Currency from "@/types/currency.ts";

interface AmountWithCurrencyProps {
    type: "from" | "to";
    amount: number,
    onAmountChange: (amount: number) => void,
    currency: Currency | null,
    onCurrencyChange: (currency: Currency) => void,
}

export default function AmountWithCurrency(props: AmountWithCurrencyProps) {
    const { amount, onAmountChange, onCurrencyChange, currency, type} = props;

    return <div className={styles.amountWithCurrency}>
        <div className={styles.amountInput}>
            <label>Kwota</label>
            <AmountInput
                amount={amount}
                onAmountChange={onAmountChange}
                currency={currency}
                onCurrencyChange={onCurrencyChange}
                disabled={type == "to"} />
        </div>
        <div className={styles.currencyInput}>
            <label>Waluta</label>
            <CurrencyInput
                currency={currency}
                onCurrencyChange={onCurrencyChange}
            />
        </div>
    </div>
}