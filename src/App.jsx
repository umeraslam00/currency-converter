import { useEffect, useState } from 'react'
//import './App.css'

function App() {
  const [currencies, setCurrencies] = useState({})
  const [fromAmount, setFromAmount] = useState(100)
  const [fromCurrency, setFromCurrency] = useState('usd')
  const [toCurrency, setToCurrency] = useState('pkr')

  /*
     https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json
  */

    useEffect(() => {
       fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`)
       .then( (res) => res.json())
       .then( (data => setCurrencies(data[fromCurrency]) || {}))
    }, [fromCurrency])

    const currencyOptions = Object.keys(currencies)
    //console.log(Object.values(currencies))

    // The output is key value pair. So currencies(pkr) is a key that gives the value.
    const exchangeRate = currencies[toCurrency] || 1;
    const toAmount = (fromAmount * exchangeRate).toFixed(2);

    //swap feature
    const currencySwap = () => {
      setFromCurrency(toCurrency)
      setToCurrency(fromCurrency)
    }

  return (
    <div>
      <input type="number" value={fromAmount} onChange={(e) => {setFromAmount(e.target.value)}}/>

      <select value={fromCurrency} onChange={(e) => {setFromCurrency(e.target.value)}}>
        {currencyOptions.map( (currency) => <option key={currency}>{currency}</option>)}
      </select>

      <button onClick={currencySwap}>Swap</button>

      <input type="number" value={toAmount} disabled/>

      <select value={toCurrency} onChange={(e) => {setToCurrency(e.target.value)}}>
        {currencyOptions.map( (currency) => <option key={currency}>{currency}</option>  )}
      </select>



    </div>
  )
}

export default App
