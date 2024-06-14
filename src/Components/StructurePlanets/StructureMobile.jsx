import React from "react";
import "./Structure.css";


const StructureMobile = ({ planet, selectedSection, setSelectedSection }) => {
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
    case "earth":
      colorClass = "colorEarth";
      break;
    case "mars":
      colorClass = "colorMars";
      break;
    case "jupiter":
      colorClass = "colorJupiter";
      break;
    case "saturn":
      colorClass = "colorSaturn";
      break;
    case "uranus":
      colorClass = "colorUranus";
      break;
    case "neptune":
      colorClass = "colorNeptune";
      break;
    default:
      colorClass = "defaultColor";
      break;
  }

  return (
    <section className="md:hidden">
      <div className=" border-b-2 md:hidden">
        <ul className="flex justify-evenly h-14 items-center">
          <li
            className={`${colorClass}  pt-2`}
            onClick={() => setSelectedSection("overview")}
          >
            OVERVIEW
          </li>
          <li
            className={`${colorClass} pt-2`}
            onClick={() => setSelectedSection("structure")}
          >
            STRUCTURE
          </li>
          <li
            className={`${colorClass} pt-2`}
            onClick={() => setSelectedSection("surface")}
          >
            SURFACE
          </li>
        </ul>
      </div>

      <div className="text-white flex justify-center flex-col items-center h-[722px] gap-6 mt-18">
        <h1 className=" text-5xl">{planet.name}</h1>
        <div className="w-[330px] flex flex-col justify-center items-center">
          {selectedSection === "overview" && (
            <>
              <img
                className="size-[150px]"
                src={planet.images.planet}
                alt={`${planet.name} image`}
              />

              <p className="text-center mt-8">{planet.overview.content}</p>
            </>
          )}
          {selectedSection === "structure" && (
            <>
              <img
                className="size-[150px]"
                src={planet.images.internal}
                alt={`${planet.name} image`}
              />
              <p className="text-center mt-8">{planet.structure.content}</p>
            </>
          )}
          {selectedSection === "surface" && (
            <>
              <div className="relative w-40 h-40">
                <img
                  className="absolute top-0 left-0 w-40 h-40 z-0"
                  src={planet.images.planet}
                  alt={`${planet.name} image`}
                />
                <img
                  className="absolute top-1/2 left-1/2 w-12 h-12 transform -translate-x-1/2 translate-y-14 z-10"
                  src={planet.images.geology}
                  alt={`${planet.name} geology image`}
                />
              </div>

              <p className="text-center mt-8">{planet.geology.content}</p>
            </>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <div className="w-[327px] h-[48px] border border-gray-600 p-4 flex flex-row justify-between">
            <p>Rotation Time</p>
            <p className="font-Antonio">{planet.rotation}</p>
          </div>

          <div className="w-[327px] h-[48px] border border-gray-600 p-4 flex flex-row justify-between">
            <p>Revolution Time</p>
            <p className="font-Antonio">{planet.revolution}</p>
          </div>

          <div className="w-[327px] h-[48px] border border-gray-600 p-4 flex flex-row justify-between">
            <p>Radius</p>
            <p className="font-Antonio">{planet.radius}</p>
          </div>

          <div className="w-[327px] h-[48px] border border-gray-600 p-4 flex flex-row justify-between">
            <p>Average Temp</p>
            <p className="font-Antonio">{planet.temperature}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StructureMobile;
