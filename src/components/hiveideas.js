import React from 'react';

import hexa from '../images/li-hexa.png';
import idea from '../images/idea4.jpg';
import colbg from '../images/col-bg.jpg'
import hex1 from '../images/hex-1.svg'
import hex2 from '../images/hex-2.svg'
import herohex from '../images/hero-hex-3.svg'
/*
  Use this section to highlight key elements of your site. Some sites will only have two while others may have six to eight. 
*/

const HiveIdeas = () => (
    <section className="hive-ideas-2 animated-hex" style={{
        backgroundImage: `url(${colbg})`
    }}>
            
            <div className="inner-container">
                <div className="row">
                    <div className="col col-5">
                        <div className="section-head">
                            <div className="section-title">
                                <p className="sub-title text-orange">DON’T BEE AFRAID</p>
                                <h2 className="title text-white">We Want to Hear from You!</h2>
                            </div>
                        </div>
                        <ul className="ideas-list list-unstyled">
                            <li>
                                <img src={hexa} />
                                <span>Be in the know with the latest news, content, and upcoming events</span>
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
                        <a href="https://hivegov.mobilize.io/main/groups/43511/lounge" target="_blank" className="btn rounded"><span>Tap Into the Hive</span></a>
                    </div>
                    <div className="col col-7">
                        <div className="hexagon-img">
                            <div data-depth="0.05"  className=" hexagon sub-hex" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="327.846" height="318.144"
                                viewBox="0 0 327.846 318.144">
                                <defs>
                                    <mask id="msk1">
                                        <path className="a" transform="translate(50 50) rotate(15 130.5 20.5)"
                                            d="M172.871,0a28.906,28.906,0,0,1,25.009,14.412L245.805,97.1a28.906,28.906,0,0,1,0,28.989L197.88,208.784A28.906,28.906,0,0,1,172.871,223.2H76.831a28.906,28.906,0,0,1-25.009-14.412L3.9,126.092A28.906,28.906,0,0,1,3.9,97.1L51.821,14.412A28.906,28.906,0,0,1,76.831,0Z" />
                                    </mask>
                                </defs>
                                <image mask="url(#msk1)" height="100%" width="100%" xlinkHref={idea}
                                    preserveAspectRatio="xMidYMin slice">
                                </image>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
);

export default HiveIdeas;
