import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar";
import DetailsPlanets from "./Components/DetailsPlanets";
import Home from "./Components/Home"





const App = () => {

  return (
    <>
    <Router>
      <NavBar/>

      <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="/:name" element={<DetailsPlanets/>}/>
      </Routes>

    </Router>
    </>
    
  );
};

export default App;
