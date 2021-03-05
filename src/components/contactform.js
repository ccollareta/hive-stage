import { Link } from 'gatsby';
import React from 'react';


const ContactForm = () => (
    <section className="contact-section">
            <div className="inner-container">
                <div className="row">
                    <div className="col-8">
                        <div className="form-card">
                            <form className="form">
                                <h2 className="text-center">Contact Us</h2>
                                <div className="form-group">
                                    <label>What is your name?</label>
                                    <div className="row">
                                        <div className="col col-6">
                                            <input type="text" className="form-control" name="name"
                                                placeholder="First name" />
                                        </div>
                                        <div className="col col-6">
                                            <input type="text" className="form-control" name="name" placeholder="Last name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>What is your email?</label>
                                    <input type="email" className="form-control" name="email"
                                        placeholder="Enter your email address" />
                                </div>
                                <div className="form-group">
                                    <label>Which best describes you?</label>
                                    <select name="role" className="form-control">
                                        <option>select</option>
                                        <option>op1</option>
                                        <option>op2</option>
                                        <option>op3</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>What can we help you with?</label>
                                    <textarea className="form-control" rows="8"
                                        placeholder="Let us know how we can help"></textarea>
                                </div>
                                <label className="custom-checkbox">
                                    I consent to having this website store my submitted information so they can
                                    respond to my inquiry.*
                                    <input type="checkbox" checked="checked" />
                                    <span className="checkmark"></span>
                                </label>
                                <div className="submit-btn text-center">
                                    <a href="#" className="btn rounded"><span>Submit</span></a>
                                </div>
                            </form>
                        </div>
                        <p className="terms text-center">
                            By submitting this form, you accept our <a href="#" className="text-underline">Terms of
                                Use</a> and <a href="#" className="text-underline">Privacy Policy.</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
);

export default ContactForm;
