import styles from './SearchInput.module.scss';
import {MdSearch} from "react-icons/md";
import {ChangeEventHandler} from "react";

interface SearchInputProps {
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
}

export default function SearchInput(props: SearchInputProps) {

    return <div>
        <div className={styles.searchBox}>
            <div className={styles.searchBoxIcon}>
                <MdSearch/>
            </div>
            <input type="text"
                   value={props.value}
                   onChange={props.onChange}
                   placeholder="Szukaj..." />
        </div>
    </div>
}