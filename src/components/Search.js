import React, { useContext } from 'react';
import StockContext from '../contexts/StockContext';

const Search = () => {
  const {
    stockSymbol,
    setStockSymbol,
    stockData
  } = useContext(StockContext);

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
