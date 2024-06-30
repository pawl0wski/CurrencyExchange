import flagsJson from "../assets/flags.json";

interface Flags {
    [key: string]: string | null
}

const flags: Flags = flagsJson;

export function getFlagUrl(currencyCode: string) : string | null {
    if (currencyCode in flags) {
        return flags[currencyCode];
    }
    return null;
}