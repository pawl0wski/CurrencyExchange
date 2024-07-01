import CurrencyRate from "@/types/currencyRate.ts";
import Currency from "@/types/currency.ts";
import Decimal from "decimal.js";

export function calculateToAmount(fromAmount: number, fromCurrency: Currency, toCurrency: Currency, currencyRates: CurrencyRate[]): number {
    const fromCurrencyRate = findCurrencyRate(fromCurrency, currencyRates);
    const toCurrencyRate = findCurrencyRate(toCurrency, currencyRates);

    if (fromCurrencyRate === null || toCurrencyRate === null)
        return 0;

    const amount = new Decimal(fromAmount).dividedBy(fromCurrencyRate.rate).mul(toCurrencyRate.rate);
    return parseFloat(amount.toFixed(2));
}

function findCurrencyRate(currency: Currency, currencyRates: CurrencyRate[]): CurrencyRate | null {
    return currencyRates.find(cr => cr.code == currency.code) ?? null;
}