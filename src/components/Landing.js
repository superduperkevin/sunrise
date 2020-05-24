import React from 'react';

import '../styles/Landing.css';

export default class Landing extends React.Component {
    render() {
        return( 
            <div className="container">
                <h1>Location & Hours</h1>

                <div className="landing-content">
                    <div className="google-maps">
                        <p>This is where the google maps will be</p>
                    </div>
                    <div className="hours">
                        <ul>
                            <li><b>Monday:</b> 10 am - 6:00 pm</li>
                            <li><b>Tuesday:</b> 10 am - 6:00 pm</li>
                            <li><b>Wednesday:</b> 10 am - 6:00 pm</li>
                            <li><b>Thursday:</b> 10 am - 6:00 pm</li>
                            <li><b>Friday:</b> 10 am - 6:00 pm</li>
                            <li><b>Saturday:</b> 10 am - 6:00 pm</li>
                            <li><b>Sunday:</b> Closed</li>
                        </ul>
                    </div>
                    <div className="contact">
                        <ul>
                            <li>Phone Number: (510) 559 - 9088</li>
                            <li>Email: amarbayar888@yahoo.com</li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}