import React from "react";
import "./rooms.css";
import bRoom1 from "../../../images/bRoom1.jpg";
import bRoom2 from "../../../images/bRoom2.jpg";
import bRoom3 from "../../../images/bRoom3.jpg";

function Rooms () {
    return(
        <div className="roomContainer">
            <div className="room_description_container">
                <div className="room_description">
                    <div className="room_topic">
                        <h5>ROOMS & SUITES</h5>
                        <h1 className="topicH1">Style accompanied by comfort</h1>
                    </div>
                    <div className="room_sent">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <div>
                            <button className="view_bookBtn">VIEW ALL ROOM</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="room_images">
                <div className="image_box1">
                    <img className="rImage1" src={bRoom1} alt="room picture1" width={100}/>
                    <div className="room_details">
                        <div className="roomType">
                            <h2 className="typeH2">Superior</h2>
                            <p className="typeP">2 GUST(S)</p>
                        </div>
                        <button className="type_bookBtn">BOOK NOW</button>
                    </div>
                </div>
                <div className="image_box2">
                    <img className="rImage2" src={bRoom2} alt="room picture2" />
                    <div className="room_details">
                        <div className="roomType">
                            <h2 className="typeH2">Superior</h2>
                            <p className="typeP">2 GUST(S)</p>
                        </div>
                        <button className="type_bookBtn">BOOK NOW</button>
                    </div>
                </div>
                <div className="image_box3">
                    <img className="rImage3" src={bRoom3} alt="room picture3" />
                    <div className="room_details">
                        <div className="roomType">
                            <h2 className="typeH2">Superior</h2>
                            <p className="typeP">2 GUST(S)</p>
                        </div>
                        <button className="type_bookBtn">BOOK NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rooms;