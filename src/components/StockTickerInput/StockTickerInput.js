function StockTickerInput({ inputValue, onChange, onSubmit }) {
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        className="border focus:outline-none"></input>

      <button className="ml-4 focus:outline-none" onClick={onSubmit}>
        Submit
      </button>
    </>
  );
}

export default StockTickerInput;
