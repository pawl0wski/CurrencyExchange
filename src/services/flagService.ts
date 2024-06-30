export async function getFlagUrl(currencyCode: string) : Promise<string> {
    const response = await fetch(`https://restcountries.com/v3.1/currency/${currencyCode}`)

    if (response.ok) {
        const apiResponse : {flags: {png: string}}[] =  await response.json()
        return apiResponse[0].flags.png;
    }

    throw new Error(response.statusText);
}