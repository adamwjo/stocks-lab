import React from 'react'

const Stock = ({ stockData, stockAction }) => {

  const { name, price, ticker, id } = stockData

  return (
      <div onClick={() => {stockAction(id)}}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{ticker}: {price}</p>
          </div>
        </div>
      </div>
)};

export default Stock
