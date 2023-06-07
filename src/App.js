import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import LandingPage from "./pages/LandingPage";
import LetterPage from "./pages/LetterPage";

//const TRACKING_ID = ""; // OUR_TRACKING_ID for google analytics
//ReactGA.initialize(TRACKING_ID);

function App() {
  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/letter" element={<LetterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
