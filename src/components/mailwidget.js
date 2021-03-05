// MailWidget.js
import React, { useState } from 'react';
import { Link } from 'gatsby';
import cmt from '../images/cmt.png';
import plus from '../images/plus.png';
import plussvg from '../images/plus.svg';

const MailWidget = () => (
    <div className="fabtn-container">
            <div className="fabtn" id="masterfabtn">
                <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
                    <defs>
                        <linearGradient id='g1'>
                            <stop stopColor='#F15A29' />
                            <stop offset='1' stopColor='#F7941D' />
                        </linearGradient>
                    </defs>
                    <path d='M27,7 
                           L72,7  Q76,7 78,11 
                           L95,46 Q97,50 95,54 
                           L78,91 Q76,95 72,95
                           L28,95 Q24,95 22,91
                           L5,54  Q3,50 5,46
                           L22,11 Q24,7 28,7z' vectorEffect='non-scaling-stroke' fill='url(#g1)' />
                </svg>
                <span><img src={plussvg} /></span>
            </div>
            <div className="backdrop"></div>
            <div className="fabtn child" data-subitem="1">
                <a href="/contact">
                    <div className="lable">Support</div>
                    <div className="icon"><img src={cmt} /></div>
                </a>
            </div>
            <div className="fabtn child" data-subitem="2">
                <a href="#submit-idea" data-lity>
                    <div className="lable">New Post</div>
                    <div className="icon"><img src={plus} /></div>
                </a>
            </div>
        </div>
  );
export default MailWidget;