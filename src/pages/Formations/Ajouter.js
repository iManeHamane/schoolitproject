import React from "react";
import Bloc from "../Parametres/Bloc";
import "./Ajouter.css";

const Ajouter = () => {
    return (
        <>
        <h2 className="margint">
        Ajouter une formation
        </h2>
        <div className="centrer">
            <input className="purple" placeholder="Titre"></input>
            <input className="purple" placeholder="Spécialité"></input>

        </div>
        <h2 className="margin">
        Liste des cours
        </h2>
       <div >
        <br></br>
        <div className="row">
            <div className="col-md-2"> 
               <Bloc  ></Bloc>
            </div>
            <div className="col-md-2"> 
               <Bloc i="far fa-plus-square icone"></Bloc>
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