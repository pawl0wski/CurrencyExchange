import { useDispatch } from "react-redux";
import { MouseEvent, useCallback } from "react";
import { updateFavorite } from "@/slices/currenciesSlice.ts";
import Currency from "@/types/currency.ts";

interface FavoriteCurrencyHookOutput {
    handleFavoriteClick: (e: MouseEvent<HTMLElement>) => void;
}

export function useFavoriteCurrency(currency: Currency): FavoriteCurrencyHookOutput {
    const dispatch = useDispatch();

    const handleFavoriteClick = useCallback((e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        dispatch(updateFavorite({ ...currency, favorite: !currency.favorite }));
    }, [currency, dispatch]);

    return { handleFavoriteClick };
}