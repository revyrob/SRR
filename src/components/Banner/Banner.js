import React from "react";
import "./Banner.scss";

function Banner({ img1, img2 }) {
  return (
    <div className="flex m-auto p-auto">
      <div className="static">
        <img
          className="w-full h-[90vh] object-cover top-home1 absolute"
          src={img1}
          alt="open pit mine"
        ></img>
        <img
          className="w-full h-[90vh] object-cover top-home2 absolute"
          src={img2}
          alt="open pit mine"
        ></img>
      </div>
      <p className="flex justify-center items-center w-[100%] h-[100vh] bg-[transparent] text-white p-2 pl-8 z-10">
        Proposed mine superimposed on Record Ridge{" "}
      </p>
    </div>
  );
}

export default Banner;
