import React from 'react';

import Map from './Map';

import '../styles/Direction.css';

export default class Direction extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="google-maps">
                    <Map/>
                </div>
            </div>
               
        )
    }
}