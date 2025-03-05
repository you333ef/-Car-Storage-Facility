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
import Landing from './Componants/Landing';
import Cars from './Componants/Cars';
import DETAILS from './Componants/DETAILS';


const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/details" element={<DETAILS />} />
        </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App