import React from 'react';
import { Link } from 'gatsby';
import SocialData from '../../meta/social.yml'
import fb from '../images/fb.png';
import tw from '../images/twitter.png';
import li from '../images/li.png';
import ig from '../images/ig.png';

const SocialShare = ({url,title}) => (
    <>
    
    <ul className="social-icons">
    <span><strong>Share:</strong> </span>
                                <li>
                                    <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
                                        <img src={fb} />
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`}>
                                        <img src={li} />
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href={`https://twitter.com/intent/tweet/?text=${title}&url=${url}`}>
                                        <img src={tw} />
                                    </a>
                                </li>
                            </ul>
                            </>
);

export default SocialShare;
