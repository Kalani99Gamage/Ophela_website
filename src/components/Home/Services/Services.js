import React from "react";
import "./services.css";
import call from "../../../images/call.png"
import cctv from "../../../images/cctv.png"
import laundry from "../../../images/laundry.png"
import wifi from "../../../images/wifi.png"

function Services () {
    return(
        <React.Fragment >
            <div className="servicesMain">
                <div className="services">
                    <h4 className="subType">SERVICES & AMENITIES</h4>
                    <h1 className='ServiceType'>Our Services & Amenities</h1>
                    <div className="serSentence">
                        <p className="serText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec </p>
                        <p className="serText">ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>  
                    <div>
                        <hr/> symbol <hr/>
                    </div>
                </div>      
            </div>
            
            <div className="amenitiesWrapper">
                <div className="amenities">
                    <div className="serviceCategories">
                        <img className="symbol" src={call} alt="phoneSymbol" />
                        <h3 className="ameniType">24 Hrs Room Service</h3>
                        <p className="amenitySentence">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar.</p>
                    </div>
                    <div className="serviceCategories">
                        <img className="symbol" src={laundry} alt="phoneSymbol" />
                        <h3 className="ameniType">Laundry Service</h3>
                        <p className="amenitySentence">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar.</p>
                    </div>
                    <div className="serviceCategories">
                        <img className="symbol" src={cctv} alt="phoneSymbol" />
                        <h3 className="ameniType"> Full WiFi Access</h3>
                        <p className="amenitySentence">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar.</p>
                    </div>
                    <div className="serviceCategories">
                        <img className="symbol" src={wifi} alt="phoneSymbol" />
                        <h3 className="ameniType">Hi-Class Security</h3>
                        <p className="amenitySentence">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar.</p>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default Services; 