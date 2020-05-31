import React from 'react';

import '../styles/Slider.css';
// import Reviews from './Reviews';

// function ImgComp( {src}, {review} ) {
//     console.log(review);
   
    
// }

export default class ImgComp extends React.Component {
    constructor(props) {
        super(props) 
        
        this.state = {
            src: this.props.src,
            review: this.props.review,
            author: this.props.author
        }
        // console.log(this.review);
    }

    render() {
        // let src = this.state.src;
        const author = this.state.author;
        const {paragraph1, paragraph2, paragraph3, paragraph4} = this.state.review;
        return (
    <div className="slider-item">
        <div className="slider-text">
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>
            <p>{paragraph3}</p>
            <p>{paragraph4}</p>
            <p className="author"> - {author}</p>
        </div>
        {/* <img src={src} alt="slide-img"></img> */}
    </div>)
    }
}
