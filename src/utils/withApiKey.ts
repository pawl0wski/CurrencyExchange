const ApiKey: string = import.meta.env.VITE_EXCHANGERATESAPI_KEY;

export function withApiKey(url: string): string {
    return url + `?access_key=${ApiKey}`;
}