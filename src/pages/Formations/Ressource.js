import React  from 'react';
import './Ressource.css';
import './Ajouter.css';
const Ressource = () => {
    
    return (
        <>
            <div className='row centre'>
                <div className='col-md-4'> 
                <input type="button" className='video' value="Vidéo"></input>
                </div>
                <div className='col-md-4'> 
                <input type="button" className='video' value="Texte"></input>
                </div>
            </div>
            <input className='purple' placeholder="Titre"/>
            <input className='purple' placeholder="Cours"/>
            <textarea className='purple2' placeholder="  Contenu..."/>
            <input
              type='button'
              value='Ajouter'
              className='ajout'
              onClick={() => {
               
              }}
            />



            </>

    )
}

export default Ressource;