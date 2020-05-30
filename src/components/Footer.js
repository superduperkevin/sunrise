import React from 'react';

// import logo from '../assets/sunrise-logo.png';
import '../styles/Footer.css';

export default class Footer extends React.Component {
    render() {
        return( 
            <footer>
                {/* <div className="footer-logo">
                    <img src={logo} alt="logo"/>
                </div> */}
                <p>2020 &copy; Sunrise Tailors & Cleaners</p>
            </footer>
        )
    }
}