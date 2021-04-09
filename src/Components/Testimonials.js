import React from 'react';
import Card from './cards';
import './Styles/Testimonials.css'
import Slider from "react-slick";
import ReviewsList from "./Data/Reviews";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function createReview(Review)
{
    return <Card
        key={Review.id}
        name={Review.name}
        skill={Review.skill}
        src={Review.imgsrc}
    />
}

function Testimonial() {
    const config = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false
    };
    return (
        <div className="Testimonial">
            <div className="Heading pt-5">
                <h1>Kind words from our clients</h1>
                <p>What other people thought about the service provided by us</p>
            </div>
            <div className="container">
            <Slider {...config}>
                {ReviewsList.map(createReview)}
            </Slider>
            </div>
        </div>
    );
}

export default Testimonial;