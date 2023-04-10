import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar1 from './Components/Navbar';
import Home from './Components/Home';
import TurfBooking from './Components/TurfBooking';
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";



function App() {
 
  return (
   <div className='App'>

    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/book' element={<TurfBooking/>} />
      </Routes>
    </Router>
   </div>
  );
}

export default App;
