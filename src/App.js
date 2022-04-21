import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Formations from './pages/Formations/Formations';
import Accueil from './pages/Accueil/Accueil';
import AccueilPrincipal from './pages/Accueil/AccueilPrincipal';
import Parametres from './pages/Parametres/Parametres';
import Navbar from './Components/Navbar/Navbar';
import {useState} from "react";
import SearchBar from './Components/SearchBar';
import SeConnecter from './pages/Accueil/SeConnecter';
function App() {
    return (
      <>
      
       <Router>
      
    <Navbar />
    <SearchBar/>
    <main className="whiteBackground" >
      <Routes>
        <Route path="/"  element={<Accueil  titre="Formations"/>}/> 
       
        <Route path="/formations" exact element={<Formations   titre="Formations"/>}/>  
       {/* privates */}
        <Route path="/vosformations"  element={<Formations   titre="Vos formations"/>}/> 
       
        <Route path="/parametres" exact element={<Parametres/>}/> 
      
         <Route path="/login" exact element={<SeConnecter/>}/> 
        
      </Routes>
    </main>
   </Router>)
   
  
  
    
   
   
   )
   
   </>
  
    
  );
}

export default App;
