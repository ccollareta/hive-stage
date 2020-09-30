import { Link } from 'gatsby';
import React from 'react';
import logo from '../images/logo.png';
import Social from './social'
import dhms from '../images/dhms.png';

const Footer = () => (
  <footer className="footer">
            <div className="container">
                <div className="footer-primary">
                    <div className="footer-social">
                        <Link to="/">
                            <img src={logo} className="logo" alt="logo" />
                        </Link>
                        <Social />
                    </div>
                    <div className="footer-widgets">
                        <div className="row">
                            <div className="col col-3">
                                <h6>Useful Links</h6>
                                <ul className="list-unstyled">
                                    <li><a href="/about/">About PEO-DHMS</a></li>
                                    <li><a href="#">Capabilities</a></li>
                                    <li><a href="#">HIVE</a></li>
                                    <li><a href="/contact/">Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="col col-3">
                                <h6>Resources</h6>
                                <ul className="list-unstyled">
                                    <li><a href="/news-events/">News & Events</a></li>
                                    <li><a href="/resource-library/">Resource Library</a></li>
                                </ul>
                            </div>
                            <div className="col col-6">
                                <h6>Stay Up To Date</h6>
                                <form className="footer-form">
                                    <p>Receive the latest updates from Hive in your inbox</p>
                                    <input type="text" className="form-control" placeholder="Enter your email address" />
                                    <a className="btn rounded" href="#">Get Started</a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-secondary">
                    <ul className="footer-links list-unstyled">
                        <li>© 2020 Hive. All Rights Reserved</li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                    <ul className="footer-links list-unstyled">
                        <li><a href="#">Accessibility/508 Compliance</a></li>
                        <li><a href="#">FOIA</a></li>
                        <li><a href="#">USA.gov</a></li>
                        <li><a href="#">HHS.gov</a></li>
                        <li><a href="#">GSA.gov</a></li>
                    </ul>
                    <div className="address">
                        <img src={dhms} />
                        <p>
                            DHMS Address: <span>770 Arlington Boulevard, Suite 5101, Fall Church, VA 22042-5101</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
);

export default Footer;
