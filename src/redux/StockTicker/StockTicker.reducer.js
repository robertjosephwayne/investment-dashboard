import { createReducer } from '@reduxjs/toolkit';
import * as StockTickerActions from './StockTicker.actions';

const initialState = {
  activeStockSymbol: '',
  closingPricesDaily: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(
    StockTickerActions.fetchStockPricesSuccess,
    (state, action) => {
      return {
        ...state,
        activeStockSymbol: action.payload.stockSymbol,
        closingPricesDaily: action.payload.closingPricesDaily,
      };
    }
  );
});

export default reducer;
