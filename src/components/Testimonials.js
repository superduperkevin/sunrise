import React from 'react';

import Slider from './Slider';

// import '../styles/Landing.css';

export default class Testimonials extends React.Component {
    render() {
        return( 
            <div className="container">
                <h1>Yelp Testimonials</h1>
                <div className="testimonials-content">
                    <Slider/>
                </div>
            </div>
        )
    }
}