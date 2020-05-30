import React from 'react';
import { Link } from 'react-router-dom';


import logo from '../assets/sunrise-logo.png';
import '../styles/Header.css';

export default class Header extends React.Component {
    render() {
        return( 
            <header className="main-header">
                <nav className="nav">
                    <Link to={"/"}>
                    <div className="home-logo">
                    <img src={logo} alt="logo"/>
                    </div>
                    </Link>
                <ul>
                    {/* <Link to="/about" className="nav-links">About</Link> */}
                    <Link to="/testimonials" className="nav-links">Testimonials</Link>
                </ul>
                </nav>
            </header>
        )
    }
}