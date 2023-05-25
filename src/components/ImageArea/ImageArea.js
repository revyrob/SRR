import React from "react";
import data from "../../assets/data/imagedata.json";
import { useState } from "react";

function ImageArea() {
  const [concerns] = useState(data);

  return (
    <section className="w-full flex flex-wrap m-auto bg-stone-200">
      {concerns.map((item) => (
        <img className="h-[15rem] p-4" src={item.img} alt={item.title} />
      ))}
    </section>
  );
}

export default ImageArea;
