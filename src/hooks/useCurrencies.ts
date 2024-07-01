import { useSelector } from "react-redux";
import { RootStoreState } from "@/store.ts";
import Currency from "@/types/currency.ts";

export function useCurrencies(): Currency[] {
    return useSelector<RootStoreState, Currency[]>(state => state.currencies.currencies);
}