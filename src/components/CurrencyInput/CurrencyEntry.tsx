import Currency from "@/types/currency.ts";
import { MdStar } from "react-icons/md";
import CurrencyFlag from "@/components/CurrencyFlag/CurrencyFlag.tsx";
import { MouseEventHandler } from "react";
import styles from "./CurrencyEntry.module.scss";
import { useFavoriteCurrency } from "@/hooks/useFavoriteCurrency.ts";

interface CurrencyEntryProps {
    currency: Currency;
    onCurrencyPick: MouseEventHandler<HTMLDivElement>;
}

export default function CurrencyEntry(props: CurrencyEntryProps) {
    const { currency, onCurrencyPick } = props;
    const { handleFavoriteClick } = useFavoriteCurrency(currency);


    return <div className={styles.currencyEntry} onClick={onCurrencyPick}>
        <div className={styles.currencyFlag}>
            <CurrencyFlag currencyCode={currency.code} />
        </div>
        <p>{currency.name} ({currency.code})</p>
        <div className={`${styles.favoriteIcon} ${currency.favorite && styles.favoriteIconActive}`}
             onClick={handleFavoriteClick}>
            <MdStar />
        </div>
    </div>;
}