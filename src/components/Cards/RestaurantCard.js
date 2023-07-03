import { useState } from "react";
import { CLOUDINARY_URL } from "../../utils/constant";

export default RestaurantCard = (props) => {
  const { data } = props;
  return (
    <div className="restaurnat-card">
      <img
        width={"100%"}
        src={CLOUDINARY_URL + data.data.cloudinaryImageId}
        alt="restaurant-logo"
      />
      <h2>{data.data.name}</h2>
      <h4>{data.data.cuisines.join(", ")}</h4>
      <h4>{data.data.avgRating} stars</h4>
      <h4>{data.data.area}</h4>
    </div>
  );
};
