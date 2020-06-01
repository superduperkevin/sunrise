import React from 'react';
import { Link } from 'react-router-dom';


import logo from '../assets/sunrise-logo.png';
import '../styles/Header.css';

export default class Header extends React.Component {
    render() {
        return( 
            <header className="main-header">
                <nav className="nav">
                    <div className="top-nav">
                        <p>We provide non-toxic dry cleaning and alterations all done by our expert with 20 years of experience. </p>
                            <div>
                            <Link to={"/"}>
                            <div className="home-logo">
                                <img src={logo} alt="logo"/>
                            </div>
                            </Link>
                            <h1 className="title">SUNRISE</h1>
                            </div>
                            
                        <p>We pay attention to quality and detail to all and every work. All projects are welcome, big or small.</p>
                    </div>
                    <ul className="bottom-nav">
                        <Link to="/" className="nav-links">HOME</Link>
                        <Link to="/directions" className="nav-links">DIRECTIONS</Link>
                        <Link to="/reviews" className="nav-links">REVIEWS</Link>
                    </ul>
                </nav>
            </header>
        )
    }
}