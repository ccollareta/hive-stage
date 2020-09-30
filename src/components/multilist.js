import React from 'react';
import circle from '../../node_modules/uswds/dist/img/circle-124.png';
import idea_bg from '../images/idea-bg.png';
import idea from '../images/idea.png';
import idea_mob from '../images/idea-mobile.jpg';
import sect_3 from '../images/section-art-3.png';
import sect_8 from '../images/section-art-8.png';
import link_arrow from '../images/link-arrow.png';
import link_arrow_2 from '../images/link-arrow-2.png';
/*
  Use this section to highlight key elements of your site. Some sites will only have two while others may have six to eight. 
*/

const MultiList = () => (
    <section className="hive-multi-lists-section">
    <img className="section-art art-3" src={sect_3} />
    <div className="inner-container">
        <div className="section-head">
            <div className="section-title">
                <p className="sub-title text-orange-alt">NOW WITH A FULL DOSE OF VITAMIN BEE!</p>
                <h2 className="title">Popular innovation exchanges.</h2>
            </div>
        </div>
        <div className="row primary-row">
            <div className="col col-8">
                <div className="card-exchanges">
                    <div className="card">
                        <div className="row secondary-row">
                            <div className="col col-3">
                                <img src="dist/images/i1.png" alt="item1" />
                            </div>
                            <div className="col col-9">
                                <div className="card-body">
                                    <a href="#"><h4>Lorem ipsum dolor sit, tempor consectetur adipiscing elit</h4></a>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore.
                                    </p>
                                    <div className="post-details">
                                        <span className="author">Submitted by User Name</span>
                                        <span className="date">June 26, 2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="row secondary-row">
                            <div className="col col-3">
                                <img src="dist/images/i2.png" alt="item1" />
                            </div>
                            <div className="col col-9">
                                <div className="card-body">
                                    <a href="#"><h4>Lorem ipsum dolor sit, tempor consectetur adipiscing elit</h4></a>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore.
                                    </p>
                                    <div className="post-details">
                                        <span className="author">Submitted by User Name</span>
                                        <span className="date">June 26, 2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="row secondary-row">
                            <div className="col col-3">
                                <img src="dist/images/i3.png" alt="item1" />
                            </div>
                            <div className="col col-9">
                                <div className="card-body">
                                    <a href="#"><h4>Lorem ipsum dolor sit, tempor consectetur adipiscing elit</h4></a>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore.
                                    </p>
                                    <div className="post-details">
                                        <span className="author">Submitted by User Name</span>
                                        <span className="date">June 26, 2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="row secondary-row">
                            <div className="col col-3">
                                <img src="dist/images/i4.png" alt="item1" />
                            </div>
                            <div className="col col-9">
                                <div className="card-body">
                                    <a href="#"><h4>Lorem ipsum dolor sit, tempor consectetur adipiscing elit</h4></a>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore.
                                    </p>
                                    <div className="post-details">
                                        <span className="author">Submitted by User Name</span>
                                        <span className="date">June 26, 2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="row secondary-row">
                            <div className="col col-3">
                                <img src="dist/images/i5.png" alt="item1" />
                            </div>
                            <div className="col col-9">
                                <div className="card-body">
                                    <a href="#"><h4>Lorem ipsum dolor sit, tempor consectetur adipiscing elit</h4></a>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore.
                                    </p>
                                    <div className="post-details">
                                        <span className="author">Submitted by User Name</span>
                                        <span className="date">June 26, 2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="link">
                    <a href="#" className="font-exo text-dark">
                        See all exchanges <img src={link_arrow} />
                    </a>
                </div>
            </div>
            <div className="col col-4">
                <h4>Contracting opportunities.</h4>
                <div className="oppn-container">
                    <div className="oppn-item">
                        <a href="#"><h6>Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor</h6></a>
                        <div className="post-details">
                            <span className="author">Submitted by Organization</span>
                            <span className="date">June 26, 2020</span>
                        </div>
                    </div>
                    <div className="oppn-item">
                        <a href="#"><h6>Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor</h6></a>
                        <div className="post-details">
                            <span className="author">Submitted by Organization</span>
                            <span className="date">June 26, 2020</span>
                        </div>
                    </div>
                    <div className="oppn-item">
                        <a href="#"><h6>Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor</h6></a>
                        <div className="post-details">
                            <span className="author">Submitted by Organization</span>
                            <span className="date">June 26, 2020</span>
                        </div>
                    </div>
                    <div className="oppn-item">
                        <a href="#"><h6>Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor</h6></a>
                        <div className="post-details">
                            <span className="author">Submitted by Organization</span>
                            <span className="date">June 26, 2020</span>
                        </div>
                    </div>
                    <div className="oppn-item">
                        <a href="#"><h6>Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor</h6></a>
                        <div className="post-details">
                            <span className="author">Submitted by Organization</span>
                            <span className="date">June 26, 2020</span>
                        </div>
                    </div>
                    <div className="oppn-item">
                        <a href="#"><h6>Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor</h6></a>
                        <div className="post-details">
                            <span className="author">Submitted by Organization</span>
                            <span className="date">June 26, 2020</span>
                        </div>
                    </div>
                </div>
                <div className="link type-2">
                    <a href="#" className="font-exo text-dark">
                        LEARN MORE AT SAM.GOV <img src={link_arrow_2} />
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
);

export default MultiList;
