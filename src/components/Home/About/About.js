import React from "react";
import "./about.css";
import girl from "../../../images/girl.jpg";
import girl2 from "../../../images/girl2.jpg";
import boy from "../../../images/boy.jpg";

function About () {
    return(
        <React.Fragment>
            <div className="about_main">
                <div className="aboutStaff">
                    <img className="staffImg" src={girl} alt="staffImage" />
                    <div className="staffDecribe">
                        <h5>PROFESSIONAL STAFF</h5>
                        <h1 className="staffTitle">We give you everything right here, where you need it</h1>
                        <p className="aboutSentence">Egestas sapien commodo diam vestibulum sodales mi tempus. Inceptos sed quam diam dui pulvinar auctor. Lobortis tempus consectetuer maecenas ornare sollicitudin fames maximus sagittis condimentum. Lectus tellus dictum litora efficitur nam.</p>
                        <div className="subAbout">
                            <div className="rightPart">
                                <p className="aboutSentence">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                <button className="aboutStaffBtn">DESCOVER MORE</button>
                            </div>
                            <div><img  className="staffImg2" src={girl2} alt="staffImage2" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="valueDetail">
                <div className="values">
                    <div className="valueType">
                        <h5>OUR VALUE</h5>
                        <h1 className="valueTitle">Book direct our rooms and get more benefit</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <div className="subValueDiv">
                            <div>
                                <h3>Free Late Check-Out*</h3>
                                <h3>Best Rate Guarantee</h3>
                            </div>
                            <div>
                                <h3>Room Upgrade*</h3>
                                <h3>Ophelia Privilage</h3>
                            </div>
                        </div>
                        <button className="valueBtn">MORE INFO</button>
                    </div>
                    <img className="boyPic" src={boy} alt="staffPicture" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default About;