import React from 'react';

import Slider from './Slider';

import '../styles/Slider.css';

export default class Testimonials extends React.Component {
    render() {
        return( 
            <div className="container">
                    <Slider/>
            </div>
        )
    }
}