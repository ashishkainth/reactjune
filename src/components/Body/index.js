import SearchContainer from "./SearchContainer";
import RestaurantContainer from "./RestaurantContainer";
import { useEffect, useState } from "react";
import ShimmerContainer from "./ShimmerContainer";

export default Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const [filteredList, setFilteredList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const getRestaurantList = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3404775&lng=76.46064679999999&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setRestaurantList(jsonData?.data?.cards[2]?.data?.data?.cards);
    setFilteredList(jsonData?.data?.cards[2]?.data?.data?.cards);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getRestaurantList();
  }, []);

  const handleFilter = () => {
    let filterData = restaurantList.filter((item) => item.data.avgRating > 4);
    setFilteredList(filterData);
  };

  const resetFilter = () => {
    setFilteredList(restaurantList);
  };

  const handleSearchAction = (text) => {
    let filterData = restaurantList.filter((item) =>
      item.data.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredList(filterData);
  };

  return (
    <div>
      <SearchContainer
        handleFilterAction={handleFilter}
        handleResetFilterAction={resetFilter}
        handleSearchFilterAction={handleSearchAction}
      />
      {isLoading ? (
        <ShimmerContainer />
      ) : (
        <RestaurantContainer data={filteredList} />
      )}
    </div>
  );
};
