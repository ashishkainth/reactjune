import { useState } from "react";

export default SearchContainer = ({
  handleFilterAction,
  handleResetFilterAction,
  handleSearchFilterAction,
}) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <div
        style={{
          margin: "10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Enter Search text"
          value={searchText}
          style={{
            height: "40px",
            width: "50%",
            paddingLeft: "10px",
            paddingRight: "10px",
            fontSize: 24,
          }}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          style={{
            marginLeft: "10px",
            height: "50px",
            width: "100px",
            border: "1px solid black",
            borderRadius: 20,
          }}
          onClick={() => {
            handleSearchFilterAction(searchText);
          }}
        >
          Search
        </button>
      </div>

      <button
        className="filter-btn"
        style={{
          height: "50px",
          width: "200px",
          border: "1px solid black",
          borderRadius: 20,
        }}
        onClick={() => {
          handleFilterAction();
        }}
      >
        Filter Highest Rated
      </button>
      <button
        className="filter-btn"
        style={{
          height: "50px",
          width: "100px",
          border: "1px solid black",
          borderRadius: 20,
        }}
        onClick={() => {
          handleResetFilterAction();
        }}
      >
        Reset
      </button>
    </div>
  );
};
