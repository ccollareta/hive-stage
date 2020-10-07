import React from 'react';
import { Link } from 'gatsby';
import HEROData from '../../meta/hero.yml'
import Social from './social'
import down_arrow from '../images/down-arrow.png';


/*
  This will be displayed on the homepage. Ideally, you want to highlight key goals of the website
*/



const Hero = () => (
  <section className={"hero-section style-1"} 
  style={{
    background: `url(${HEROData.hero_content.hero_image})`
  }}>
    <div className="container">
                <div className="hero-action">
                    <h1 className="hero-title text-white">Welcome to the <span className="text-uppercase">HIVE</span>. </h1>
                    <h6 className="hero-subtitle text-white">The Health Information Vision Exchange.<br />{HEROData.hero_content.hero_text}</h6>
                    <div className="hero-ctas">
                        <a className="btn rounded" href={HEROData.hero_content.button_one.link}>
        {HEROData.hero_content.button_one.button_name}
        </a>    
          {HEROData.hero_content.button_two.button_name != ' ' && 
                        <a className="btn rounded outline" href={HEROData.hero_content.button_two.link}>
        {HEROData.hero_content.button_two.button_name}
        </a>
        }
                    </div>
                </div>
                {/* <div className="scroll-down">
                    <a id="go-down" href="#">
                        <img src={down_arrow} />
                    </a>
                </div> 
      <Social /> */}
            </div>
  </section>
);

export default Hero;
