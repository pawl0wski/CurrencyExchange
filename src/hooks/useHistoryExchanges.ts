import { useSelector } from "react-redux";
import { RootStoreState } from "@/store.ts";
import { CurrentExchangeSliceState } from "@/slices/currentExchangeSlice.ts";

export function useHistoryExchanges() {
    return useSelector<RootStoreState, CurrentExchangeSliceState[]>(state => state.exchangeHistories.exchanges);
}