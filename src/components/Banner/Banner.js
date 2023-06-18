import React from "react";

function Banner({ img }) {
  return (
    <div>
      <img
        className="w-full h-[90vh] object-cover"
        src={img}
        alt="open pit mine"
      ></img>
      <p className="bg-black text-white p-2 pl-8">
        Example of a Magnesium Open Pit Mine shown in this picture is the Baymag
        in the East Kootenays which started operation in 1982{" "}
      </p>
    </div>
  );
}

export default Banner;
