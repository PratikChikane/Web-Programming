import React from "react";
import { Link } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function Navbar(){
    return(
        <nav style={
            {background: '#333', padding: '1rem'}
        }>
            <Link to="/home" style={navStyle}>Home</Link>
            <Link to="/about" style={navStyle}>About</Link>
            <Link to="/contact" style={navStyle}>Contact</Link>
        </nav>
    );
}

const navStyle ={
    marginRight: '1rem',
    color: 'white',
    textDecoration: 'none'
}

export default Navbar;