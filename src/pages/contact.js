import React from 'react';
import { Link, withPrefix, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Tagline from '../components/tagline';
import Highlights from '../components/highlights';
import Slider from '../components/slider'
import FeatOpp from '../components/opp'
import li_hexa from '../images/li-hexa.png';
import hero_bg from '../images/conntact-banner.jpg';

const ContactPage = ({data}) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const pgVar = 'style-1';
  return (
  <Layout pgVar={pgVar}>
    <SEO title="Contact" />
    <section className="contact-us-section">
            <div className="contact-hero"
            style={{
              backgroundImage: `url(${hero_bg})`
            }}>
                <div className="container">
                    <div className="contact-container">
                        <h1 className="text-white">Let’s chat.</h1>
                    </div>
                </div>
            </div>
            <div className="contact-form">
                <div className="container">
                    <div className="contact-container">
                        <div className="row">
                            <div className="col col-3">
                                <h4>We’re Looking For Your Innovative Ideas!</h4>
                                <ul className="list-unstyled contact-details">
                                    <li>
                                        <img src={li_hexa} />
                                        <span>{frontmatter.address}</span>
                                    </li>
                                    <li>
                                        <img src={li_hexa}/>
                                        <a href={`tel:${frontmatter.phone}`} className="text-dark">{frontmatter.phone}</a>
                                    </li>
                                    <li>
                                        <img src={li_hexa} />
                                        <a href={`mailto:${frontmatter.email}`} className="text-dark">{frontmatter.email}</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col col-7">
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
                                                    <input type="text" className="form-control" name="name"
                                                        placeholder="Last name" />
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
                                            <input type="checkbox" defaultChecked />
                                            <span className="checkmark"></span>
                                        </label>
                                        <div className="submit-btn text-center">
                                            <a href="#" className="btn rounded">Submit</a>
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
                </div>
            </div>
        </section>
        <Highlights />
        <Tagline />
  </Layout>
);
    };
    export const pageQuery = graphql`
  query ContactPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "./content/contact.md/" }) {
      html
      frontmatter {
        title
        address
        email
        phone
        }
      }
  }`
export default ContactPage;
