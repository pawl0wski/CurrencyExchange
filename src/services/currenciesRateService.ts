import { withApiKey } from "../utils/withApiKey.ts";
import CurrencyRates from "../types/currencyRates.ts";

interface CurrenciesRateApiResponse {
    success: boolean,
    timestamp: number,
    base: string,
    rates: { [key: string]: number }
}

export async function getCurrenciesRateFromApi(): Promise<CurrencyRates> {
    const response = await fetch(withApiKey("http://api.exchangeratesapi.io/v1/latest"))

    const data : CurrenciesRateApiResponse = await response.json();
    const currencies: CurrencyRates = {
        updateDate: new Date(data.timestamp*1000),
        rates: []
    }

    for (const code of Object.keys(data.rates)) {
        currencies.rates.push({code, rate: data.rates[code]})
    }

    return currencies;
}