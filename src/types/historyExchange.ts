import Currency from "./currency.ts";

export default interface HistoryExchange {
    from: Currency,
    to: Currency,
    price: number,
    fromAmount: number,
    toAmount: number,
}