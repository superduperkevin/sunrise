import React, {useState} from 'react';

import ImgComp from './ImgComp';

import '../styles/Slider.css';

import image1 from '../assets/sewing.jpg';
import image2 from '../assets/sewing2.jpg';
import image3 from '../assets/sewing3.jpg';
import image4 from '../assets/sewing4.jpg';
import image5 from '../assets/sewing5.jpg';

import reviews from './Reviews';

function Slider() {

        // console.log(reviews.review1.author);

        let sliderArr = [<ImgComp src={image1} review={reviews.review1} author={reviews.review1.author}/>, <ImgComp src={image2} review={reviews.review2} author={reviews.review2.author}/>, <ImgComp src={image3} review={reviews.review3} author={reviews.review3.author}/>, <ImgComp src={image4} review={reviews.review4} author={reviews.review4.author}/>, <ImgComp src={image5} review={reviews.review5} author={reviews.review5.author}/>];
        const [x, setX] = useState(0)

        const goLeft = () => {
            x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
        }
    
        const goRight = () => {
            (x === -100 * (sliderArr.length -1)) ? setX(0) : setX(x - 100);
    
        }

        return(
            <div className="reviews">
                {sliderArr.map((item, index) => {
                    return(
                    <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}> 
                        {item}
                    </div>)
                })}
                <button id="goLeft" onClick={goLeft}><i className="material-icons">keyboard_arrow_left</i></button>
                <button id="goRight" onClick={goRight}><i className="material-icons">keyboard_arrow_right</i></button>
            </div>
        )
}

export default Slider;