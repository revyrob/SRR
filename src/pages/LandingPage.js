import React from "react";
import Nav from "../components/Nav/Nav";
import Banner from "../components/Banner/Banner";
import What from "../components/What/What";
import Concerns from "../components/Concerns/Concerns";
// import banner from "../assets/images/mineEastKoot.png";
import Action from "../components/Action/Action";
import Who from "../components/Who/Who";
import Footer from "../components/Footer/Footer";
import ImageArea from "../components/ImageArea/ImageArea";
import allPic from "../assets/data/imagedata.json";
import img1 from "../assets/images/FORR_Before_.jpg";
import img2 from "../assets/images/FORR_After_.jpg";
// import changePic from "../assets/data/changeImage.json";

function LandingPage() {
  return (
    <>
      <Nav what="What" concerns="Concerns" actions="Actions" who="Who" />
      <Banner img1={img1} img2={img2} />
      {/* <ImageArea images={changePic} /> */}

      <What />

      <Concerns />
      <Action />
      <ImageArea images={allPic} />

      <Who />
      <Footer />
    </>
  );
}

export default LandingPage;
