import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { calculateToAmount } from "@/utils/calculateToAmount.ts";
import { setToAmount } from "@/slices/currentExchangeSlice.ts";
import { useCurrenciesRates } from "@/hooks/useCurrenciesRates.ts";
import Currency from "@/types/currency.ts";

export function useToAmountCalculator(fromAmount: number, fromCurrency: Currency | null, toCurrency: Currency | null) {
    const dispatcher = useDispatch();
    const currenciesRates = useCurrenciesRates();

    useEffect(() => {
        if (fromCurrency !== null && toCurrency !== null) {
            const toAmount = calculateToAmount(fromAmount, fromCurrency, toCurrency, currenciesRates);
            dispatcher(setToAmount(toAmount));
        }
    }, [fromCurrency, fromAmount, toCurrency, currenciesRates, dispatcher]);
}