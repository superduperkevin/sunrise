import React from 'react';

import '../styles/Slider.css';

export default class ImgComp extends React.Component {
    constructor(props) {
        super(props) 
        
        this.state = {
            src: this.props.src,
            review: this.props.review,
            author: this.props.author
        }
    }

    render() {
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
    </div>)
    }
}
