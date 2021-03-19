import React from 'react';
import { Link } from 'gatsby';
import HEROData from '../../meta/hero.yml'
import Social from './social'
import down_arrow from '../images/down-arrow.png';
import hero_bg from '../images/Hero_BG_Hex.png';
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
