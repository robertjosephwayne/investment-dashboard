import { useState } from 'react';
import StockTickerInput from '../StockTickerInput/StockTickerInput';

function StockTickerSearchContainer() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = () => {
    console.log(inputValue);
  };

  return (
    <>
      <StockTickerInput
        onChange={handleChange}
        onSubmit={handleSubmit}
        inputValue={inputValue}
      />
    </>
  );
}

export default StockTickerSearchContainer;
