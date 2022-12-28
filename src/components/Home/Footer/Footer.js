import React from "react";
import "./footer.css";
import hotelLogo from "../../../images/hotelLogo.png";

function Footer() {
    return(
    <div className="mainfooterdiv">
        <div className="footerbgImg">
            <div className="footerbgText">
                <h1 className="footerbgTitle">Spend your vacation luxuriously</h1>
                <p className="footerbgp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <h5>BOOK YOUR STAY NOW</h5>
                <h1>+6221-2002-2012</h1>
            </div>
        </div>
        <div className="subFootrediv">
            <div className="subdiv">
                <div className="footerSection">
                    <img className="footerLogo" src={hotelLogo} alt="hotel logo" />
                    <p className="footerTextP">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className="footerSection">
                    <div className="mainTitlediv">
                        <div className="subTitlediv"></div>
                        <h1 className="footerTitle">Hotel</h1>
                    </div>
                    <p className="footerTextP">About Us</p>
                    <p className="footerTextP">Our Services</p>
                    <p className="footerTextP">Get Directions</p>
                    <p className="footerTextP">Reviews</p>
                    <p className="footerTextP">Contact Us</p>
                </div>
                <div className="footerSection">
                    <div className="mainTitlediv">
                        <div className="subTitlediv"></div>
                        <h1 className="footerTitle">Help Center</h1>
                    </div>
                    <p className="footerTextP">Support</p>
                    <p className="footerTextP">FAQs</p>
                    <p className="footerTextP">Guest Feedback</p>
                    <p className="footerTextP">Offers</p>
                    <p className="footerTextP">Privacy Policy</p>
                </div>
                <div className="footerSection">
                    <div className="mainTitlediv">
                        <div className="subTitlediv"></div>
                        <h1 className="footerTitle">Reach Us</h1>
                    </div>
                    <p className="footerTextP">Jln Cempaka Wangi No 22, Jakarta - Indonesia</p>
                    <p className="footerTextP">+6221-2002-2012</p>
                    <p className="footerTextP">support@yourdomain.tld</p>
                </div>
            </div>
        </div>
        <hr/>
        <div className="subFooterdiv2">
            <p>Copyright © 2022 Ophelia, All rights reserved. Present by MoxCreative</p>
        </div>
    </div>
    )
}

export default Footer;