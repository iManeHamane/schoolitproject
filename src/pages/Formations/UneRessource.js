import React from 'react';
import './UneRessource.css';


const UneRessource = () => {
  return (
    <>
    <br></br>
    <h1>Ajouter une ressource</h1>
    <br></br>

    <div>
        <button className="btn1">Video</button>
        <button className="btn2">Texte</button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </div>


    <div className="parent ">

        <div className="left" >
            <button className="btn11"> <i class="fas fa-upload fa-2x"></i></button>
            <div className="text1">Video</div>
            <button className="btn21"><i class="fas fa-upload fa-2x"></i></button>
            <div className="text1" margin-bottom="100px">Miniature</div>
        </div>

        <div className="right" >
          <input className="zone1" type="text" placeholder="Titre" color="white">
          </input>
          <input className="zone2" type="text" placeholder="Cours" color="white"></input>
          <input className="zone3" type="text" placeholder="Description" color="white"></input>
        </div>


    </div>
    <button className="btn31" >Ajouter</button>



    <div>
        
    </div>

    </>
    
  )
}
export default UneRessource;