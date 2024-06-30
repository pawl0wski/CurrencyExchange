import Currency from "../../types/currency.ts";
import {MdStar} from "react-icons/md";
import styles from "./CurrencyEntry.module.scss";
import CurrencyFlag from "../CurrencyFlag/CurrencyFlag.tsx";

interface CurrencyEntryProps {
    currency: Currency;
}

export default function CurrencyEntry(props: CurrencyEntryProps) {
    const currency = props.currency;

    return <div className={styles.currencyEntry}>
        <div className={styles.currencyFlag}>
            <CurrencyFlag currencyCode={props.currency.code} />
        </div>
        <p>{currency.name}</p>
        <div className={styles.favoriteIcon}>
            <MdStar />
        </div>
    </div>
}