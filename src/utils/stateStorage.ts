import { RootStoreState } from "@/store.ts";

const STORAGE_KEY = "state";

export function saveStoreToLocalStorage(state: RootStoreState) {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serializedState);
}

export function loadStateFromLocalStorage() : RootStoreState | null {
    const serializedState = localStorage.getItem(STORAGE_KEY);
    if (serializedState !== null)
        return JSON.parse(serializedState) as RootStoreState;
    return null;
}
