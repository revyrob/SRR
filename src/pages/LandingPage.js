import React from "react";
import Nav from "../components/Nav/Nav";
import Banner from "../components/Banner/Banner";
import What from "../components/What/What";
import Concerns from "../components/Concerns/Concerns";
import Action from "../components/Action/Action";
import Who from "../components/Who/Who";
import Footer from "../components/Footer/Footer";
import ImageArea from "../components/ImageArea/ImageArea";
import allPic from "../assets/data/imagedata.json";
import webpAfter from "../assets/images/FORR_After_.webp";

function LandingPage() {
  return (
    <>
      <Nav what="What" concerns="Concerns" actions="Actions" who="Who" />
      <Banner webpAfter={webpAfter} />
      <What />
      <ImageArea images={allPic} />
      <Action />
      <Concerns />

      <Who />
      <Footer />
    </>
  );
}

export default LandingPage;
