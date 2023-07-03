import RestaurantCard from "../Cards/RestaurantCard";

export default RestaurantContainer = ({ data }) => {
  return (
    <div className="restaurant-container">
      {data.map((restaurant) => {
        return <RestaurantCard key={restaurant.data.id} data={restaurant} />;
      })}
    </div>
  );
};
