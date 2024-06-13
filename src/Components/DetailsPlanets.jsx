import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import dataPlanets from '../data.json';
import StructureMobile from './StructurePlanets/StructureMobile';

const DetailsPlanets = () => {
  const { name } = useParams();
  const [selectedSection, setSelectedSection] = useState('overview');

  if (!name) {
    return <div className="text-white">Invalid URL: No planet name provided</div>;
  }

  // Convertir name a minúsculas para la búsqueda
  const lowerCaseName = name.toLowerCase();

  // Buscar el item en el JSON
  const planet = dataPlanets.find(d => d.name.toLowerCase() === lowerCaseName);

  if (!planet) {
    return <div>Planet not found</div>;
  }

  return (
    <>
      <StructureMobile
        planet={planet}
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />
      <div className="text-white flex justify-center flex-col items-center h-[722px] gap-10 mt-18">
        <img className="size-[150px]" src={planet.images.planet} alt={`${planet.name} image`} />
        <h1 className=' text-5xl'>{planet.name}</h1>
        <div className="w-[330px]">
        {selectedSection === 'overview' && <p className='text-center'>{planet.overview.content}</p>}
        {selectedSection === 'structure' && <p className='text-center'>{planet.structure.content}</p>}
        {selectedSection === 'surface' && <p className='text-center'>{planet.geology.content}</p>}
       </div>

       <div className='flex flex-col gap-3'>
          <div className='w-[327px] h-[48px] border border-gray-600 p-4 flex flex-row justify-between' >
            <p>Rotation Time</p>
            <p>{planet.rotation}</p>
          </div>

          <div className='w-[327px] h-[48px] border border-gray-600 p-4 flex flex-row justify-between' >
            <p>Revolution Time</p>
            <p>{planet.revolution}</p>
          </div>

          <div className='w-[327px] h-[48px] border border-gray-600 p-4 flex flex-row justify-between' >
            <p>Radius</p>
            <p>{planet.radius}</p>
          </div>

          <div className='w-[327px] h-[48px] border border-gray-600 p-4 flex flex-row justify-between' >
            <p>Average Temp</p>
            <p>{planet.temperature}</p>
          </div>
          
       </div>
        
      </div>
    </>
  );
};

export default DetailsPlanets;
