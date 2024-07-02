import { MdSwapVert } from "react-icons/md";
import styles from "./SwapCurrenciesButton.module.scss";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { swapCurrencies } from "@/slices/currentExchangeSlice.ts";

export default function SwapCurrenciesButton() {
    const dispatch = useDispatch();

    const handleSwapClick = useCallback(() => {
        dispatch(swapCurrencies());
    }, [dispatch]);

    return <button
        onClick={handleSwapClick}
        className={styles.swapCurrencies}>
        <MdSwapVert />
    </button>;
}