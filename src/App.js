import StockPricesTableContainer from './components/StockPricesTableContainer/StockPricesTableContainer';
import StockTickerSearchContainer from './components/StockTickerSearchContainer/StockTickerSearchContainer';
import TopAppBar from './components/TopAppBar/TopAppBar';

function App() {
  return (
    <div>
      <TopAppBar title="Investment Dashboard"></TopAppBar>
      <div>
        <StockTickerSearchContainer />
      </div>
      <StockPricesTableContainer />
    </div>
  );
}

export default App;
