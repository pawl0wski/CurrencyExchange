import CurrencyRate from "../types/currencyRate.ts";
import Currency from "../types/currency.ts";
import CurrencyRates from "../types/currencyRates.ts";

export function calculateAmount(fromAmount: number, fromCurrency: Currency, toCurrency: Currency, currencyRates: CurrencyRates): number {
    const fromCurrencyRate = getCurrencyRate(fromCurrency, currencyRates.rates);
    const toCurrencyRate = getCurrencyRate(toCurrency, currencyRates.rates);

    if (fromCurrencyRate === null || toCurrencyRate === null)
        return 0;
    const amount = (fromAmount / fromCurrencyRate.rate) * toCurrencyRate.rate;
    return Math.floor(amount * 100) / 100
}

function getCurrencyRate(currency: Currency, currencyRates: CurrencyRate[]): CurrencyRate | null {
    const rate = currencyRates.find(cr => cr.code == currency.code);
    return rate ?? null;
}