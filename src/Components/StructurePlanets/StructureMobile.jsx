import React from 'react';
import './Structure.css';

const StructureMobile = ({ planet, selectedSection, setSelectedSection }) => {
  if (!planet) {
    return <div>No planet data</div>;
  }

  let colorClass = '';
  switch (planet.name.toLowerCase()) {
    case 'mercury':
      colorClass = 'colorMercury';
      break;
    case 'venus':
      colorClass = 'colorVenus';
      break;
    case 'earth':
      colorClass = 'colorEarth';
      break;
    case 'mars':
      colorClass = 'colorMars';
      break;
    case 'jupiter':
      colorClass = 'colorJupiter';
      break;
    case 'saturn':
      colorClass = 'colorSaturn';
      break;
    case 'uranus':
      colorClass = 'colorUranus';
      break;
    case 'neptune':
      colorClass = 'colorNeptune';
      break;
    default:
      colorClass = 'defaultColor';
      break;
  }

  return (
    <div className=" border-b-2">
      <ul className="flex justify-evenly h-14 items-center">
        <li
          className={`${colorClass}  pt-2`}
          onClick={() => setSelectedSection('overview')}
        >
          OVERVIEW
        </li>
        <li
          className={`${colorClass} pt-2`}
          onClick={() => setSelectedSection('structure')}
        >
          STRUCTURE
        </li>
        <li
          className={`${colorClass} pt-2`}
          onClick={() => setSelectedSection('surface')}
        >
          SURFACE
        </li>
      </ul>
    </div>
  );
};

export default StructureMobile;
