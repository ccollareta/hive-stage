import { Link } from 'gatsby';
import React from 'react';
import logo from '../images/new/logo.svg';
import Social from './social'
import dhms from '../images/new/PEO-DHMS-Logo.png';
import footer_hex from '../images/footer-hex.png';
import foo_hex_1 from '../images/foo-hex-1.svg';
import foo_hex_2 from '../images/foo-hex-2.svg';
import foo_hex_3 from '../images/foo-hex-3.svg';
import col_bg from '../images/col-bg.jpg';
import art7 from '../images/new/art7.png'


const Footer = () => (
    <footer className="footer">
            <div className="footer-primary">
                <div className="container">
                    <div className="primary-container">
                        <div className="row">
                        <img src={art7} className="art art-1" />
                            <div className="col col-5">
                                <div className="footer-social">
                                    <a href="/">
                                        <img src={logo} className="logo" alt="logo" />
                                    </a>
                                </div>
                                
                            </div>
                            <div className="col col-4">
                                <ul className="list-unstyled footer-menu">
                                    <li><a href="/peo-dhms">PEO DHMS</a></li>
                                    <li><a href="/news-events">News & Events</a></li>
                                    <li><a href="/opportunities">Opportunities</a></li>
                                    <li><a href="/our-community">Our Community</a></li>
                                    <li><a href="/about">About</a></li>
                                </ul>
                            </div>
                            <div className="col col-3">
                                <div className="footer-contact">
                                    <h5 className="mb-0">Connect With Us</h5>
                                    <a href="mailto:hive-team@groups.mobilize.io"
                                        className="email">hive-team@groups.mobilize.io</a>
                                    <a className="btn rounded" href="https://community.hive.gov"><span>JOIN OUR COMMUNITY</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-secondary">
                <div className="container">
                    <div className="secondary-container">
                        <ul className="footer-links list-unstyled">
                            <li>© {new Date().getFullYear()} Hive. All Rights Reserved</li>
                            <li><a href="/privacy-policy">Privacy Policy</a></li>
                        </ul>
                        <ul className="footer-links list-unstyled">
                            <li><a href="https://www.section508.gov/">Accessibility/508 Compliance</a></li>
                            <li><a href="https://www.foia.gov/">FOIA</a></li>
                            <li><a href="https://www.usa.gov/">USA.gov</a></li>
                            <li><a href="https://health.mil/">HEALTH.mil</a></li>
                            <li><a href="https://www.gsa.gov/">GSA.gov</a></li>
                        </ul>
                        <div className="address">
                            <img src={dhms} />
                            <p>
                                DHMS Address: <span>1700 N. Moore Street, Suite 2300 Rosslyn, VA 22209</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    
);

export default Footer;
