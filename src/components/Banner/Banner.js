import React from "react";
import "./Banner.scss";

function Banner({ webpAfter }) {
  return (
    <div className="mx-auto max-w-screen-xl ">
      <div className=" flex justify-center">
        <img
          className="h-[40vh] md:h-[90vh] object-cover absolute  z-999"
          src={webpAfter}
          alt="open pit mine after"
        ></img>
      </div>
      <p className="relative text-center w-[100%] h-[40vh] md:h-[90vh] bg-[transparent] text-md md:text-lg uppercase">
        Proposed mine superimposed on Record Ridge{" "}
      </p>
    </div>
  );
}

export default Banner;
