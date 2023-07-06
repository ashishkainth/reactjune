import React, { useEffect, useState } from "react";

export const ShimmerRestaurantDetails = () => {
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
