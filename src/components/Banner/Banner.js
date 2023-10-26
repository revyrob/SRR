import React from "react";
import "./Banner.scss";

function Banner({ img1, img2 }) {
  return (
    <div className="mx-auto max-w-screen-xl ">
      <div className="static flex justify-center">
        <img
          className="h-[40vh] md:h-[90vh] object-cover top-home1 absolute"
          src={img1}
          alt="open pit mine"
        ></img>
        <img
          className="h-[40vh] md:h-[90vh] object-cover top-home2 absolute"
          src={img2}
          alt="open pit mine"
        ></img>
      </div>
      <p className="text-center w-[100%] h-[40vh] md:h-[90vh] bg-[transparent] text-red text-md md:text-lg uppercase z-999">
        Proposed mine superimposed on Record Ridge{" "}
      </p>
    </div>
  );
}

export default Banner;
