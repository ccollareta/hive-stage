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
    <div className="comment-section">
                        <p className="comment-counts">
                            <span>15 Comments</span>
                            in {frontmatter.title}
                        </p>
                        <div className="comment-response">
                            <h4>Respond to this idea</h4>
                            <a href="#submit-response" className="btn rounded" data-lity>Submit Response</a>
                        </div>
                        <div className="sorting-selector">
                            Sort by
                            <select name="sorting" id="sorting">
                                <option value="oldest">Oldest</option>
                                <option value="newest">Newest</option>
                            </select>
                        </div>
                        <div className="comments">
                            <div className="comment-item">
                                <img src={usr_img} className="user-img" alt="user" />
                                <div className="comment-text">
                                    <span className="user">
                                        <a href="#">User Name</a>
                                        <span className="time">8 days ago</span>
                                    </span>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer
                                        quis. Iaculis urna id volutpat lacus laoreet. Mauris vitae ultricies leo integer
                                        malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus
                                        euismod. Dictum fusce ut placerat orci nulla. Tincidunt ornare massa eget
                                        egestas purus viverra accumsan in nisl. Tempor id eu nisl nunc mi ipsum
                                        faucibus. Fusce id velit ut tortor pretium. Massa ultricies mi quis hendrerit
                                        dolor magna eget. Nullam eget felis eget nunc lobortis. Faucibus ornare
                                        suspendisse sed nisi. Sagittis eu volutpat odio facilisis mauris sit amet massa.
                                        Erat velit scelerisque in dictum non consectetur a erat. Amet nulla facilisi
                                        morbi tempus iaculis urna.
                                    </p>
                                    <ul className="controls list-unstyled">
                                        <li className="vote">
                                            <a href="#"><img src={up_img} /></a>
                                            <a href="#"><img src={down_img} /></a>
                                        </li>
                                        <li><a href="#">Reply</a></li>
                                        <li><a href="#">Share</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="comment-item">
                                <img src={usr_img} className="user-img" alt="user" />
                                <div className="comment-text">
                                    <span className="user">
                                        <a href="#">User Name</a>
                                        <span className="time">8 days ago</span>
                                    </span>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer
                                        quis. Iaculis urna id volutpat lacus laoreet. Mauris vitae ultricies leo integer
                                        malesuada. Ac odio tempor orci dapibus ultrices in.
                                    </p>
                                    <img src={hne3} className="in-comment-img img-fluid" alt="img" />
                                    <ul className="controls list-unstyled">
                                        <li className="vote">
                                            <a href="#"><img src={up_img} /></a>
                                            <a href="#"><img src={down_img} /></a>
                                        </li>
                                        <li><a href="#">Reply</a></li>
                                        <li><a href="#">Share</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="comment-item">
                                <img src={usr_img} className="user-img" alt="user" />
                                <div className="comment-text">
                                    <span className="user">
                                        <a href="#">User Name</a>
                                        <span className="time">8 days ago</span>
                                    </span>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer
                                        quis. Iaculis urna id volutpat lacus laoreet. Mauris vitae ultricies leo integer
                                        malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus
                                        euismod. Dictum fusce ut placerat orci nulla. Tincidunt ornare massa eget
                                        egestas purus viverra accumsan in nisl. Tempor id eu nisl nunc mi ipsum
                                        faucibus. Fusce id velit ut tortor pretium. Massa ultricies mi quis hendrerit
                                        dolor magna eget. Nullam eget felis eget nunc lobortis. Faucibus ornare
                                        suspendisse sed nisi. Sagittis eu volutpat odio facilisis mauris sit amet massa.
                                        Erat velit scelerisque in dictum non consectetur a erat. Amet nulla facilisi
                                        morbi tempus iaculis urna.
                                    </p>
                                    <ul className="controls list-unstyled">
                                        <li className="vote">
                                            <a href="#"><img src={up_img} /></a>
                                            <a href="#"><img src={down_img} /></a>
                                        </li>
                                        <li><a href="#">Reply</a></li>
                                        <li><a href="#">Share</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
);

export default MultiList;
