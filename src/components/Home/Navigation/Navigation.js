import React, { useState } from 'react'
import './navigation.css';
import hotelLogo from '../../../images/hotelLogo.png'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import MenuIcon from '@mui/icons-material/Menu';

function Navigation() {
  const [show, setShow] = useState(false);

    return(
        <div className='mainNav'>
            <div className="navBar">
                <div className="hotelLogo"><img src={hotelLogo} alt='comma'/></div>
                <label onClick={() => setShow(!show)} htmlFor="check" className="checkbtn">
                    <p>MENU</p>
                </label>
                <div className="navList">
                    <ul>
                        <li className="home"> HOMEPAGE </li>
                        <li className="about">  ABOUT US </li>
                        <li className="rooms"> ROOMS </li>
                        <li className="amenities"> AMENITIES </li>
                        <li className="booking"> BOOKING </li>
                        <li className="pages"> PAGES </li>
                    </ul>
                </div>
                <div className='signIn'>
                    {/* <AccountCircleIcon/> */}
                    <p className="signbtn">Sign In</p>
                </div>
                <div className="btnDiv"><button className="bookNowbtn">BOOK NOW !</button></div>
                {show &&
                <div className='dropdownlist'>

                <div className='liItems'>
                    <ul className='dropdown'>
                        <li className="home"> HOMEPAGE </li>
                        <li className="about">  ABOUT US </li>
                        <li className="rooms"> ROOMS </li>
                        <li className="amenities"> AMENITIES </li>
                        <li className="booking"> BOOKING </li>
                        <li className="pages"> PAGES </li>
                    </ul>
                </div>

                </div>}
            </div>
        </div>
    )
}

export default Navigation;