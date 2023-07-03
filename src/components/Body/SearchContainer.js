import { useState } from "react";

export default SearchContainer = ({
  handleFilterAction,
  handleResetFilterAction,
  handleSearchFilterAction,
}) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <div style={{ margin: "10px" }}>
        <input
          type="text"
          placeholder="Enter Search text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          style={{ margin: "10px" }}
          onClick={() => {
            handleSearchFilterAction(searchText);
          }}
        >
          Search
        </button>
      </div>

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
