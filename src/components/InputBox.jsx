import React from 'react'

const InputBox = ({
    label,
    amount,
    amountChange,
    currency,
    setCurrency,
    currencyOptions,
    amountDisable = false
 }) => {
  return (
    <div className='flex ml-[3%]'>
        <div className='w-[98%] mb-2'>
            <label className='absolute left-22% font-bold ml-2 z-50'>{label}</label>
            <input type="number" value={amount} onChange={(e) => {amountChange(e.target.value)}} disabled={amountDisable} className='border-2 border-white rounded-2xl h-[95px] relative w-[98%] bg-white pl-4 font-black text-red-500'/>
        </div>

        <div className='absolute right-[24%] flex flex-col z-50'>
            <label className='font-bold'>Currency Type</label>
            <select value={currency} onChange={(e) => { setCurrency(e.target.value) }}>
                {currencyOptions.map((currency) => <option key={currency}>{currency}</option>)}
            </select>
        </div>
    </div>
  )
}

export default InputBox