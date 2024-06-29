import {MdKeyboardArrowDown} from "react-icons/md"
import styles from "./CurrencyInput.module.scss"
import CurrenciesPopup from "./CurrenciesPopup.tsx";
import {useState} from "react";
import {
    useFloating,
    autoUpdate,
    useRole,
    useDismiss,
    useClick,
    useInteractions,
    FloatingFocusManager
} from "@floating-ui/react";

export default function CurrencyInput() {
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
            <div></div>
            <p>
                Polski złoty
            </p>
            <MdKeyboardArrowDown/>
        </div>
        { isOpen && <FloatingFocusManager  context={context} modal={false}>
            <div
            ref={refs.setFloating}
            style={floatingStyles}
                {...getFloatingProps()}>
                <CurrenciesPopup />

            </div>
        </FloatingFocusManager>}
    </>
}