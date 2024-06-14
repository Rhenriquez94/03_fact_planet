import React from 'react'
import './Structure.css'

const StructureDesktop = ({ planet, selectedSection, setSelectedSection }) => {

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
    <>
    <section className="text-white flex flex-col md:flex-row items-center mt-52 md:justify-center md:items-start md:space-x-8">
      <div className="md:w-1/2 flex justify-center">
        {selectedSection === "overview" && (
          <>
            <img
              className="w-96"
              src={planet.images.planet}
              alt={`${planet.name} image`}
            />
          </>
        )}
        {selectedSection === "structure" && (
          <>
            <img
              className="w-96"
              src={planet.images.internal}
              alt={`${planet.name} image`}
            />
          </>
        )}
        {selectedSection === "surface" && (
          <>
            <div className="relative w-96 h-96">
              <img
                className="absolute top-0 left-0 w-96 h-96 z-0"
                src={planet.images.planet}
                alt={`${planet.name} image`}
              />
              <img
                className="absolute top-1/2 left-1/2 w-24 h-24 transform -translate-x-1/2 translate-y-14 z-10"
                src={planet.images.geology}
                alt={`${planet.name} geology image`}
              />
            </div>
          </>
        )}
      </div>

      <div className="md:w-[300px]">
        <h1 className="text-4xl mb-4">{planet.name}</h1>
        {selectedSection === "overview" && (
          <p className="mt-8">{planet.overview.content}</p>
        )}
        {selectedSection === "structure" && (
          <p className="mt-8">{planet.structure.content}</p>
        )}
        {selectedSection === "surface" && (
          <p className="mt-8">{planet.geology.content}</p>
        )}

        <div className="mt-8 space-y-4">
          <div
            className={`${colorClass} text-xl cursor-pointer`}
            onClick={() => setSelectedSection("overview")}
          >
            OVERVIEW
          </div>
          <div
            className={`${colorClass} text-xl cursor-pointer`}
            onClick={() => setSelectedSection("structure")}
          >
            STRUCTURE
          </div>
          <div
            className={`${colorClass} text-xl cursor-pointer`}
            onClick={() => setSelectedSection("surface")}
          >
            SURFACE
          </div>
        </div>
      </div>
    </section>

        
      <div className="flex flex-row gap-3 my-20 justify-evenly text-white text-4xl">
          <div className="w-[255px] h-[128px] border border-gray-600 p-4 flex flex-col justify-between">
            <p className=' text-2xl'>Rotation Time</p>
            <p className="font-Antonio text-3xl">{planet.rotation}</p>
          </div>

          <div className="w-[255px] h-[128px] border border-gray-600 p-4 flex flex-col justify-between">
            <p className=' text-2xl'>Revolution Time</p>
            <p className="font-Antonio text-3xl">{planet.revolution}</p>
          </div>

          <div className="w-[255px] h-[128px] border border-gray-600 p-4 flex flex-col justify-between">
            <p className=' text-2xl'>Radius</p>
            <p className="font-Antonio text-3xl">{planet.radius}</p>
          </div>

          <div className="w-[255px] h-[128px] border border-gray-600 p-4 flex flex-col  justify-between">
            <p className=' text-2xl'>Average Temp</p>
            <p className="font-Antonio text-3xl" >{planet.temperature}</p>
          </div>
      </div>
    </>
  )
}

export default StructureDesktop