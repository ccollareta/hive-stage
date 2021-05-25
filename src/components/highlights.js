import React from 'react';
import circle from '../../node_modules/uswds/dist/img/circle-124.png';
import idea_bg from '../images/new/col-bg.jpg';
import idea from '../images/idea.png';
import idea_mob from '../images/new/feet-first.png';
import sect_9 from '../images/art4.png';
import sect_8 from '../images/section-art-8.png';
import multi_hex from '../images/multi-hex.svg';
import subhex from '../images/sub-hex.svg';
/*
  Use this section to highlight key elements of your site. Some sites will only have two while others may have six to eight. 
*/
const Highlights = () => (
<section className="hive-idea-section-2 animated-hex" style={{
        backgroundImage: `url(${idea_bg})`
    }}>
            <div className="inner-container">
                <div className="row">
                    <div className="col col-6 text">
                        <div className="section-head">
                            <div className="section-title">
                                <p className="sub-title text-orange-alt">Let’s make some honey</p>
                                <h2 className="title text-white">Have An Idea?</h2>
                            </div>
                        </div>
                        <div className="text-container">
                            <p>
                            Be a part of our community to help drive the direction of PEO DHMS in Federal Health IT. HIVE will be host to virtual events, news & announcements, resource libraries, community engagement portals, and other strategic communications.
                            </p>
                            <a className="btn rounded" href="/our-community"><span>Learn More</span></a>
                        </div>
                    </div>
                    <div className="col col-6 image">
                        <div className="hex-img">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="1043.739" height="964.99" viewBox="0 0 1043.739 964.99">
                                <defs>
                                    
                                    <linearGradient id="linear-gradient" y1="1" x2="1" y2="1"
                                        gradientUnits="objectBoundingBox">
                                        <stop offset="0" stopColor="#f15a29" />
                                        <stop offset="1" stopColor="#f7941d" />
                                    </linearGradient>
                                    <clipPath id="clip-path">
                                        <path className="cls-1"
                                            d="M612.315,651.091,766.79,384.59a76.676,76.676,0,0,0-.038-76.866L609.873,39.848A77.293,77.293,0,0,0,542.984,1.386L231.635,0a77.3,77.3,0,0,0-66.856,38.406L10.308,304.9a76.662,76.662,0,0,0,.041,76.862L167.228,649.648a77.3,77.3,0,0,0,66.891,38.467l311.35,1.378A77.3,77.3,0,0,0,612.315,651.091Z"
                                            transform="matrix(0.966, 0.259, -0.259, 0.966, 178.454, 0)" />
                                    </clipPath>
                                    <clipPath id="clip-path-2">
                                        <path className="cls-1"
                                            d="M491.718,522.857,615.769,308.844a61.574,61.574,0,0,0-.03-61.727L489.757,32A62.07,62.07,0,0,0,436.042,1.113L186.014,0a62.072,62.072,0,0,0-53.689,30.842L8.278,244.849a61.563,61.563,0,0,0,.033,61.724L134.292,521.7a62.076,62.076,0,0,0,53.717,30.891L438.038,553.7A62.073,62.073,0,0,0,491.718,522.857Z"
                                            transform="matrix(0.966, 0.259, -0.259, 0.966, 143.307, 0)" />
                                    </clipPath>
                                    <image id="image" width="1584.46" height="753.059"
                                        xlinkHref={idea_mob} />
                                </defs>
                                <g transform="translate(57.332 48.932)">
                                    <path className="cls-2"
                                        d="M690.042,721.8,864.127,426.359a83.808,83.808,0,0,0-.043-85.214L687.29,44.176A87.384,87.384,0,0,0,611.911,1.537L261.039,0A87.389,87.389,0,0,0,185.7,42.577L11.617,338.015a83.793,83.793,0,0,0,.046,85.21L188.456,720.2a87.392,87.392,0,0,0,75.382,42.644l350.872,1.528A87.391,87.391,0,0,0,690.042,721.8Z"
                                        transform="matrix(0.966, 0.259, -0.259, 0.966, 140.503, -48.932)" />
                                    <path className="cls-3"
                                        d="M612.315,651.091,766.79,384.59a76.676,76.676,0,0,0-.038-76.866L609.873,39.848A77.293,77.293,0,0,0,542.984,1.386L231.635,0a77.3,77.3,0,0,0-66.856,38.406L10.308,304.9a76.662,76.662,0,0,0,.041,76.862L167.228,649.648a77.3,77.3,0,0,0,66.891,38.467l311.35,1.378A77.3,77.3,0,0,0,612.315,651.091Z"
                                        transform="matrix(0.966, 0.259, -0.259, 0.966, 178.454, 0)" />
                                    <g className="cls-4" transform="translate(0.001 0)">
                                        <use transform="translate(-365.03 56.54)" xlinkHref="#image" />
                                    </g>
                                    <g className="cls-5" transform="translate(91.493 85.392)">
                                        <use transform="translate(-456.522 -28.851)" xlinkHref="#image" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
);

export default Highlights;
