import { useState } from 'react'
import './App.css'
import CurrencyDropdown from './CurrencyDropdown';
import CurrencyContext from './CurrencyContext';

function App() {
  const [fromCurrency, setFromCurrency] = useState("AED")
  const [toCurrency, setToCurrency] = useState("AED")

  return (
    <>
      <CurrencyContext.Provider value={{ fromCurrency, setFromCurrency, toCurrency, setToCurrency }}>
        <h1>Currency Converter</h1>
        <CurrencyDropdown/>
      </CurrencyContext.Provider>
    </>
  )
}

export default App;
