import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar";

import Mercury from './Views/Mercury';
import Venus from './Views/Venus';
import Earth from './Views/Earth';
import Jupiter from './Views/Jupiter';
import Mars from './Views/Mars';
import Neptune from './Views/Neptune';
import Saturn from './Views/Saturn';
import Uranus from './Views/Uranus';




const App = () => {
  // const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
  // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <>
    <Router>
      <NavBar/>

      <Routes>
      <Route path="/" element={<Earth/>}/>
        <Route path="/mercury" element={<Mercury/>}/>
        <Route path="/venus" element={<Venus/>}/>
        <Route path="/earth" element={<Earth/>}/>
        <Route path="/jupiter" element={<Jupiter/>}/>
        <Route path="/mars" element={<Mars/>}/>
        <Route path="/neptune" element={<Neptune/>}/>
        <Route path="/saturn" element={<Saturn/>}/>
        <Route path="/uranus" element={<Uranus/>}/>
      </Routes>

    </Router>
    </>
    
  );
};

export default App;
