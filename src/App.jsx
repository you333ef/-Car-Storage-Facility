import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Landing from './Components/Landing';
import Cars from './Components/Cars';
import DETAILS from './Components/DETAILS';
import MostCars from './Components/MostCars';
import DG from './Components/DG';


const App = () => {
  
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/details" element={<DETAILS />} />
          <Route path="/most-cars" element={<MostCars />} />
          <Route path="/DG" element={<DG />} />


          
        </Routes>
      </Router>
    </React.Fragment>
  )
}
export default App