import Currency from "./currency.ts";

interface CurrencyRate {
    currency: Currency,
    rate: number
}

export default CurrencyRate;