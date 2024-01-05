import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <h2>That page connot be found</h2>
      <Link to={"/"}>
        <p>Back to the homepage</p>
      </Link>
    </div>
  );
};

export default NotFound;
