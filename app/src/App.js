import React, { useEffect, useState } from 'react';
import './App.css'
import Input from './Input'

function App() {
  const [coinOptions, setCoinOptions] = useState([]) // USD, EUR, JPY etc.
  const [fromCoin, setFromCoin] = useState() //First Input
  const [toCoin, setToCoin] = useState() //Second Input
  const [exchangeRate, setExchangeRate] = useState()
  const [sum, setSum] = useState(1) // Amount Input 1 & 2
  const [sumInput, setSumInput] = useState(true) //Understanding of change in either Input 1 or 2

  //Local API with CORS Enabled
  const server = 'http://localhost:4000/'

  useEffect(() => {
    fetch(server)
      .then(res => res.json())
      .then(data => {
        const currency1 = Object.keys(data.rates)[0] //Getting the first price for Euro
        setCoinOptions([data.base, ...Object.keys(data.rates)])
        setFromCoin(data.base) //base is the Default Coin (EURO)
        setToCoin(currency1)
        setExchangeRate(data.rates[currency1])
      })
  }, [])
  
  //If currency gets changed, force equivalent price
  useEffect(() => {
    if (fromCoin != null && toCoin != null) {
      fetch(`${server}?base=${fromCoin}&symbols=${toCoin}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[toCoin]))
    }
  }, [fromCoin, toCoin])

  //Calculations between Inputs
  let calcInput2, calcInput1
  if (sumInput) {
    calcInput1 = sum
    calcInput2 = sum * exchangeRate
  } else {
    calcInput2 = sum
    calcInput1 = sum / exchangeRate
  }

  //Input 1 amount changes
  function handleFromSumChange(e) {
    setSum(e.target.value)
    setSumInput(true)
  }

  //Input 2 amount changes
  function handleToSumChange(e) {
    setSum(e.target.value)
    setSumInput(false)
  }

  return (
    <div className="main">
    <>
    <div className="component">
      <h1>Currency Converter</h1>
      <Input
        coinOptions={coinOptions}
        selectedCoin={fromCoin}
        onChangeCoin={e => setFromCoin(e.target.value)}
        onChangeSum={handleFromSumChange}
        sum={calcInput1}
      />
      <br />
      <Input
        coinOptions={coinOptions}
        selectedCoin={toCoin}
        onChangeCoin={e => setToCoin(e.target.value)}
        onChangeSum={handleToSumChange}
        sum={calcInput2}
      />
      </div>
    </>
    </div>
  );
}

export default App;
