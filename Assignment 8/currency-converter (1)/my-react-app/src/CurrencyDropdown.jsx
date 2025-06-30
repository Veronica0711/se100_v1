import { useEffect, useState, useContext } from 'react'
import "./CurrencyStyling.css"
import CurrencyConverter from './CurrencyConverter'
import CurrencyContext from './CurrencyContext'

const CurrencyDropdown = () => {
    const fakeResponseData = {
        supported_codes: [
            ["AED", "UAE Dirham"],
            ["CAD", "Canadian Dollar"],
            ["USD", "United States Dollar"],
            ["NZD", "New Zealand Dollar"],
            ["SGD", "Singapore Dollar"]
        ]
    }
    useEffect(() => {
        // fetch("https://v6.exchangerate-api.com/v6/80eefd8a8a81d7b44915e930/codes")
        // .then((response) => {
        //     return response.json()
        // })
        // .then((data) => {
        //     setCurrencyList(data.supported_codes)
        // })

        // simulate API request
        setCurrencyList(fakeResponseData.supported_codes)
    }, [])

    const currencyContextValue = useContext(CurrencyContext);
    const { setFromCurrency, setToCurrency } = currencyContextValue
    const [currencyList, setCurrencyList] = useState([])

    const renderDropdownOptions = () => {
        return currencyList.map((currencyArray) => {
            return (
                <option value={currencyArray[0]}>{currencyArray[1]}</option>
            )
        })
    }

    return (
        <div>
            <div class="container">
                <p>I want to convert</p>
                <select 
                    name="currency"
                    id="currencySelect"
                    onChange={(event) => {
                        setFromCurrency(event.target.value)
                    }}
                >
                    {renderDropdownOptions()}
                </select>
                <p>to</p>
                <select 
                    name="currency"
                    id="currencySelect"
                    onChange={(event) => {
                        setToCurrency(event.target.value)
                    }}
                >
                    {renderDropdownOptions()}
                </select>
            </div>
            <CurrencyConverter/>
        </div>
    )
}

export default CurrencyDropdown