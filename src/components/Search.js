import React, { useContext } from 'react';
import StockContext from '../contexts/StockContext';
import { Container, Button, TextField, Typography } from '@material-ui/core';

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
    <Container>
      <form onSubmit={handleSubmit} id="search-stock">
        <TextField variant="outlined" label="Stock Symbol" defaultValue={stockSymbol} />
        <Button type="submit" color="primary" variant="contained" style={{ display: "block" }}>Search</Button>
      </form>
      {
        <Typography variant="h5" color="primary" align="center" id="stock-data">
          {
            stockData.symbol ? (
              `${stockData.symbol}: ${stockData.price.toFixed(2)} (${stockData.changesPercentage.toFixed(2)}%)`
            ) : `${stockSymbol} was not found.`
          }
        </Typography>
      }
    </Container>
  );
}

export default Search;
