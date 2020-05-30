import React from 'react';

import Map from './Map';

import '../styles/Landing.css';

export default class Landing extends React.Component {
    render() {
        return( 
            <div className="container">
                <h1>Location & Info</h1>
                <div className="landing-content">
                    <div className="google-maps">
                        <Map/>
                    </div>
                    <div className="contact">
                        <ul>
                            <li className="name">Sunrise Tailors & Cleaners</li>
                            <li className="promotion"><span><b>FREE PICKUP & DELIVERY</b></span></li>
                        <li><i className="material-icons">store</i> <b>10160 San Pablo Ave, El Cerrito, CA 94530</b></li>
                        <li><i className="material-icons">call</i><b> (510) 559 - 9088</b></li>
                            {/* <li><i className="material-icons">email</i> <b> amarbayar888@yahoo.com</b></li> */}
                        </ul>
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
                </div>
                <h3>We provide non-toxic dry cleaning and alterations all done by our expert with 20 years of experience. <br/>We pay attention to quality and detail to all and every work. All projects are welcome, big or small.</h3>
            </div>
        )
    }
}