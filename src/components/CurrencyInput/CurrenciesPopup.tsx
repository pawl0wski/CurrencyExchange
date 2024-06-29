import styles from "./CurrenciesPopup.module.scss";
import SearchInput from "../SearchInput/SearchInput.tsx";
import {useState} from "react";
import CurrencyEntry from "./CurrencyEntry.tsx";
import Currency from "../../types/currency.ts";

export default function CurrenciesPopup() {
    const [searchText, setSearchText] = useState("");

    const tempCurrencies: Currency[] = [{name: "Polish Złoty", symbol: "PLN"}, {name: "Japoński jen", symbol: "JPY"}];

    const getFilteredCurrencies =
        () => tempCurrencies.filter(
            (currency) => currency.name.toLowerCase().includes(searchText.toLowerCase()));

    return <div className={styles.currenciesPopup}>
        <SearchInput value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        <hr />
        <div className={styles.currenciesList}>
            {getFilteredCurrencies().map((currency) => <CurrencyEntry currency={currency} />)}
        </div>
    </div>
}