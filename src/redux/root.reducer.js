import { combineReducers } from '@reduxjs/toolkit';
import { combineEpics } from 'redux-observable';
import { catchError } from 'rxjs/operators';
import { fetchStockPricesEpic } from '../redux/StockTicker/StockTicker.epics';
import stockTickerReducer from './StockTicker/StockTicker.reducer';

const epics = [fetchStockPricesEpic];

export const rootEpic = (action$, store$, dependencies) =>
  combineEpics(...epics)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    })
  );

export const rootReducer = combineReducers({
  stockTicker: stockTickerReducer,
});
