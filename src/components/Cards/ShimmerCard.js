import { CLOUDINARY_URL } from "../../utils/constant";

export default ShimmerCard = (props) => {
  const { data } = props;
  return (
    <div className="shimmer-card">
      <div
        style={{
          width: "100%",
          height: "150px",
          backgroundColor: "#e7e7e7",
        }}
      ></div>
      <div
        style={{
          width: "100%",
          margin: "10px 0",
          height: "80px",
          backgroundColor: "#e7e7e7",
        }}
      ></div>
      <div
        style={{
          width: "100%",
          margin: "10px 0",
          height: "20px",
          backgroundColor: "#e7e7e7",
        }}
      ></div>
      <div
        style={{
          width: "100%",
          margin: "10px 0",
          height: "20px",
          backgroundColor: "#e7e7e7",
        }}
      ></div>
      <div
        style={{
          width: "100%",
          margin: "10px 0",
          height: "20px",
          backgroundColor: "#e7e7e7",
        }}
      ></div>
      {/* <img
        width={"100%"}
        src={CLOUDINARY_URL + data.data.cloudinaryImageId}
        alt="restaurant-logo"
      />
      <h2>{data.data.name}</h2>
      <h4>{data.data.cuisines.join(", ")}</h4>
      <h4>{data.data.avgRating} stars</h4>
      <h4>{data.data.area}</h4> */}
    </div>
  );
};
