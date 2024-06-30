import Currency from "../types/currency.ts";

const ApiKey: string = import.meta.env.VITE_EXCHANGERATESAPI_KEY;

interface CurrenciesApiResponse {
    success: boolean,
    symbols:
        {
            [key: string]: string
        }
}

function addApiKeyToUrl(url: string): string {
    return url + `?access_key=${ApiKey}`;
}

export async function getCurrenciesFromApi(): Promise<Currency[]> {
    const response = await fetch(addApiKeyToUrl("http://api.exchangeratesapi.io/v1/symbols")
        , { method: "GET" });

    const responseData: CurrenciesApiResponse = await response.json();

    const currencies: Currency[] = []

    for (const currencyCode of Object.keys(responseData.symbols)) {
        currencies.push({code: currencyCode, name: responseData.symbols[currencyCode], favorite: false});
    }

    return currencies;
}
