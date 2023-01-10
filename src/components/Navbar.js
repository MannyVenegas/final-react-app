import React from 'react';
import logo from "../Logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="/"><img src={logo} alt="logo..." className="logo"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color:"black"}}/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Menu</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Reserve</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Order online</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Login</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;