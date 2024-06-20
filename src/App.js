import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboarda } from './Components/Dashboard/Dashboard'; 
import  Brends  from './Components/Categories/Brends/Brends';
import  Cars  from './Components/Categories/Cars/Cars';
import { Cities } from './Components/Categories/Cities/Cities';
import { Models } from './Components/Categories/Models/Models';
import {Settings} from "./Components/Categories/Settings/Settings"
import { Login } from './Components/Login/Login'; 


function App() {
	
  return (
    <div>
      <Router>
      <Routes>
	   <Route path="/" element={<Login />} />
        <Route path="/panel" element={<Dashboarda />}>
          <Route path="/panel/settings" element={<Settings />} />
          <Route path="/panel/cities" element={<Cities />} />
          <Route path="/panel/cars" element={<Cars />} /> 
          <Route path="/panel/brends" element={<Brends />} />
		  <Route path="/panel/models" element={<Models />} />
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
