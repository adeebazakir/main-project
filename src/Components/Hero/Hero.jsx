// Hero.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Hero.css';
import hero_img1 from '../assets/carousal_img1.jpeg'; // Image 1
import hero_img2 from '../assets/carousal_img2.jpeg'; // Image 2
import hero_img3 from '../assets/carousal_img3.jpeg'; // Image 3
import hero_img4 from '../assets/carousal_img4.jpeg'; // Image 4

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000, // Adjust autoplay speed as needed
    };

    return (
        <div className="hero">
            <Slider {...settings}>
                {/* Slide 1 */}
                <div className="hero-slide">
                    <img className="hero-image" src={hero_img1} alt="" />
                </div>

                {/* Slide 2 */}
                <div className="hero-slide">
                    <img className="hero-image" src={hero_img2} alt="" />
                </div>

                {/* Slide 3 */}
                <div className="hero-slide">
                    <img className="hero-image" src={hero_img3} alt="" />
                </div>

                {/* Slide 4 */}
                <div className="hero-slide">
                    <img className="hero-image" src={hero_img4} alt="" />
                </div>
            </Slider>
        </div>
    );
};
console.log(hero_img1);
export default Hero;
