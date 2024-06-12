import { useParams } from "react-router-dom";
import dataPlanets from "../data.json";
import StructureMobile from "./StructurePlanets/StructureMobile";

const DetailsPlanets = () => {
  const { name } = useParams();
  
  if (!name) {
    return <div className="text-white">Invalid URL: No planet name provided</div>;
  }

  const lowerCaseName = name.toLowerCase();
  const planet = dataPlanets.find(d => d.name.toLowerCase() === lowerCaseName);

  if (!planet) {
    return <div>Planet not found</div>;
  }

  return (
    <>
      <StructureMobile planet={planet} /> {/* Pass planet as prop */}
      <div className="text-white">
        <h1>{planet.name}</h1>
        <p>{planet.structure.content}</p>
        <img className="size-28" src={planet.images.planet} alt={`${planet.name} image`} />
      </div>
    </>
  );
};

export default DetailsPlanets;
