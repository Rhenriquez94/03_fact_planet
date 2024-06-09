import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import flecha from "/img/icon-chevron.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const planets = [
    { name: "Mercury", path: "/mercury", circle: "circleMercury" },
    { name: "Venus", path: "/venus", circle: "circleVenus" },
    { name: "Earth", path: "/earth", circle: "circleEarth" },
    { name: "Mars", path: "/mars", circle: "circleMars" },
    { name: "Jupiter", path: "/jupiter", circle: "circleJupiter" },
    { name: "Saturn", path: "/saturn", circle: "circleSaturn" },
    { name: "Uranus", path: "/uranus", circle: "circleUranus" },
    { name: "Neptune", path: "/neptune", circle: "circleNeptune" },
  ];

  return (
    <nav className="text-white">
      <div className="flex justify-between h-16 border-b-2 border-gray-500">
        <Link to="/" className="text-2xl font-bold p-4">
          THE PLANETS
        </Link>
        {isMobile && (
          <button className="ml-4 text-2xl p-4" onClick={toggleMenu}>
            ☰
          </button>
        )}
        {!isMobile && (
          <ul className="flex flex-row items-center ml-4">
            {planets.map((planet) => (
              <li key={planet.name} className="m-2 ">
                <Link
                  to={planet.path}
                  className="text-white no-underline hover:bg-gray-600 p-2 font-light"
                >
                  {planet.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      {isMobile && (
        <ul
          className={`flex flex-col justify-center absolute w-full left-0 bg-[#070724] text-center ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {planets.map((planet) => (
            <li key={planet.name} className="m-2">
              <Link
                to={planet.path}
                className="flex flex-row text-white no-underline hover:bg-gray-600 p-2 border-b-[1px] border-gray-500 h-[60px]"
                onClick={toggleMenu}
              >
                <div className={`${planet.circle} md:hidden`}></div>
                <div className="h-auto w-20 text-2xl">
                  <p className="text-left pl-6 md:text-sm ">{planet.name}</p>
                </div>
                <div className="ml-[240px] mb-[10px] size-[60px] items-center flex mt-2 md:hidden">
                  <img src={flecha} alt="flecha" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
