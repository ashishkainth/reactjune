import { useState, useEffect } from "react";
const useRestaurantDetails = (restaurantId) => {
  const [restaurantInfo, setRestaurantinfo] = useState(null);

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  const getRestaurantDetails = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3404775&lng=76.46064679999999&restaurantId=${restaurantId}&submitAction=ENTER`
    );
    const json = await data.json();
    setRestaurantinfo(json);
  };

  return restaurantInfo;
};

export default useRestaurantDetails;
