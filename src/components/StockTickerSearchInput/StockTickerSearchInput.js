function StockTickerSearchInput({ inputValue, onChange }) {
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        className="border focus:outline-none"></input>
    </>
  );
}

export default StockTickerSearchInput;
