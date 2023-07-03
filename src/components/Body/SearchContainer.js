export default SearchContainer = ({
  handleFilterAction,
  handleResetFilterAction,
}) => {
  return (
    <div>
      Search Container
      <button
        className="filter-btn"
        onClick={() => {
          handleFilterAction();
        }}
      >
        Filter Highest Rated
      </button>
      <button
        className="filter-btn"
        onClick={() => {
          handleResetFilterAction();
        }}
      >
        Reset
      </button>
    </div>
  );
};
