import React from "react";
import { useParams } from "react-router-dom";
import { CLOUDINARY_URL } from "../../utils/constant";
import { ShimmerRestaurantDetails } from "../pages/ShimmerRestaurantDetails";
import useRestaurantDetails from "../../utils/useRestaurantDetails";
import { useNetworkStatus } from "../../utils/useNetworkStatus";

export const RestaurantDetails = () => {
  const params = useParams();
  const restaurantId = params.resId;
  const restaurantInfo = useRestaurantDetails(restaurantId);

  if (restaurantInfo === null) {
    return <ShimmerRestaurantDetails />;
  }

  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    restaurantInfo?.data?.cards[0]?.card?.card?.info;

  const { cards } =
    restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

  return (
    <div>
      <h1>{name}</h1>
      <img src={CLOUDINARY_URL + cloudinaryImageId} />
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h1>Menu</h1>
      <ul>
        {cards.map((item, index) => {
          if (item?.card?.card?.title) {
            return <li>{item?.card?.card?.title}</li>;
          }
        })}
      </ul>
    </div>
  );
};
