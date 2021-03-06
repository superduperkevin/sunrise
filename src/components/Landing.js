import React from 'react';

import '../styles/Landing.css';

export default class Landing extends React.Component {
    render() {
        return( 
            <div className="container">
                    <div className="contact">
                        <ul>
                        <li className="promotion"><b>FREE PICKUP & DELIVERY</b></li>
                        <li className="name">Sunrise Tailors & Cleaners</li>
                        <li><i className="material-icons">store</i> <b>10160 San Pablo Ave, El Cerrito, CA 94530</b></li>
                        <li><i className="material-icons">call</i><b> (510) 559 - 9088</b></li>
                        </ul>
                        <ul>
                            <li className="business-hours"><b>Business Hours</b></li>
                            <li><b>Mon:</b> 10 am - 6:00 pm</li>
                            <li><b>Tue:</b> 10 am - 6:00 pm</li>
                            <li><b>Wed:</b> 10 am - 6:00 pm</li>
                            <li><b>Thu:</b> 10 am - 6:00 pm</li>
                            <li><b>Fri:</b> 10 am - 6:00 pm</li>
                            <li><b>Sat:</b> 10 am - 6:00 pm</li>
                            <li><b>Sun:</b> Closed</li>
                        </ul>
                    </div>
                    
            </div>
        )
    }
}