import Currency from "@/types/currency.ts";
import { withApiKey } from "@/utils/withApiKey.ts";


interface CurrenciesApiResponse {
    success: boolean,
    symbols: { [key: string]: string }
}

export async function getCurrenciesFromApi(): Promise<Currency[]> {
    const response = await fetch(withApiKey("http://api.exchangeratesapi.io/v1/symbols"), { method: "GET" });
    const responseData: CurrenciesApiResponse = await response.json();

    return createCurrenciesWithResponseData(responseData);
}

function createCurrenciesWithResponseData(data: CurrenciesApiResponse): Currency[] {
    const { symbols } = data;
    const currencies: Currency[] = [];

    for (const currencyCode of Object.keys(symbols)) {
        currencies.push({ code: currencyCode, name: symbols[currencyCode], favorite: false });
    }

    return currencies;
}