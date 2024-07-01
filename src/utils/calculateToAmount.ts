import CurrencyRate from "@/types/currencyRate.ts";
import Currency from "@/types/currency.ts";

export function calculateToAmount(fromAmount: number, fromCurrency: Currency, toCurrency: Currency, currencyRates: CurrencyRate[]): number {
    const fromCurrencyRate = findCurrencyRate(fromCurrency, currencyRates);
    const toCurrencyRate = findCurrencyRate(toCurrency, currencyRates);

    if (fromCurrencyRate === null || toCurrencyRate === null)
        return 0;

    const amount = (fromAmount / fromCurrencyRate.rate) * toCurrencyRate.rate;
    return roundAmountToTwoDigits(amount);
}

function findCurrencyRate(currency: Currency, currencyRates: CurrencyRate[]): CurrencyRate | null {
    return currencyRates.find(cr => cr.code == currency.code) ?? null;
}

function roundAmountToTwoDigits(amount: number): number {
    return Math.floor(amount * 100) / 100
}