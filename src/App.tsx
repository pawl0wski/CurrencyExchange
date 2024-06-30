import './App.module.scss'
import CurrencyExchangePanel from "./components/CurrencyExchangePanel/CurrencyExchangePanel.tsx";
import styles from "./App.module.scss";
import HistoryPanel from "./components/HistoryPanel/HistoryPanel.tsx";

function App() {
  return (
    <main className={styles.app}>
        <h1>Przelicznik walut</h1>
        <CurrencyExchangePanel />
        <h2>Historia</h2>
        <HistoryPanel />
    </main>
  )
}

export default App
