import React from "react";
import { useRouteError } from "react-router-dom";

export const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>OPPS!</h1>
      <h4>Something went wrong!</h4>
      <h4>{error.error?.message}</h4>
    </div>
  );
};
