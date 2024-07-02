import styles from "./CurrenciesPopup.module.scss";
import SearchInput from "@/components/SearchInput/SearchInput.tsx";
import { useMemo, useState } from "react";
import CurrencyEntry from "./CurrencyEntry.tsx";
import Currency from "@/types/currency.ts";
import { useSelector } from "react-redux";
import { RootStoreState } from "@/store.ts";

interface CurrenciesPopupProps {
    onCurrencyChanged: (currency: Currency) => void;
}

export default function CurrenciesPopup(props: CurrenciesPopupProps) {
    const currencies = useSelector<RootStoreState, Currency[]>(state => state.currencies.currencies);
    const [searchText, setSearchText] = useState("");

    const filteredAndSortedCurrencies = useMemo(() => {
        const filteredCountries = filterCountriesBySearchText(searchText, currencies);
        return sortCountriesByFavoriteAndName(filteredCountries);
    }, [currencies, searchText]);

    return <div className={styles.currenciesPopup}>
        <SearchInput value={searchText} onSearchInputChange={(e) => setSearchText(e.target.value)} />
        <hr />
        <div className={styles.currenciesList}>
            {filteredAndSortedCurrencies.map(
                (currency) => <CurrencyEntry key={currency.code} currency={currency}
                                             onCurrencyPick={() => props.onCurrencyChanged(currency)} />)}
        </div>
    </div>;
}

function filterCountriesBySearchText(searchText: string, currencies: Currency[]) {
    return currencies.filter((currency) => {
        const { name, code } = currency;
        const currencyNameWithCode = `${name} ${code}`.toLowerCase();

        return currencyNameWithCode.includes(searchText.toLowerCase());
    });
}

function sortCountriesByFavoriteAndName(currencies: Currency[]) {
    return currencies.sort((a, b) => {
        if (a.favorite && !b.favorite) return -1;
        if (!a.favorite && b.favorite) return 1;

        return a.name.localeCompare(b.name);
    });
}