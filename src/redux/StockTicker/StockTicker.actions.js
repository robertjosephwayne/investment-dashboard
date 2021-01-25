import { createAction } from '@reduxjs/toolkit';

export const fetchStockPrices = createAction('STOCK_PRICES_FETCH');

export const fetchStockPricesSuccess = createAction(
  'STOCK_PRICES_FETCH_SUCCESS'
);
