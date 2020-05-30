import React from 'react';

import about from '../assets/about.jpg';
import '../styles/About.css';

export default class About extends React.Component {
    render() {
        return( 
            <div className="container">
                <h1>About</h1>
                <div className="about-content">
                    <div className="about-image">
                        <img src={about} alt="about"></img>
                    </div>
                    <div className="about-text">
                        <p>We provide non-toxic dry cleaning and alterations all done by our expert with 20 years of experience. We pay
attention to quality and detail to all and every work. All projects are welcome, big or small. We do FREE pick
up and delivery service</p>
                    </div>
                </div>

            </div>
        )
    }
}