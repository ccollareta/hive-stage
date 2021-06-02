import React from 'react';

import hexa from '../images/new/li-hexa.svg';
import idea from '../images/new/AboutPage.jpg';
import colbg from '../images/col-bg.jpg'
import hex1 from '../images/new/hex-1.svg'
import hex2 from '../images/new/hex-2.svg'
import hex12 from '../images/new/hex-12.svg'
import herohex from '../images/hero-hex-3.svg'
/*
  Use this section to highlight key elements of your site. Some sites will only have two while others may have six to eight. 
*/

const HiveIdeas2 = () => (
    <section className="hive-ideas-2 style-2 animated-hex" style={{
        backgroundImage: `url(${colbg})`
        }}>
            
            <div className="inner-container">
                <div className="row">
                    <div className="col col-5 text">
                        <div className="section-head">
                            <div className="section-title">
                                <p className="sub-title text-orange">DON’T BEE AFRAID</p>
                                <h2 className="title">We Want To Hear From You!</h2>
                            </div>
                        </div>
                        <ul className="ideas-list list-unstyled">
                            <li>
                                <img src={hexa} />
                                <span>Be in the know with the latest news, opportunities, and upcoming events</span>
                            </li>
                            <li>
                                <img src={hexa} />
                                <span>Ask questions directly to government partners</span>
                            </li>
                            <li>
                                <img src={hexa} />
                                <span>Discuss articles, posts, and more</span>
                            </li>
                            <li>
                                <img src={hexa} />
                                <span>Talk, team, and ideate with industry partners</span>
                            </li>
                        </ul>
                        <a href="https://community.hive.gov" className="btn rounded"><span>Tap Into the Hive</span></a>
                    </div>
                    <div className="col col-7 image">
                    <img data-depth="0.05" src={hex1} className="hex-img img-1" />
                        <img data-depth="0.05" src={hex2} className="hex-img img-2" />
                        <img data-depth="0.05" src={hex12} className="hex-img img-3" />
                        <div className="hexagon-img">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                 viewBox="0 0 1043.739 964.99"  width="1043.739" height="964.99">
                                <defs>
                                    
                                    <linearGradient id="linear-gradient" y1="1" x2="1" y2="1"
                                        gradientUnits="objectBoundingBox">
                                        <stop offset="0" stopColor="#f15a29" />
                                        <stop offset="1" stopColor="#f7941d" />
                                    </linearGradient>
                                    <clipPath id="clip-path">
                                        <path className="clsh-1"
                                            d="M612.315,651.091,766.79,384.59a76.676,76.676,0,0,0-.038-76.866L609.873,39.848A77.293,77.293,0,0,0,542.984,1.386L231.635,0a77.3,77.3,0,0,0-66.856,38.406L10.308,304.9a76.662,76.662,0,0,0,.041,76.862L167.228,649.648a77.3,77.3,0,0,0,66.891,38.467l311.35,1.378A77.3,77.3,0,0,0,612.315,651.091Z"
                                            transform="matrix(0.966, 0.259, -0.259, 0.966, 178.454, 0)" />
                                    </clipPath>
                                    <clipPath id="clip-path-2">
                                        <path className="clsh-1"
                                            d="M491.718,522.857,615.769,308.844a61.574,61.574,0,0,0-.03-61.727L489.757,32A62.07,62.07,0,0,0,436.042,1.113L186.014,0a62.072,62.072,0,0,0-53.689,30.842L8.278,244.849a61.563,61.563,0,0,0,.033,61.724L134.292,521.7a62.076,62.076,0,0,0,53.717,30.891L438.038,553.7A62.073,62.073,0,0,0,491.718,522.857Z"
                                            transform="matrix(0.966, 0.259, -0.259, 0.966, 143.307, 0)" />
                                    </clipPath>
                                    <image id="images2" width="1584.46" height="753.059"
                                        xlinkHref={idea} />
                                </defs>
                                <g transform="translate(57.332 48.932)">
                                    <path className="clsh-2"
                                        d="M690.042,721.8,864.127,426.359a83.808,83.808,0,0,0-.043-85.214L687.29,44.176A87.384,87.384,0,0,0,611.911,1.537L261.039,0A87.389,87.389,0,0,0,185.7,42.577L11.617,338.015a83.793,83.793,0,0,0,.046,85.21L188.456,720.2a87.392,87.392,0,0,0,75.382,42.644l350.872,1.528A87.391,87.391,0,0,0,690.042,721.8Z"
                                        transform="matrix(0.966, 0.259, -0.259, 0.966, 140.503, -48.932)" />
                                    <path className="clsh-3"
                                        d="M612.315,651.091,766.79,384.59a76.676,76.676,0,0,0-.038-76.866L609.873,39.848A77.293,77.293,0,0,0,542.984,1.386L231.635,0a77.3,77.3,0,0,0-66.856,38.406L10.308,304.9a76.662,76.662,0,0,0,.041,76.862L167.228,649.648a77.3,77.3,0,0,0,66.891,38.467l311.35,1.378A77.3,77.3,0,0,0,612.315,651.091Z"
                                        transform="matrix(0.966, 0.259, -0.259, 0.966, 178.454, 0)" />
                                    <g className="clsh-4" transform="translate(0.001 0)">
                                        <use transform="translate(-365.03 56.54)" xlinkHref="#images2" />
                                    </g>
                                    <g className="clsh-5" transform="translate(91.493 85.392)">
                                        <use transform="translate(-456.522 -28.851)" xlinkHref="#images2" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
);

export default HiveIdeas2;
