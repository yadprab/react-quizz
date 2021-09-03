import React from "react";
import Img from "../images/negative.png";

function Failure() {
  return (
    <>
      <div className="image--container">
        <img src={Img} alt="negative emotion" />
      </div>
    </>
  );
}

export { Failure };
