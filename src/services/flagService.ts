import flagsJson from "../assets/flags.json";

interface Flags {
    [key: string]: string | null
}

const flags: Flags = flagsJson;

export async function getFlagUrl(currencyCode: string) : Promise<string | null> {
    if (currencyCode in flags) {
        return flags[currencyCode];
    }
    return null;
}