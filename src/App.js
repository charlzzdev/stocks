import React, { useState, useEffect } from 'react';
import StockContext from './contexts/StockContext';

import Search from './components/Search';

const App = () => {
  const [stockSymbol, setStockSymbol] = useState('GOOGL');
  const [stockData, setStockData] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(`https://financialmodelingprep.com/api/v3/quote/${stockSymbol}`)
        .then(res => res.json())
        .then(data => setStockData(data[0] || {}));
    }, 1500);

    return () => clearInterval(interval);
  }, [stockSymbol]);

  return (
    <StockContext.Provider value={{
      stockSymbol,
      setStockSymbol,
      stockData
    }}>
      <Search />
    </StockContext.Provider>
  );
}

export default App;