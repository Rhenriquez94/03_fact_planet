import React from "react";
import "./Structure.css";

const StructureMobile = ({ planet }) => {
  if (!planet) {
    return <div>No planet data</div>;
  }

  let colorClass = "";
  switch (planet.name.toLowerCase()) {
    case "mercury":
      colorClass = "colorMercury";
      break;

    case "venus":
      colorClass = "colorVenus";
      break;

    case 'earth':
      colorClass = "colorEarth"
      break;

    case 'mars':
      colorClass = "colorMars"
      break;
    
    case 'jupiter':
      colorClass = "colorJupiter"
      break;
    
    case 'saturn':
      colorClass = "colorSaturn"
      break;

    case 'uranus':
      colorClass = "colorUranus"
      break;

    case 'neptune':
      colorClass = "colorNeptune"
      break;  

    default:
      colorClass = "defaultColor"; // Color por defecto si no hay coincidencia
      break;
  }

  return (
    <ul>
      <li className={`${colorClass}`}>OVERVIEW</li>
      <li className={`${colorClass}`}>STRUCTURE</li>
      <li className={`${colorClass}`}>SURFACE</li>
    </ul>
  );
};

export default StructureMobile;
