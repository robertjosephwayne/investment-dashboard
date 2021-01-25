import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap } from 'rxjs/operators';
import * as StockTickerActions from './StockTicker.actions';

export const fetchStockPricesEpic = (action$) =>
  action$.pipe(
    ofType(StockTickerActions.fetchStockPrices),
    mergeMap((action) =>
      ajax({
        url: `https://alpha-vantage.p.rapidapi.com/query?function=TIME_SERIES_DAILY&symbol=${action.payload}&outputsize=full&datatype=json`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
          'x-rapidapi-host': process.env.REACT_APP_RAPID_API_HOST,
        },
      }).pipe(
        map((response) => {
          const timeSeriesDaily = getRapidAPITimeSeriesDaily(response);

          const closingPricesDaily = getRapidAPIClosingPricesDaily(
            timeSeriesDaily
          );

          const stockSymbol = getRapidAPIStockSymbol(response);

          return StockTickerActions.fetchStockPricesSuccess({
            stockSymbol,
            closingPricesDaily,
          });
        })
      )
    )
  );

const getRapidAPITimeSeriesDaily = (response) => {
  return response.response['Time Series (Daily)'];
};

const getRapidAPITimeSeriesDates = (timeSeriesDaily) => {
  return Object.keys(timeSeriesDaily);
};

const getRapidAPIClosingPricesDaily = (timeSeriesDaily) => {
  const timeSeriesDates = getRapidAPITimeSeriesDates(timeSeriesDaily);
  return timeSeriesDates.map((date) => {
    const priceDataDaily = timeSeriesDaily[date];
    const closingPriceDaily = priceDataDaily['4. close'];
    const [year, month, day] = date.split('-');
    return {
      year,
      month,
      day,
      closingPriceDaily,
    };
  });
};

const getRapidAPIResponseMetaData = (response) => {
  return response.response['Meta Data'];
};

const getRapidAPIStockSymbol = (response) => {
  const responseMetaData = getRapidAPIResponseMetaData(response);
  return responseMetaData['2. Symbol'];
};
