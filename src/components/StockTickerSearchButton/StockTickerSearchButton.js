import React from 'react'

function StockTickerSearchButton({ onSubmit }) {
  return (
    <>
      <button className="ml-4 focus:outline-none" onClick={onSubmit}>
        Submit
      </button>
    </>
  );
}

export default StockTickerSearchButton
