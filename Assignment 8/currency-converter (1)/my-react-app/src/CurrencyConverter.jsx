import { useState, useEffect, useContext } from 'react'
import CurrencyContext from './CurrencyContext'

const CurrencyConverter = () => {
    const currencyContextValue = useContext(CurrencyContext);
    const { fromCurrency, toCurrency } = currencyContextValue

    const [fromAmount, setFromAmount] = useState(1)
    const [toAmount, setToAmount] = useState(2)

    useEffect(() => {
        // fetch(`https://v6.exchangerate-api.com/v6/80eefd8a8a81d7b44915e930/pair/${fromCurrency}/${toCurrency}/${fromAmount}`)
        // .then((response) => {
        //     return response.json()
        // })
        // .then((data) => {
        //     setToAmount(data.conversion_result)
        // })

        // simulate making the conversion request
        // hardcode conversion logic to be double of fromAmount
        setToAmount(2 * fromAmount)
    }, [fromCurrency, toCurrency, fromAmount])

    return (
        <div class="container">
            <input 
                value={fromAmount}
                placeholder="Enter amount"
                className="converter-input"
                onChange={(event) => {
                    setFromAmount(event.target.value)
                }}
            />
            <p>{fromCurrency}</p>
            <p>=</p>
            <p className="converter-result">{toAmount}</p>
            <p>{toCurrency}</p>
        </div>
    )
}

export default CurrencyConverter