import React from "react";
import "./introduction.css";

function Intro (){
    return (
        <div className="introduction">
            <div className="whiteArea">
                <div className="roomImg2"></div>
                <div className="introText">
                    <h5 >THE CONVENIENT HOTEL</h5>
                    <h1 className="introTitle">Enjoy unforgettable</h1>
                    <h1 className="introTitle">experiences in our hotels</h1>
                    <div className="introDescription">
                        <p>
                            <span className="Rtext">R</span>isus consequat donec vel mi diam lobortis maximus laoreet nisi. 
                            Fames torquent neque duis pharetra urna per facilisis nunc cras blandit. 
                            Fermentum vitae mus neque metus quisque conubia elementum habitant nisi at. Proin aenean turpis
                        </p>
                        <p>
                            sapien himenaeos sollicitudin habitant hac. Lacinia ridiculus volutpat nisl nascetur curae ad taciti per sapien dolor. 
                            Eu posuere congue himenaeos luctus sagittis turpis senectus purus. 
                            Neque facilisi dignissim placerat suspendisse ac sit curae tortor vehicula.
                        </p>
                    </div>
                    <div className="otherDetails">
                        <div>Icon</div>
                        <div>
                            <h3>Reservation</h3>
                            <p>+6221-2002-2012</p>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Intro;