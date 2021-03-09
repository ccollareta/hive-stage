import React from 'react';
import circle from '../../node_modules/uswds/dist/img/circle-124.png';
import idea_bg from '../images/idea-bg.jpg';
import idea from '../images/idea.png';
import idea_mob from '../images/idea-mobile.jpg';
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
    <img className="art" src={sect_9} />
    <div className="inner-container">
        <div className="row">
            <div className="col col-6 text">
                <div className="section-head">
                    <div className="section-title">
                        <p className="sub-title text-orange-alt">Let’s make some honey</p>
                        <h2 className="title">Have an idea?</h2>
                    </div>
                </div>
                <div className="text-container">
                    <p>We’re interested in ideas that don’t target one of our Areas of Interest. Use the ‘Other
                        AOI’ category to submit these types of ideas!</p>
                    <a className="btn rounded" href="#"><span>Get Started</span></a>
                    <div className="note">
                        <span>Please read <a href="#">participant qualifications</a>. Submitting ideas yields no
                            guarantee of response or future business.</span>
                    </div>
                </div>
            </div>
            <div className="col col-6 image">
                <div className="hex-img">
                <svg width="327.846" height="318.144" className="sub-hex" data-depth="0.05">
                                <defs>
                                    <linearGradient id="grad3" x1="0%" y1="100%" x2="0%" y2="0%">
                                        <stop offset="0%" style={{
                                            stopColor: 'rgb(226,210,198)',
                                            stopOpacity:1
                                            }} />
                                        <stop offset="80%" style={{
                                            stopColor:'rgb(255,255,254)',
                                            stopOpacity:1
                                            }} />
                                    </linearGradient>
                                </defs>
                                <style type="text/css">
                                    {`.st0 {
                                        fill: url(#grad3)
                                    }`}
                                </style>
                                <path class="st0"
                                    d="M152.2,37.7c6.5,3.7,10.5,10.7,10.5,18.2l0.1,69.5c0,7.5-4,14.5-10.5,18.2l-60.2,34.6c-6.5,3.7-14.5,3.7-21,0
									l-60.5-34.9c-6.5-3.7-10.5-10.7-10.5-18.2L0,55.7c0-7.5,4-14.5,10.5-18.2L70.8,2.8c6.5-3.7,14.5-3.7,21,0L152.2,37.7z" />
                            </svg>
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
