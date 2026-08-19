import React from "react";
import About from "./hero/About";
import Resume from "./hero/Resume";
import Project from "./hero/Project";
import Contact from "./hero/Contact";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Hero = () => {
  const location = useLocation();

  return (
    <div
      className="glass-card flex-1 min-w-0 lg:overflow-y-auto no-scrollbar rounded-2xl"
      style={{
        minHeight: "auto",
      }}
    >
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default Hero;
