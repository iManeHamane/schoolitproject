
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Formations from './pages/Formations/Formations';
import Accueil from './pages/Accueil/Accueil';
import AccueilPrincipal from './pages/Accueil/AccueilPrincipal';
import VosFormations from './pages/VosFormations/VosFormations';
import Parametres from './pages/Parametres/Parametres';
import Navbar from './Components/Navbar/Navbar';
import NavBarP from './Components/Navbar/NavBarP';
import {useState} from "react";
import SeConnecter from './pages/Accueil/Sinscrire';


function App() {
  const [islogged, setIslogged]=useState(false);
  const [haveAnAccount, setHaveAnAccount]=useState(false);
 
 
    return (
      <> {
        islogged?   

    (<Router>
    <Navbar setIslogged={setIslogged} setHaveAnAccount={setHaveAnAccount} />
    <main >
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
   </Router>)
   
   :(   <AccueilPrincipal setHaveAnAccount={setHaveAnAccount} haveAnAccount={haveAnAccount} setIslogged={setIslogged} />
   
   )
   }
   </>
  
    
  );
}

export default App;
