import { useSelector } from "react-redux";
import { RootStoreState } from "@/store.ts";
import CurrencyRate from "@/types/currencyRate.ts";

export function useCurrenciesRates(): CurrencyRate[] {
    return useSelector<RootStoreState, CurrencyRate[] | null>(state => state.currenciesRates.currencyRates) ?? [];
}