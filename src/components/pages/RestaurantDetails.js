import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CLOUDINARY_URL } from "../../utils/constant";

const ShimmerRestaurantDetails = () => {
  return (
    <div style={{ marginTop: "10px" }}>
      <div
        style={{
          width: "50%",
          height: "40px",
          backgroundColor: "#e7e7e7",
        }}
      />
      <div
        style={{
          marginTop: "10px",
          width: "50%",
          height: "200px",
          backgroundColor: "#e7e7e7",
        }}
      />
      <div
        style={{
          marginTop: "10px",
          width: "50%",
          height: "20px",
          backgroundColor: "#e7e7e7",
        }}
      />
      <div
        style={{
          marginTop: "10px",
          width: "50%",
          height: "50px",
          backgroundColor: "#e7e7e7",
        }}
      />
      <ul style={{ listStyleType: "none" }}>
        {new Array(100).fill().map((index) => {
          return (
            <li>
              {" "}
              <div
                style={{
                  marginTop: "10px",
                  width: "20%",
                  height: "20px",
                  backgroundColor: "#e7e7e7",
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const RestaurantDetails = () => {
  const params = useParams();
  const restaurantId = params.resId;
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
    console.log(json);
  };

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
