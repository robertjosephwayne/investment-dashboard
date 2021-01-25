import React from 'react';
import { connect } from 'react-redux';

function StockPricesTableContainer({ activeStockSymbol, closingPricesDaily }) {
  const closingPricesDailyList = closingPricesDaily.map((priceDataDaily) => {
    return (
      <li>
        Year: {priceDataDaily.year}, Month: {priceDataDaily.month}, Day:{' '}
        {priceDataDaily.day}, Closing Price: {priceDataDaily.closingPriceDaily}
      </li>
    );
  });

  return (
    <div>
      <p>{activeStockSymbol}</p>
      <ul>{closingPricesDailyList}</ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    activeStockSymbol: state.stockTicker.activeStockSymbol,
    closingPricesDaily: state.stockTicker.closingPricesDaily,
  };
};

export default connect(mapStateToProps)(StockPricesTableContainer);
