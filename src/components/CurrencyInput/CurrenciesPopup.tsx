import styles from "./CurrenciesPopup.module.scss";
import SearchInput from "../SearchInput/SearchInput.tsx";
import { useState } from "react";
import CurrencyEntry from "./CurrencyEntry.tsx";
import Currency from "../../types/currency.ts";
import { useSelector } from "react-redux";
import { RootStoreState } from "../../store.ts";

interface CurrenciesPopupProps {
    currency: Currency | null;
    onCurrencyChanged: (currency: Currency) => void;
}

export default function CurrenciesPopup(props: CurrenciesPopupProps) {
    const currencies = useSelector<RootStoreState, Currency[]>(state => state.currencies.currencies)
    const [searchText, setSearchText] = useState("");


    const getFilteredAndSortedCurrencies = () => {
        const filteredCountries =  currencies.filter((currency) => currency.name.toLowerCase().includes(searchText.toLowerCase()));

        return filteredCountries.sort((a, b) => {
            if (a.favorite && !b.favorite) return -1;
            if (!a.favorite && b.favorite) return 1;

            return a.name.localeCompare(b.name);
        });
    }

    return <div className={styles.currenciesPopup}>
        <SearchInput value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        <hr />
        <div className={styles.currenciesList}>
            {getFilteredAndSortedCurrencies().map(
                (currency) => <CurrencyEntry currency={currency} onClick={() => props.onCurrencyChanged(currency)}  />)}
        </div>
    </div>
}