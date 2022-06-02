import React from "react";
import Bloc from "../Parametres/Bloc";
import SearchBar from "../../Components/SearchBar";

const VosFormationsFormateur = () => {
    return (
        <>
        <SearchBar></SearchBar>
        <h2 className="margin">
        Ajouter un cours
        </h2>
        <div>
            <input className="purple" placeholder="Titre"></input>
            <input className="purple" placeholder="Formation"></input>
        </div>
        <br></br>
        <div className="row centre">
            <div className="col-md-3">
                <p className="down">
                Ajouter formation
                </p>
                <Bloc i="far fa-plus-square icone"></Bloc>

            </div>
            <div className="col-md-3"> 
            <p className="down margin">
                Ajouter texte
                </p>
            <Bloc i="far fa-plus-square icone"></Bloc>

            </div>
           
        </div>
        <input
              type='button'
              value='Ajouter'
              className='ajout'
              onClick={() => {
               
              }}
            />
        </>
    )}
    export default VosFormationsFormateur;