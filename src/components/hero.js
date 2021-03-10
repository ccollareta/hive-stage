import React from 'react';
import { Link } from 'gatsby';
import HEROData from '../../meta/hero.yml'
import Social from './social'
import down_arrow from '../images/down-arrow.png';
import hero_bg from '../images/hero-bg.png';
import art1 from '../images/art1.png'
import hero_hex from '../images/hero-hex.png'
import hex1 from '../images/hero-hex-1.svg'
import hex2 from '../images/hero-hex-2.svg'
import hex3 from '../images/hero-hex-3.svg'


/*
  This will be displayed on the homepage. Ideally, you want to highlight key goals of the website
*/



const Hero = () => (
    <section className="hero-section-2 animated-hex" style={{
        backgroundImage: `url(${hero_bg})`
    }}>
    <img src={art1} className="art" />
    <img src={hero_hex} className="hero-hex" />
    <div className="container">
        <img data-depth="0.05" src={hex1} className="hex-img img-1" />
        <img data-depth="0.05" src={hex2} className="hex-img img-2" />
        
        <svg x="0px" y="0px" viewBox="0 0 189.2 210.4"
                    style={{
                        enableBackground: 'new 0 0 189.2 210.4'}}
                    data-depth="0.05" 
                    class="hex-img img-3">
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" style={{
                                stopColor:'rgb(114,152,214)',
                                stopOpacity:0.5}} />
                            <stop offset="100%" style={{
                                stopColor:'rgb(45,101,195)',
                                stopOpacity:0.5}} />
                        </linearGradient>
                    </defs>
                    <filter filterUnits="userSpaceOnUse" height="286.77" id="a" width="294.966" x="0" y="0">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur result="b" stdDeviation="3"></feGaussianBlur>
                        <feFlood floodOpacity="0.261"></feFlood>
                        <feComposite in2="b" operator="in"></feComposite>
                        <feComposite in="SourceGraphic" operator="over"></feComposite>
                    </filter>
                    <g transform="matrix(1, 0, 0, 1, 0, 0)" class="st0">
                        <path class="st1" d="M176.9,43.8c7.5,4.4,12.2,12.4,12.2,21.1l0.1,80.7c0,8.8-4.7,16.8-12.2,21.2l-70,40.3
						c-7.6,4.3-16.8,4.3-24.4,0l-70.3-40.6c-7.5-4.4-12.2-12.4-12.2-21.1L0,64.7C0,56,4.7,47.9,12.2,43.5l70-40.3
						c7.6-4.3,16.8-4.3,24.4,0L176.9,43.8z" />
                    </g>
                </svg>
        <div className="hero-action">
            <div className="row">
                <div className="col-6">
                    <h1 className="hero-title text-white">Welcome to the <span className="text-uppercase">HIVE</span>.
                    </h1>
                    <h6 className="hero-subtitle text-white">HEALTH INFORMATION VISION EXCHANGE</h6>
                    <div className="hero-ctas">
                        <a className="btn rounded" href={HEROData.hero_content.button_one.link}><span>{HEROData.hero_content.button_one.button_name}</span></a>
                        {HEROData.hero_content.button_two.button_name != ' ' && 
                        <a className="btn rounded outline" href={HEROData.hero_content.button_two.link}><span>{HEROData.hero_content.button_two.button_name}</span></a>
  }
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
);

export default Hero;
