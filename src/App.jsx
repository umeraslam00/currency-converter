import { useEffect, useState } from 'react'
import './index.css'
import InputBox from './components/InputBox'

function App() {
  const [currencies, setCurrencies] = useState({})
  const [fromAmount, setFromAmount] = useState(100)
  const [fromCurrency, setFromCurrency] = useState('usd')
  const [toCurrency, setToCurrency] = useState('pkr')


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
   
    <div className='w-full h-screen flex justify-center items-center flex-col' style={{
      backgroundImage: `url('https://i.imgur.com/Pbhaip3.jpeg')`,
    }}>
      

      <h1 className='text-white font-extrabold text-[2.5rem] mb-4'>Currency Converter App</h1>
      <div className='flex flex-col border-4 w-[60%] h-[36%] rounded-lg justify-center bg-[#607d8b85]'>
        
        <InputBox label="From" amount={fromAmount} amountChange={setFromAmount} currency={fromCurrency} setCurrency={setFromCurrency} currencyOptions={currencyOptions} amountDisable={false} />
        

        <div className='flex justify-center absolute left-[46%] top-[51%] bg-black py-2 px-4 z-50 rounded-lg w-[9%] h-[6%] border-3 text-white font-bold'>
          <button onClick={currencySwap}>Swap</button>
        </div>

        
        <InputBox label="To" amount={toAmount} currency={toCurrency} setCurrency={setToCurrency} currencyOptions={currencyOptions} amountDisable={true} />
        
      </div>

    </div>
  )
}

export default App
