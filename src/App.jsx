import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar";
import DetailsPlanets from "./Components/DetailsPlanets";
import Home from "./Components/Home";

import './index.css';
import './Components/StructurePlanets/Structure.css'

const planets = [
  { name: "Mercury", path: "/mercury", color: "colorMercury" },
  { name: "Venus", path: "/venus", color: "colorVenus" },
  { name: "Earth", path: "/earth", color: "colorEarth" },
  { name: "Mars", path: "/mars", color: "colorMars" },
  { name: "Jupiter", path: "/jupiter", color: "colorJupiter" },
  { name: "Saturn", path: "/saturn", color: "colorSaturn" },
  { name: "Uranus", path: "/uranus", color: "colorUranus" },
  { name: "Neptune", path: "/neptune", color: "colorNeptune" },
];

const App = () => {



  return (
    <Router>
      <NavBar planets={planets}  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<DetailsPlanets />} />
      </Routes>
    </Router>
  );
};

export default App;
