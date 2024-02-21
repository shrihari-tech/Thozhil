import React from "react";
import "./Navbar.css";
function Navbar(){
    return(
        <div>
            <img src ="logo.png" alt="logo" className="navlogo"></img>
            <img src ="badges.png" alt="badges" className="badges"></img>
            <ul className="nav-list">
          <li className="nav-item">
            <a href="#Home" className="nav-button">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#Aboutus" className="nav-button">
              AboutUs
            </a>
          </li>
          <li className="nav-item">
            <a href="#Admissions" className="nav-button">
              Admissions
            </a>
          </li>
          <li className="nav-item">
            <a href="#Course" className="nav-button">
              Course
            </a>
          </li>
          <li className="nav-item">
            <a href="#Galary" className="nav-button">
              Galary
            </a>
          </li>
          <li className="nav-item">
            <a href="/BlogList" className="nav-button">
              ApplyOnline
            </a>
          </li>
        </ul>
        <img src="bg.png" alt="bg" className="bg"></img>
        </div>
    );
}

export default Navbar;