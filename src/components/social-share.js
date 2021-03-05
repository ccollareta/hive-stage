import React from 'react';
import { Link } from 'gatsby';
import SocialData from '../../meta/social.yml'
import fb from '../images/fb.png';
import tw from '../images/twitter.png';
import li from '../images/li.png';
import ig from '../images/ig.png';

const SocialShare = () => (
  
    <ul className="social-icons">
                                <li>
                                    <a href="#">
                                        <img src={fb} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={li} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={tw} />
                                    </a>
                                </li>
                            </ul>
);

export default SocialShare;
