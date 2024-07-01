import { useDispatch } from "react-redux";
import { getCurrenciesFromApi } from "@/services/currenciesService.ts";
import { updateCurrencies } from "@/slices/currenciesSlice.ts";

export function useCurrenciesUpdater(): () => Promise<void> {
    const dispatch = useDispatch();

    return async () => {
        const currencies = await getCurrenciesFromApi();
        dispatch(updateCurrencies(currencies));
    }
}