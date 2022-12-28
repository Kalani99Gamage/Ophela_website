import React from "react";
import './description.css';


function Description () {
    return(
        <div className="bgImage">
            <div className="description">
                <div className="text">
                    <h1 className="Title">Enjoy A Luxury </h1>
                    <h1 className="Title">Experience</h1>
                    <div className="sent">
                        <p className="sentence">Primis hac auctor curabitur consequat sociosqu massa</p> 
                        <p className="sentence">returm nascetur condimentum interdum ex.</p>
                    </div>
                    <button className="moreBtn">DISCOVER MORE</button>
                </div>
            </div>
            
            <div className="mainBox"> 
                <div className="whiteBox">
                    <div className="box">
                        <button className="boxBtn">Check In 05/11/2022</button>
                        <button className="boxBtn">Check Out 05/11/2022</button>
                        <button className="boxBtn">Guest</button>
                        <button className="checkBtn">CHECK AVAILABILITY</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description;