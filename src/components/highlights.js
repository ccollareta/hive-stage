import React from 'react';
import circle from '../../node_modules/uswds/dist/img/circle-124.png';
import idea_bg from '../images/new/col-bg.jpg';
import idea from '../images/idea.png';
import idea_mob from '../images/new/idea-mobile.jpg';
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
                                <h2 className="title text-white">Have an idea?</h2>
                            </div>
                        </div>
                        <div className="text-container">
                            <p>
                                Be a part of our community to help drive the direction of PEO DHMS in Federal Health IT.
                                HIVE will be host to virtual events, news & announcements, resource libraries, community
                                engagement portals, and other strategic communications.
                            </p>
                            <a className="btn rounded" href="#"><span>Learn More</span></a>
                        </div>
                    </div>
                    <div className="col col-6 image">
                        <div className="hex-img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="327.846" height="318.144"
                                viewBox="0 0 327.846 318.144">
                                <defs>
                                    <mask id="msk1">
                                        <path className="a" transform="translate(50 50) rotate(15 130.5 20.5)"
                                            d="M172.871,0a28.906,28.906,0,0,1,25.009,14.412L245.805,97.1a28.906,28.906,0,0,1,0,28.989L197.88,208.784A28.906,28.906,0,0,1,172.871,223.2H76.831a28.906,28.906,0,0,1-25.009-14.412L3.9,126.092A28.906,28.906,0,0,1,3.9,97.1L51.821,14.412A28.906,28.906,0,0,1,76.831,0Z" />
                                    </mask>
                                </defs>
                                <image mask="url(#msk1)" height="100%" width="100%"
                                    xlinkHref={idea_mob} preserveAspectRatio="xMidYMin slice">
                                </image>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
);

export default Highlights;
