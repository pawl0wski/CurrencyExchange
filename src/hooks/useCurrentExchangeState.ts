import { CurrentExchangeSliceState } from "@/slices/currentExchangeSlice.ts";
import { useSelector } from "react-redux";
import { RootStoreState } from "@/store.ts";

export function useCurrentExchangeState(): CurrentExchangeSliceState {
    return useSelector<RootStoreState, CurrentExchangeSliceState>(state => state.currentExchange);
}