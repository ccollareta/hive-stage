import React, { useState } from 'react';
import { Link, withPrefix, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ContactForm from '../components/contactform';
import Hero from '../components/hero';
import Tagline from '../components/tagline';
import Highlights from '../components/highlights';
import Slider from '../components/slider'
import FeatOpp from '../components/opp'
import li_hexa from '../images/li-hexa.png';
import hero_bg from '../images/col-bg.jpg';
import hero3 from '../images/hero-bg3.png';
import hero4 from '../images/hero-hex4.png';
import hex11 from '../images/hex-11.svg';
import hex12 from '../images/hex-12.svg';
import hex13 from '../images/hex-13.svg';
import art2 from '../images/art2.png';
import art5 from '../images/art5.png';
import HiveIdeas from '../components/hiveideas';

const ContactPage = ({data}) => {

        

  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const pgVar = 'style-2 animated-hex';




  return (
  <Layout pgVar={pgVar}>
    <SEO title="Contact" />
    <section className="hero-section-2 style-3 animated-hex"
            style={{
                '--bg-img': `url(${hero3})`,
                '--bg-img-mobile': `url(${hero_bg})`
            }}>
            <img src={art5} className="art art-1"/>
            <img src={art2} className="art art-2"/>
            <div className="hero-hex">
                <div data-depth="0.05" className="hexagon hex-img img-1"/>
                <div data-depth="0.05" className="hexagon hex-img img-2"/>
                <div data-depth="0.05" className="hexagon hex-img img-3"/>
                <img src={hero4}/>
            </div>
            <div className="container">
                <div className="hero-action">
                    <div className="row">
                        <div className="col-5">
                            <h1 className="hero-title"><span>Let's Chat!</span>
                            </h1>
                            <div className="contact-details">
                                <h4>We’re Looking For Your Innovative Ideas!</h4>
                                <ul className="list-unstyled">
                                    <li>
                                        <img src={li_hexa} />
                                        <span>{frontmatter.address}</span>
                                    </li>
                                    
                                    <li>
                                        <img src={li_hexa} />
                                        <a href={`mailto:${frontmatter.email}`} className="text-dark">{frontmatter.email}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <HiveIdeas />
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
