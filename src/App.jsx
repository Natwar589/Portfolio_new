import Profile from "./components/Profile.jsx";
import Hero from "./components/Hero.jsx";
import LeftBar from "./components/LeftBar.jsx";
import React from "react";
import "./App.css";

function App() {
  return (
    <>
      {/* Animated background orbs */}
      <div className="bg-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <div className="portfolio-layout">
        <Profile />
        <Hero />
        <LeftBar />
      </div>
    </>
  );
}

export default App;
