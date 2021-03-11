import { Link } from 'gatsby';
import React from 'react';
import logo from '../images/footer-logo.png';
import Social from './social'
import dhms from '../images/dhms.png';
import footer_hex from '../images/footer-hex.png';
import foo_hex_1 from '../images/foo-hex-1.svg';
import foo_hex_2 from '../images/foo-hex-2.svg';
import foo_hex_3 from '../images/foo-hex-3.svg';
import col_bg from '../images/col-bg.jpg';

const Footer = () => (
    <footer className="footer-2 animated-hex">
    <div className="footer-hex">
        <img src={footer_hex} className="big-hex-img" />
        <img data-depth="0.05" src={foo_hex_1} className="hex-img img-1" />
        <img data-depth="0.05" src={foo_hex_2} className="hex-img img-2" />
        <img data-depth="0.05" src={foo_hex_3} className="hex-img img-3" />
    </div>
    <div className="footer-inner" style={{
        backgroundImage: `url(${col_bg})` }}>
        <div className="container">
            <div className="footer-primary">
                <div className="footer-social">
                    <a href="index.html">
                        <img src={logo} className="logo" alt="logo" />
                    </a>
                   
                </div>
                <div className="footer-widgets">
                    <div className="row">
                        <div className="col col-2">
                            <h6 className="col-title">Useful Links</h6>
                            <ul className="list-unstyled">
                                <li><a href="/about">About PEO-DHMS</a></li>
                                <li><a href="#">Capabilities</a></li>
                                <li><a href="/overview">HIVE</a></li>
                                <li><a href="/contact-us">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col col-2">
                            <h6 className="col-title">Resources</h6>
                            <ul className="list-unstyled">
                                <li><a href="/news-events">News & Events</a></li>
                            </ul>
                        </div>
                        <div className="col col-2">
                            <h6 className="col-title">Contact Us</h6>
                            <ul className="list-unstyled">
                                <li><a href="mailto:info@hive.gov">info@hive.gov</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-secondary">
                <ul className="footer-links list-unstyled">
                    <li>© 2020 Hive. All Rights Reserved</li>
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                    <li><a href="#">Accessibility/508 Compliance</a></li>
                </ul>
                <ul className="footer-links list-unstyled">
                    <li><a href="https://www.foia.gov/">FOIA</a></li>
                    <li><a href="https://www.usa.gov/">USA.gov</a></li>
                    <li><a href="https://www.hhs.gov/">HHS.gov</a></li>
                    <li><a href="https://www.gsa.gov/">GSA.gov</a></li>
                </ul>
                <div className="address">
                    <img src={dhms} />
                    <p>
                        DHMS Address: <span>770 Arlington Boulevard, Suite 5101, Fall Church, VA 22042-5101</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</footer>
);

export default Footer;
