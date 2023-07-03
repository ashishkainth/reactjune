import SearchContainer from "./SearchContainer";
import RestaurantContainer from "./RestaurantContainer";
import { RESTAURANT_DATA } from "../../utils/mockData";
import { useState } from "react";

export default Body = () => {
  const [restaurantList, setRestaurantList] = useState(RESTAURANT_DATA);

  const handleFilter = () => {
    let filterData = RESTAURANT_DATA.filter((item) => item.data.avgRating > 4);
    console.log(filterData);
    setRestaurantList(filterData);
  };

  const resetFilter = () => {
    setRestaurantList(RESTAURANT_DATA);
  };
  return (
    <div>
      <SearchContainer
        handleFilterAction={handleFilter}
        handleResetFilterAction={resetFilter}
      />
      <RestaurantContainer data={restaurantList} />
    </div>
  );
};
