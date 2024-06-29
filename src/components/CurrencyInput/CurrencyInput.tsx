import {MdKeyboardArrowDown} from "react-icons/md"
import styles from "./CurrencyInput.module.scss"

export default function CurrencyInput() {
    return <div className={styles.currencyInput}>
        <div></div>
        <p>
            Polski złoty
        </p>
        <MdKeyboardArrowDown />
    </div>
}