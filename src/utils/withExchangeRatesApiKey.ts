const ApiKey: string = import.meta.env.VITE_EXCHANGERATESAPI_KEY;

export function withExchangeRatesApiKey(url: string): string {
    return url + `?access_key=${ApiKey}`;
}