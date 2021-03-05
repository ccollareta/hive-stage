import React from 'react';
import sect_1 from '../images/section-art-1.png';
import sect_6 from '../images/section-art-6.png';
import hexa from '../images/li-hexa.png';
import idea from '../images/hex-idea-2.jpg';
import multi_hex from '../images/multi-hex.svg';
/*
  Use this section to highlight key elements of your site. Some sites will only have two while others may have six to eight. 
*/

const HiveIdeas = () => (
    <section className="hive-ideas">
    <img className="section-art art-1" src={sect_1} />
    <img className="section-art art-2" src={sect_6} />
    <div className="inner-container">
        <div className="row">
            <div className="col col-5">
                <div className="section-head">
                    <div className="section-title">
                        <p className="sub-title text-orange">DON’T BEE AFRAID</p>
                        <h2 className="title text-white">We’re Looking For Your Innovative Ideas!</h2>
                    </div>
                </div>
                <ul className="ideas-list list-unstyled">
                    <li>
                        <img src={hexa} />
                        <span>Lorem ipsum dolor sit amet, consectetur </span>
                    </li>
                    <li>
                        <img src={hexa} />
                        <span>Lorem ipsum dolor sit amet, consectetur </span>
                    </li>
                    <li>
                        <img src={hexa} />
                        <span>Lorem ipsum dolor sit amet, consectetur </span>
                    </li>
                    <li>
                        <img src={hexa} />
                        <span>Lorem ipsum dolor sit amet, consectetur </span>
                    </li>
                </ul>
                <a href="#" className="btn rounded">Tap Into the Hive</a>
            </div>
            <div className="col col-7">
            <div className="hex-img-container big-hex">
                            <img src={multi_hex} className="sub-hex" alt="img" />
                            <div className='hex main-hex'>
                                <div className='hex-inner'>
                                    <div className='hex-inner-inner'>
                                        <img className="hex-img" src={idea} />
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
        </div>
    </div>
</section>
);

export default HiveIdeas;
