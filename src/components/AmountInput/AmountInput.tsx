import {useState} from "react";
import styles from "./AmountInput.module.scss";

interface AmountInputProps {
    disabled?: boolean
}

export default function AmountInput(props: AmountInputProps) {
    const [amount, setAmount] = useState<number>(0);
    const [currency, setCurrency] = useState("");

    return <div className={styles.amountInput}>
        <input
            className={styles.amount}
            type="number"
            disabled={props.disabled ?? false}
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
        <input
            className={styles.currency}
            type="text"
            disabled={props.disabled ?? false}
            value={currency}
            onChange={(e) => setCurrency(e.target.value.toUpperCase())}
            maxLength={3}/>
    </div>
}