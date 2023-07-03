import ShimmerCard from "../Cards/ShimmerCard";

export default ShimmerContainer = () => {
  return (
    <div className="shimmer-container">
      {new Array(100).fill().map((restaurant, index) => {
        return <ShimmerCard key={index} data={restaurant} />;
      })}
    </div>
  );
};
