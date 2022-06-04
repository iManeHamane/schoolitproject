import React  from 'react';
import './Introduction.css';
import './Ajouter.css';
const Introduction = ({titre,contenu}) => {
    
    return (
        <>
           <h2 className='titre'>{titre}</h2>
           <div className='purple3'><p>{contenu} </p></div>
            
            <input
              type='button'
              value="S'inscrire"
              className='inscrip '
              onClick={() => {
                
               
              }}
            />



            </>

    )
}

export default Introduction;