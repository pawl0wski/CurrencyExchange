import Currency from "@/types/currency.ts";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useCurrencies } from "@/hooks/useCurrencies.ts";

interface CurrencyPredictHookOutput {
    currencyCode: string,
    handleCurrencyTextChange: (e: ChangeEvent<HTMLInputElement>) => void,
    handleCurrencyChangeAbort: () => void,
}

export function useCurrencySelectByCode(initialCurrency: Currency | null, onCurrencyChange: (currency: Currency) => void): CurrencyPredictHookOutput {
    const currencies = useCurrencies();
    const [currencyCode, setCurrencyCode] = useState<string>("");

    useEffect(() => {
        setCurrencyCode(initialCurrency?.code ?? "");
    }, [initialCurrency]);

    const handleCurrencyTextChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const newCurrencyCode = e.target.value.toUpperCase();
        if (currencyCode !== null)
            setCurrencyCode(newCurrencyCode);
        if (newCurrencyCode.length == 3)
            replaceCurrencyIfFound(newCurrencyCode, currencies, onCurrencyChange);

    }, [currencies, currencyCode, onCurrencyChange]);

    const handleCurrencyChangeAbort = useCallback(() => {
        setCurrencyCode(initialCurrency?.code ?? currencyCode);
    }, [currencyCode, initialCurrency?.code]);

    return { currencyCode, handleCurrencyTextChange, handleCurrencyChangeAbort };
}

function replaceCurrencyIfFound(currencyCode: string, currencies: Currency[], onCurrencyChange: (c: Currency) => void) {
    const foundCurrency = currencies.find(c => c.code == currencyCode);
    if (foundCurrency !== undefined) {
        onCurrencyChange(foundCurrency);
    }
}