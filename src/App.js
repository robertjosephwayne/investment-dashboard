import TopAppBar from './components/TopAppBar/TopAppBar';
import StockTickerSearchContainer from './containers/StockTickerSearchContainer/StockTickerSearchContainer';

function App() {
  return (
    <div>
      <TopAppBar title="Investment Dashboard"></TopAppBar>
      <div className="flex justify-center mt-6">
        <StockTickerSearchContainer />
      </div>
    </div>
  );
}

export default App;
