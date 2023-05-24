import React from "react";
//import banner from "../../assets/images/recordRidge.png";

function Banner({ img }) {
  return (
    <div>
      <img
        className="w-full h-screen object-cover"
        src={img}
        alt="open pit mine"
      ></img>
    </div>
  );
}

export default Banner;
