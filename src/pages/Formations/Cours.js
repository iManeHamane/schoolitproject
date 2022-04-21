import React  from 'react';
import './Cours.css';
const Cours = (props) => {
    
    return (
        
            <div id="conteneur" >
                <img id="back" src={props.photo} alt="background image" />  
                <img id="profil" src={props.profil} alt="profile" height="40px"/>
                <div className="top-left">{props.nom}</div>
                <div className="top-lef">{props.userName}</div>
                <div className="top-right" >{props.time}</div>
                <div onClick={()=>{props.setClicked(true)}} >
                    <div className="bottom-center">{props.title}</div>
                </div>
            </div>                
    
    )
}

export default Cours;