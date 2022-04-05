
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from 'react-router-dom';

import Formations from './pages/Formations/Formations';
import Accueil from './pages/Accueil/Accueil';
import VosFormations from './pages/VosFormations/VosFormations';
import Parametres from './pages/Parametres/Parametres';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <Router>
    <Navbar/>
    <main>
      <Routes>
        <Route path="/"  element={<Accueil/>}> 
        </Route>
        <Route path="/formations" exact element={<Formations/>}> 
        </Route>
        <Route path="/vosformations"  element={<VosFormations/>}> 
        </Route>
        <Route path="/parametres" exact element={<Parametres/>}> 
        </Route> 
      </Routes>
    </main>
   </Router>
  
    
  );
}

export default App;
