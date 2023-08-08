import React from "react";
import { useState } from "react";
import changePic from "../assets/data/changeImage.json";

function FadeBanner() {
  //need images as state
  const [changeImg, setChangeImg] = useState(changePic);

  //need counter
  let counter = 0;

  return <div>FadeBanner</div>;
}

export default FadeBanner;
