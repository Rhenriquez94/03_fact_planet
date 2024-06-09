import { useParams } from "react-router-dom"
import dataPlanets from "../../public/data.json"

const DetailsPlanets = () => {
  const { name } = useParams();
 
  // Verificar que name no es undefined
  if (!name) {
    return <div className="text-white"> Invalid URL: No planet name provided</div>;
  }

  // Convertir name a minúsculas para la búsqueda
  const lowerCaseName = name.toLowerCase();

  // Buscar el item en el JSON
  const item = dataPlanets.find(d => d.name.toLowerCase() === lowerCaseName);

  // Manejar caso donde el item no es encontrado
  if (!item) {
    return <div>Planet not found</div>;
  }
 
  return (

    <div className="text-white">
      <h1>{item.name}</h1>
      <p>{item.structure.content}</p>
      <img src={item.images.planet} alt="" />
    </div>

    



  )
}

export default DetailsPlanets