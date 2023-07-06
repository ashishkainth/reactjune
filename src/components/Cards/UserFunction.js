import React from "react";

const UserFunction = (props) => {
  const { name, city, username } = props;
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>City: {city}</h2>
      <h4>Username: {username}</h4>
    </div>
  );
};

export default UserFunction;
