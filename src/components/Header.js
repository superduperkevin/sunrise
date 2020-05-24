import React from 'react';

import logo from '../assets/sunrise-logo.png';
import '../styles/Header.css';

export default class Header extends React.Component {
    render() {
        return( 
            <header className="main-header">
                <nav className="nav">
                <div className="home-logo">
                    <img src={logo} alt="logo"></img>
                </div>
                <ul>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                </nav>
            </header>
        )
    }
}