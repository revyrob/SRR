import React from "react";
//import data from "../../assets/data/imagedata.json";
import { useState } from "react";

function ImageArea({ images }) {
  const [concerns] = useState(images);

  return (
    <section className="w-full flex flex-wrap m-auto bg-stone-200 justify-center">
      {concerns.map((item) => (
        <div className="flex flex-col">
          <img className="h-[15rem] m-4 " src={item.img} alt={item.title}></img>
          <p className="bg-black text-white m-4 p-2">{item.credits}</p>
        </div>
      ))}
    </section>
  );
}

export default ImageArea;
