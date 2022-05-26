import React from "react";
import Bloc from "../Parametres/Bloc";
import Button from "../Parametres/Button";
import SearchBar from "../../Components/SearchBar";
import "./Ajouter.css";

const Ajouter = () => {
    return (
        <>
        <SearchBar></SearchBar>
        <h2>
        Ajouter une formations
        </h2>
        <div>
            <Button className="purple" value="Titre"></Button>
            <Button className="purple" value="Spécialité"></Button>

        </div>
       <div className="centre">
        <br></br>
        <div className="row">
            <div className="col-md-3"> 
               <Bloc value="Ajouter une vidéo"></Bloc>
            </div>
            <div className="col-md-3"> 
               <Bloc value="Ajouter un texte"></Bloc>
            </div>

        </div>
        <input
              type='button'
              value='Ajouter'
              className='boutton'
              onClick={() => {
               
              }}
            />
            </div>
          
        </>
    )}
    export default Ajouter;