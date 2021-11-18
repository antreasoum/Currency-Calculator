import React from 'react'

export default function Input(props) {

  //Destructuring
  const {
    coinOptions,
    selectedCoin,
    onChangeCoin,
    onChangeSum,
    sum
  } = props
  return (
    <div>
      <input type="number" className="field" value={sum} onChange={onChangeSum} />
      <select className="select" value={selectedCoin} onChange={onChangeCoin}>
        {coinOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}
