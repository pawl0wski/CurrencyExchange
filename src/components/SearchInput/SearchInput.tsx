import styles from './SearchInput.module.scss';
import {MdSearch} from "react-icons/md";
import {ChangeEventHandler} from "react";

interface SearchInputProps {
    value: string,
    onSearchInputChange: ChangeEventHandler<HTMLInputElement>,
}

export default function SearchInput(props: SearchInputProps) {
    const {value, onSearchInputChange} = props;

    return <div>
        <div className={styles.searchBox}>
            <div className={styles.searchBoxIcon}>
                <MdSearch/>
            </div>
            <input type="text"
                   value={value}
                   onChange={onSearchInputChange}
                   placeholder="Szukaj..." />
        </div>
    </div>
}