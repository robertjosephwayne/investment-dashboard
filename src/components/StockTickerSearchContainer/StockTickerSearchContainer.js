import { useState } from 'react';
import { connect } from 'react-redux';
import * as StockTickerActions from '../../redux/StockTicker/StockTicker.actions';
import StockTickerSearchButton from '../StockTickerSearchButton/StockTickerSearchButton';
import StockTickerSearchInput from '../StockTickerSearchInput/StockTickerSearchInput';

function StockTickerSearchContainer({ fetchStockPrices }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = () => {
    fetchStockPrices(inputValue);
  };

  return (
    <>
      <StockTickerSearchInput onChange={handleChange} inputValue={inputValue} />
      <StockTickerSearchButton onSubmit={handleSubmit} />
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStockPrices: (stockTicker) =>
      dispatch(StockTickerActions.fetchStockPrices(stockTicker)),
  };
};

export default connect(null, mapDispatchToProps)(StockTickerSearchContainer);
