import flagsJson from "@/assets/flags.json";

interface Flags {
    [key: string]: string | null
}

const flags: Flags = flagsJson;

export function getFlagUrl(currencyCode: string) : string | null {
    return flags[currencyCode] ?? null;
}