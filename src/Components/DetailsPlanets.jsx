import React, { useState } from "react";
import { useParams } from "react-router-dom";
import dataPlanets from "../data.json";
import StructureMobile from "./StructurePlanets/StructureMobile";
import StructureDesktop from "./StructurePlanets/StructureDesktop";

import { useMediaQuery } from "react-responsive";

const DetailsPlanets = () => {
  const { name } = useParams();
  const [selectedSection, setSelectedSection] = useState("overview");

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  if (!name) {
    return (
      <div className="text-white">Invalid URL: No planet name provided</div>
    );
  }

  // Convertir name a minúsculas para la búsqueda
  const lowerCaseName = name.toLowerCase();

  // Buscar el item en el JSON
  const planet = dataPlanets.find(
    (d) => d.name.toLowerCase() === lowerCaseName
  );

  if (!planet) {
    return <div>Planet not found</div>;
  }

  return (
    <>
      {isMobile &&(
        <StructureMobile 
        planet={planet}
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
        />)
      } 
        
      {!isMobile && (
        <StructureDesktop 
        planet={planet}
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
        />)
      }
    </>
  );
};

export default DetailsPlanets;
