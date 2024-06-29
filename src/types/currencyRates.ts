import CurrencyRate from "./currencyRate.ts";

interface CurrencyRates {
    updateDate: Date,
    rates: CurrencyRate[]
}

export default CurrencyRates;