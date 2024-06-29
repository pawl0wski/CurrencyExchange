import './App.module.scss'
import CurrencyExchangePanel from "./components/CurrencyExchangePanel/CurrencyExchangePanel.tsx";
import styles from "./App.module.scss";

function App() {
  return (
    <main className={styles.app}>
        <h1>Przelicznik walut</h1>
        <CurrencyExchangePanel />
    </main>
  )
}

export default App
