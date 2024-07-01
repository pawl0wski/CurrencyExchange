import { getFlagUrl } from "@/services/flagService.ts";
import { useEffect, useState } from "react";
import { MdQuestionMark } from "react-icons/md";
import styles from "./CurrencyFlag.module.scss";

interface CurrencyFlagProps {
    currencyCode: string;
}

export default function CurrencyFlag(props: CurrencyFlagProps) {
    const [flagUrl, setFlagUrl] = useState<string | null>(null);
    const { currencyCode } = props;

    useEffect(() => {
        setFlagUrl(getFlagUrl(currencyCode));
    }, [currencyCode]);

    return <div className={styles.currencyFlag}>
        {
            flagUrl === null ?
                <MdQuestionMark />
                : <img src={flagUrl} alt={currencyCode} />
        }
    </div>;
}