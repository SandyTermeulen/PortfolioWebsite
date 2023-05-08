import React from "react";

export const Background = () => {
  return (
    <div className="background-container">
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
        alt=""
      ></img>
      <div className="stars">
        <div className="twinkling">
          <div className="clouds"></div>
        </div>
      </div>
    </div>
  );
};

export default Background;
