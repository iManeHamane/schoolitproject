
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from 'react-router-dom';

import About from './pages/Formations/Formations';
import Contact from './pages/Contact/Contact';
import Home from './pages/Accueil/Accueil';
import Services from './pages/VosFormations/VosFormations';
import Testimonial from './pages/Parametres/Parametres';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <Router>
    <Navbar/>
    <main>
      <Routes>
        <Route path="/"  element={<Home/>}> 
        </Route>
        <Route path="/about" exact element={<About/>}> 
        </Route> 
      </Routes>
    </main>
   </Router>
  
    
  );
}

export default App;
