import { useState } from "react";
import { CLOUDINARY_URL } from "../../utils/constant";

export default RestaurantCard = (props) => {
  const { data } = props;
  const [bgColor, setBgColor] = useState("");
  return (
    <div
      className="restaurnat-card"
      style={{ backgroundColor: bgColor }}
      onMouseEnter={() => {
        setBgColor("#f0f0f0");
      }}
      onMouseLeave={() => {
        setBgColor("#ffffff");
      }}
    >
      <img
        width={"100%"}
        src={CLOUDINARY_URL + data.data.cloudinaryImageId}
        alt="restaurant-logo"
        style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
      />
      <h2 style={{ marginTop: 0.5, marginBottom: 1 }}>{data.data.name}</h2>
      <h4 style={{ marginTop: 0.5, marginBottom: 1, fontWeight: "normal" }}>
        {" "}
        {data.data.cuisines.join(", ")}
      </h4>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4 style={{ marginTop: 8, marginBottom: 8, fontWeight: "normal" }}>
          {data.data.costForTwoString}
        </h4>
        <p
          style={{
            backgroundColor: data.data.avgRating > 4 ? "green" : "red",
            marginTop: 8,
            marginBottom: 8,
            width: 50,
            height: "24px",
            textAlign: "center",
            fontWeight: "normal",
            color: "white",
          }}
        >
          ★ {data.data.avgRating}
        </p>
      </div>
      <h4 style={{ marginTop: 8, marginBottom: 8, fontWeight: "normal" }}>
        {data.data.address}
      </h4>
    </div>
  );
};
