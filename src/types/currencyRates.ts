import CurrencyRate from "./currencyRate.ts";

export default interface CurrencyRates {
    updateDate: Date,
    rates: CurrencyRate[]
}