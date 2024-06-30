import Currency from "../../types/currency.ts";
import { MdStar } from "react-icons/md";
import styles from "./CurrencyEntry.module.scss";
import CurrencyFlag from "../CurrencyFlag/CurrencyFlag.tsx";
import { MouseEventHandler, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { updateFavorite } from "../../slices/currenciesSlice.ts";

interface CurrencyEntryProps {
    currency: Currency;
    onClick: MouseEventHandler<HTMLDivElement>;
}

export default function CurrencyEntry(props: CurrencyEntryProps) {
    const currency = props.currency;
    const dispatch = useDispatch();

    const onFavoriteClick = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        dispatch(updateFavorite({ ...currency, favorite: !currency.favorite }));
    };

    return <div className={styles.currencyEntry} onClick={props.onClick}>
        <div className={styles.currencyFlag}>
            <CurrencyFlag currencyCode={props.currency.code} />
        </div>
        <p>{currency.name}</p>
        <div className={`${styles.favoriteIcon} ${currency.favorite && styles.favoriteIconActive}`}
             onClick={onFavoriteClick}>
            <MdStar />
        </div>
    </div>;
}