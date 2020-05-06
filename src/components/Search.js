import React, { useState, useEffect } from 'react';

const Search = () => {
  const [stockSymbol, setStockSymbol] = useState('GOOGL');
  const [stockData, setStockData] = useState({});

  useEffect(() => {
    fetch(`https://financialmodelingprep.com/api/v3/quote/${stockSymbol}`)
      .then(res => res.json())
      .then(data => {
        setStockData(data[0] || {})
      });
  }, [stockSymbol]);

  const handleSubmit = e => {
    e.preventDefault();
    setStockSymbol(e.target[0].value.toUpperCase());
    e.target[0].value = '';
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="stock-symbol">Stock Symbol: </label>
        <input type="text" id="stock-symbol" defaultValue={stockSymbol} />
        <button>Search</button>
      </form>
      {
        stockData.symbol ? <div>
          {stockData.symbol}: ${stockData.price.toFixed(2)} ({stockData.changesPercentage.toFixed(2)}%)
        </div> : `${stockSymbol} was not found.`
      }
    </div>
  );
}

export default Search;
