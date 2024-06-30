interface FlagApiResponse {
    flags: {
        png: string
    }
}

export async function getFlagUrl(currencyCode: string) : Promise<string> {
    const response = await fetch(`https://restcountries.com/v3.1/currency/${currencyCode}`)

    if (response.ok) {
        const apiResponses : FlagApiResponse[] =  await response.json()
        const firstApiResponse = apiResponses[0];

        return firstApiResponse.flags.png;
    }

    throw new Error(response.statusText);
}