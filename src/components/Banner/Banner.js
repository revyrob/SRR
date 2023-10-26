import React from "react";
import "./Banner.scss";

function Banner({ img1, img2 }) {
  return (
    <div className="flex mr-auto ml-auto max-w-screen-xl">
      <div className="static">
        <img
          className=" h-[90vh] object-cover top-home1 absolute"
          src={img1}
          alt="open pit mine"
        ></img>
        <img
          className=" h-[90vh] object-cover top-home2 absolute"
          src={img2}
          alt="open pit mine"
        ></img>
      </div>
      <p className="flex justify-end items-end w-[100%] h-[95vh] bg-[transparent] text-white text-lg uppercase pb-24 pr-8 z-10">
        Proposed mine superimposed on Record Ridge{" "}
      </p>
    </div>
  );
}

export default Banner;
