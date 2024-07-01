import { withApiKey } from "@/utils/withApiKey.ts";
import CurrencyRate from "@/types/currencyRate.ts";

interface CurrenciesRateApiResponse {
    success: boolean,
    timestamp: number,
    base: string,
    rates: { [key: string]: number }
}

export interface CurrenciesRatesWithTimestamp {
    timestamp: number,
    currenciesRatios: CurrencyRate[]
}

export async function getCurrenciesRateFromApi(): Promise<CurrenciesRatesWithTimestamp> {
    const response = await fetch(withApiKey("http://api.exchangeratesapi.io/v1/latest"), {method: "GET"});
    const responseData: CurrenciesRateApiResponse = await response.json();

    return createCurrenciesRatiosWithResponseData(responseData);
}

function createCurrenciesRatiosWithResponseData(data: CurrenciesRateApiResponse): CurrenciesRatesWithTimestamp {
    const {timestamp, rates} = data;
    const currenciesRatesWithTimestamp: CurrenciesRatesWithTimestamp = {
        timestamp: timestamp * 1000,
        currenciesRatios: []
    };

    for (const code of Object.keys(rates)) {
        currenciesRatesWithTimestamp.currenciesRatios.push({ code, rate: rates[code] });
    }

    return currenciesRatesWithTimestamp;
}