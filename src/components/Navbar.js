import React from "react";
//import logo from "../logo.png";
//REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import Signin from "./Signin.js";



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container">

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={ faBars} style={{ color: "#fff" }}/>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          
          
          <li className="nav-item">
            <a className="nav-link" href="https://srit-self-assesment-dashboard.herokuapp.com" >Login</a>
          </li>
          
        </ul>
        
      </div>
    </div>
</nav>
    )
}

export default Navbar
