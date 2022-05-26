import React from "react";
import Bloc from "../Parametres/Bloc";
import Button from "../Parametres/Button";
import SearchBar from "../../Components/SearchBar";

const VosFormationsFormateur = () => {
    return (
        <>
        <SearchBar></SearchBar>
        <h2>
        Ajouter une formation
        </h2>
        <div>
            <Button className="purple" value="Titre"></Button>
            <Button className="purple" value="Spécialité"></Button>

        </div>
        <h2>
            Liste des formations
        </h2>
        <br></br>
        <div className="row">
            <div className="col-md-3"> 
               <Bloc></Bloc>
            </div>
            <div className="col-md-3"> 
               <Bloc></Bloc>
            </div>

        </div>
        </>
    )}
    export default VosFormationsFormateur;