import React from "react";
import { NavLink } from 'react-router-dom';
import Image from '../logo.png';

function Navbar() {

    return (
        <nav>
            <div className="nav-left">
                <div className="logo">
                    <img src={Image} />
                </div>
                <ul className="nav-links">
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                    <NavLink to="/compare" activeClassName="active">Compare</NavLink>
                    <NavLink to="/timeline" activeClassName="active">Timeline</NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;