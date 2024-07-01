import { useDispatch } from "react-redux";
import { getCurrenciesRateFromApi } from "@/services/currenciesRatesService.ts";
import { updateCurrencyRates, updateCurrencyRatesTimestamp } from "@/slices/currenciesRatesSlice.ts";

export function useCurrenciesRatesUpdater(): () => Promise<void> {
    const dispatch = useDispatch();

    return async () => {
        const {currenciesRatios} = await getCurrenciesRateFromApi();
        dispatch(updateCurrencyRates(currenciesRatios))
        dispatch(updateCurrencyRatesTimestamp(Date.now()))
    }
}