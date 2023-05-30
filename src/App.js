import React from "react";
import { BrowserRouter } from "react-router-dom";
// import ReactGA from "react-ga";
//import { useEffect } from "react";
import Nav from "./components/Nav/Nav";
import Banner from "./components/Banner/Banner";
import What from "./components/What/What";
import Concerns from "./components/Concerns/Concerns";
import banner from "./assets/images/mineEastKoot.png";
import Action from "./components/Action/Action";
import Who from "./components/Who/Who";
import Footer from "./components/Footer/Footer";
import ImageArea from "./components/ImageArea/ImageArea";
import "./App.scss";

//const TRACKING_ID = ""; // OUR_TRACKING_ID for google analytics
//ReactGA.initialize(TRACKING_ID);

function App() {
  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, []);
  return (
    <BrowserRouter>
      <Nav />
      <Banner img={banner} />
      <What />
      <Concerns />
      <Action />
      <ImageArea />

      <Who />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
