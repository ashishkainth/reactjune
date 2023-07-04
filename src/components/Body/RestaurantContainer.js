import RestaurantCard from "../Cards/RestaurantCard";
import { Link } from "react-router-dom";

export default RestaurantContainer = ({ data }) => {
  return (
    <div className="restaurant-container">
      {data.map((restaurant) => {
        return (
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            key={restaurant.data.id}
            to={"/restaurant/" + restaurant.data.id}
          >
            <RestaurantCard data={restaurant} />
          </Link>
        );
      })}
    </div>
  );
};
