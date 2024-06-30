import HistoryExchange from "../../types/historyExchange.ts";
import HistoryPanelEntry from "./HistoryPanelEntry.tsx";

export default function HistoryPanel() {
    const historyArray: HistoryExchange[] = [
        {
            fromAmount: 100,
            from: {
                name: "Polish Zlotys",
                code: "PLN"
            },
            to: {
                name: "Japan Jens",
                code: "JPY"
            },
            toAmount: 25,
            price: 2.15
        }
    ];

    return <div>
        {historyArray.map(
            (historyEntry, i) =>
                <HistoryPanelEntry key={i} historyEntry={historyEntry} />)}
    </div>;
}