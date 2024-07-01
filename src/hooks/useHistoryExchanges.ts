import { useSelector } from "react-redux";
import { RootStoreState } from "@/store.ts";
import { HistoryExchangeState } from "@/slices/exchangeHistoriesSlice.ts";

export function useHistoryExchanges() {
    return useSelector<RootStoreState, HistoryExchangeState[]>(state => state.exchangeHistories.exchanges);
}