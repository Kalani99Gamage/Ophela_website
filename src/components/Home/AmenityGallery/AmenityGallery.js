import React from "react";
import "./amenityGallery.css"
import ameni1 from "../../../images/ameni1.jpg"
import ameni2 from "../../../images/ameni2.jpg"
import ameni3 from "../../../images/ameni3.jpg"

function Amenity () {
    return(
        <div className="galleryMain">
            <div className="mainPart">
                <div className="galleryRow">
                    <div className="picDescribe">
                        <h2 className="picTitle">Huge Lobby</h2>
                        <p>Nullam si fames porttitor rhoncus imperdiet dictumst maecenas. Urna rutrum venenatis auctor class amet iaculis per tempor condimentum eleifend.</p>
                        <button className="picBtn">READ MORE</button>
                    </div>
                    <div>
                        <img className="amenityImage" src={ameni1} alt="lobbyPicture" />
                    </div>
                </div>
            </div>
            <div className="mainPart">
                <div className="galleryRow">
                    <div>
                        <img className="amenityImage" src={ameni2} alt="roomPicture" />
                    </div>
                    <div className="picDescribe">
                        <h2 className="picTitle">Swimming Pool</h2>
                        <p>Nullam si fames porttitor rhoncus imperdiet dictumst maecenas. Urna rutrum venenatis auctor class amet iaculis per tempor condimentum eleifend.</p>
                        <button className="picBtn">READ MORE</button>
                    </div>
                </div>
            </div>
            <div className="mainPart">
                <div className="galleryRow">
                    <div className="picDescribe">
                        <h2 className="picTitle">Cafe & Bar</h2>
                        <p>Nullam si fames porttitor rhoncus imperdiet dictumst maecenas. Urna rutrum venenatis auctor class amet iaculis per tempor condimentum eleifend.</p>
                        <button className="picBtn">READ MORE</button>
                    </div>
                    <div>
                        <img className="amenityImage" src={ameni3} alt="roomPicture" />
                    </div>
                </div>
            </div>
            <button className="picMoreBtn">DISCOVER MORE</button>
        </div>
    )
}

export default Amenity;