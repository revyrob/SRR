import React from "react";
import { BrowserRouter } from "react-router-dom";
// import ReactGA from "react-ga";
import { useEffect } from "react";
import Nav from "./components/Nav/Nav";
import Banner from "./components/Banner/Banner";

const TRACKING_ID = ""; // OUR_TRACKING_ID for google analytics
//ReactGA.initialize(TRACKING_ID);

function App() {
  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, []);
  return (
    <BrowserRouter>
      <Nav />
      <Banner />
    </BrowserRouter>
  );
}

export default App;
