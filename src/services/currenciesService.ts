import Currency from "@/types/currency.ts";
import { withApiKey } from "@/utils/withApiKey.ts";


interface CurrenciesApiResponse {
    success: boolean,
    symbols:
        {
            [key: string]: string
        }
}

export async function getCurrenciesFromApi(): Promise<Currency[]> {
    const response = await fetch(withApiKey("http://api.exchangeratesapi.io/v1/symbols")
        , { method: "GET" });

    const responseData: CurrenciesApiResponse = await response.json();

    const currencies: Currency[] = []

    for (const currencyCode of Object.keys(responseData.symbols)) {
        currencies.push({code: currencyCode, name: responseData.symbols[currencyCode], favorite: false});
    }

    return currencies;
}
