import React from "react";
import "./Banner.scss";
import useProgressiveImg from "./ProgressiveImg/ProgressiveImg.js";

function Banner({ img1, img2 }) {
  const [src, { blur }] = useProgressiveImg({ img1 }, { img2 });

  return (
    <div className="mx-auto max-w-screen-xl ">
      <div className="static flex justify-center">
        <img
          className="h-[40vh] md:h-[90vh] object-cover top-home1 absolute myThing"
          src={src}
          alt="open pit mine before "
        ></img>
        <img
          className="h-[40vh] md:h-[90vh] object-cover top-home2 absolute myThing"
          style={{
            filter: blur ? "blur(20px)" : "none",
            transition: blur ? "none" : "filter 0.3s ease-out",
          }}
          src={src}
          alt="open pit mine after"
        ></img>
      </div>
      <p className="text-center w-[100%] h-[40vh] md:h-[90vh] bg-[transparent] text-red text-md md:text-lg uppercase z-999">
        Proposed mine superimposed on Record Ridge{" "}
      </p>
    </div>
  );
}

export default Banner;
