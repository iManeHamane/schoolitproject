import React from 'react';
import './UnCours.css';
const UnCours = () => {
  return (
    <>
    <div className="container">
        <h1 className="text-left" style={{paddingTop: "2%" }}>
          Course-Simple Swift App
        </h1>

        <div>
            <div>
                <iframe className="video" width="730" height="390" src="https://www.youtube.com/embed/Xde7ns5w9LM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
           
        </div>

        <div>
            <img id="profile" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="profile" height="70" width="60"/>
            <div className="textee">Lesson 6 - Implement Navigation</div>
            <div className="texte2" >@prof2</div>
            <i className="like far fa-thumbs-up ">58</i>
            <i className="dislike far fa-thumbs-down ">6</i>
            <i className="fal fa-share-alt"></i>
        </div>
        <div>
            <p>
                <br></br>
                
                In this lesson, you use navigation controllers and segues to create the navigation flow <br></br>of the FoodTracker app. At the end of the lesson, you'll have a complete navigation <br></br>scheme and interaction flow for the app.
                <br></br>
                <br></br>
            </p>
        </div>

    </div>   
    </>
    
  )
}
export default UnCours;