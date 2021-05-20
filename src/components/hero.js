import React from 'react';
import { Link } from 'gatsby';
import HEROData from '../../meta/hero.yml'
import Social from './social'
import down_arrow from '../images/down-arrow.png';
import hero_bg from '../images/new/hero-bg.png';
import art1 from '../images/new/art1.png'
import hex5 from '../images/new/hex-5.svg'
import hex4 from '../images/new/hex-4.svg'
import hex6 from '../images/new/hex-6.svg'


/*
  This will be displayed on the homepage. Ideally, you want to highlight key goals of the website
*/



const Hero = () => (
        <section className="hero-section-2 animated-hex" style={{
        backgroundImage: `url(${hero_bg})`
    }}>
            <img src={art1} className="art" />
            <div className="container">
                <img data-depth="0.05" src={hex5} className="hex-img img-1" />
                <img data-depth="0.05" src={hex6} className="hex-img img-2" />
                <img data-depth="0.05" src={hex4} className="hex-img img-3" />
                <div className="hero-action">
                    <div className="row">
                        <div className="col-5">
                            <h1 className="hero-title text-white">Welcome to the <span className="text-uppercase">HIVE</span>
                            </h1>
                            <p className="hero-subtitle text-white">Health Information Vision Exchange (HIVE) provides an
                                open and transparent communication platform for industry and government to innovate
                                around Federal Health IT together.</p>
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
