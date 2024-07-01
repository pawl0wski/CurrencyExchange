import { useDispatch } from "react-redux";
import { addHistoryExchange } from "@/slices/exchangeHistoriesSlice.ts";
import { useCallback} from "react";
import { useCurrentExchangeState } from "@/hooks/useCurrentExchangeState.ts";

export interface ExchangeSaveHookOutput {
    handleExchangeSave: () => void;
}

export function useExchangeSave() {
    const dispatch = useDispatch();
    const currentExchangeState = useCurrentExchangeState()

    const handleExchangeSave = useCallback(() => {
        dispatch(addHistoryExchange(currentExchangeState));
    }, [currentExchangeState, dispatch]);

    return { handleExchangeSave };
}