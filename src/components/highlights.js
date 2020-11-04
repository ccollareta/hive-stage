import React from 'react';
import circle from '../../node_modules/uswds/dist/img/circle-124.png';
import idea_bg from '../images/idea-bg.png';
import idea from '../images/idea.png';
import idea_mob from '../images/hex-idea.jpg';
import sect_9 from '../images/section-art-9.png';
import sect_8 from '../images/section-art-8.png';
import multi_hex from '../images/multi-hex.svg';
/*
  Use this section to highlight key elements of your site. Some sites will only have two while others may have six to eight. 
*/

const Highlights = () => (
  <section className="hive-idea-section" 
  style={{
    background: `url(${idea_bg})`
  }}
>
            <div className="inner-container">
                <div className="row">
                    <div className="col col-5">
                        <div className="section-head">
                            <div className="section-title">
                                <p className="sub-title text-white">Let’s make some honey</p>
                                <h2 className="title text-white">Interested In Getting Involved?</h2>
                            </div>
                        </div>
                        <form className="idea-form">
                            <p className="text-white">
                            PEO DHMS is excited by the opportunity
to work together, bring about lasting
transformation in Healthcare IT, and elevate
the level of care we can provide to our
Nation’s service members, their families, and
Veterans.
                            </p>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Enter your email address" />
                                <a className="btn rounded" href="#">Join The Community</a>
                            </div>
                           
                        </form>
                    </div>
                    <div className="col col-7">
                        <img className="section-art art-1" src={sect_9} />
                        <img className="section-art art-2" src={sect_8} />
                        <div className="hex-img-container big-hex">
                            <img src={multi_hex} className="sub-hex" alt="img" />
                            <div className='hex main-hex'>
                                <div className='hex-inner'>
                                    <div className='hex-inner-inner'>
                                        <img className="hex-img" src={idea_mob} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
);

export default Highlights;
