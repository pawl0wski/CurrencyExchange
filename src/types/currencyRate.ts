import Currency from "./currency.ts";

export default interface CurrencyRate {
    currency: Currency,
    rate: number
}