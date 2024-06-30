import {MdKeyboardArrowDown} from "react-icons/md"
import styles from "./CurrencyInput.module.scss"
import CurrenciesPopup from "./CurrenciesPopup.tsx";
import { useState } from "react";
import {
    useFloating,
    autoUpdate,
    useRole,
    useDismiss,
    useClick,
    useInteractions,
    FloatingFocusManager
} from "@floating-ui/react";
import CurrencyFlag from "../CurrencyFlag/CurrencyFlag.tsx";
import Currency from "../../types/currency.ts";

interface CurrencyInputProps {
    currency: Currency | null,
    onCurrencyChange: (currency: Currency) => void,
}

export default function CurrencyInput(props: CurrencyInputProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const {refs, floatingStyles, context} = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        whileElementsMounted: autoUpdate
    })

    const click = useClick(context);
    const dismiss = useDismiss(context);
    const role = useRole(context);

    const {getReferenceProps, getFloatingProps} = useInteractions([
        click,
        dismiss,
        role,
    ]);

    return <>
        <div ref={refs.setReference} className={styles.currencyInput} {...getReferenceProps()} >
            <div className={styles.countryFlag}>
                <CurrencyFlag currencyCode={props.currency?.code ?? ""} />
            </div>
            <p>
                {props.currency?.name ?? "Wybierz walute"}
            </p>
            <MdKeyboardArrowDown/>
        </div>
        { isOpen && <FloatingFocusManager  context={context} modal={false}>
            <div
            ref={refs.setFloating}
            style={floatingStyles}
                {...getFloatingProps()}>
                <CurrenciesPopup currency={props.currency} onCurrencyChanged={props.onCurrencyChange}  />

            </div>
        </FloatingFocusManager>}
    </>
}