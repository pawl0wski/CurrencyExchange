import styles from "./AmountInput.module.scss";
import Currency from "@/types/currency.ts";
import { useCurrencySelectByCode } from "@/hooks/useCurrencySelectByCode.ts";

interface AmountInputProps {
    disabled?: boolean
    amount: number,
    onAmountChange: (amount: number) => void,
    currency: Currency | null,
    onCurrencyChange: (currency: Currency) => void,
}

export default function AmountInput(props: AmountInputProps) {
    const { amount, disabled, onAmountChange, currency, onCurrencyChange } = props;
    const {
        currencyCode,
        handleCurrencyChangeAbort,
        handleCurrencyTextChange
    } = useCurrencySelectByCode(currency, onCurrencyChange);

    return <div className={styles.amountInput}>
        <input
            className={styles.amount}
            type="number"
            disabled={disabled ?? false}
            value={amount}
            onChange={(e) => onAmountChange(parseFloat(e.target.value))}
        />
        <input
            className={styles.currency}
            type="text"
            onChange={handleCurrencyTextChange}
            onBlur={handleCurrencyChangeAbort}
            value={currencyCode}
            maxLength={3} />
    </div>;
}