import React, { useState } from 'react';
import { Link, withPrefix, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import axios from 'axios';
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


        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        let separator = '/';

  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const pgVar = 'style-1';

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
   const [state, setValueState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    message: ""
  });

  const handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    setValueState({
        ...state,
      [name]: value,
    })
  };

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;

    setServerState({ submitting: true });
    axios.post({
      url: "https://api.smartsheetgov.com/2.0/sheets/5667866911905908/rows",
      data: {
        "toBottom": true,
        "cells": [
            {
                "columnId": 8331462521972612,
                "type": "DATETIME",
                "value": `${month<10?`0${month}`:`${month}`}${separator}${date}${separator}${year}`
            }
            ,{
            "columnId": 3339001127036804,
            "type": "TEXT_NUMBER",
            "value": "Contact Form Submission"
            },
            {
            "columnId": 7842600754407300,
            "type": "TEXT_NUMBER",
            "value": `${state.message}`
            },
            {
                "columnId": 1013113127495556,
                "type": "TEXT_NUMBER",
                "value": `${state.firstName} ${state.lastName}`
            },
            {
                "columnId": 5516712754866052,
                "type": "CONTACT_LIST",
                "value": `${state.email}`
            },
            {
                "columnId": 1454794679314308,
                "type": "PICKLIST",
                "value": "EXTERNAL"
            },
            {
                "columnId": 2213101220194180,
                "type": "PICKLIST",
                "value": "Other"
            },
            {
                "columnId": 3264912941180804,
                "type": "TEXT_NUMBER",
                "value": 'Other',
            }
            ]
          },
      headers: {
          'Content-Type': 'application/json',
            "Authorization": "Bearer uh619dbu94fzl5psuna1ujiuvn",
            'Access-Control-Allow-Origin': '*',
      },
    })
      .then(r => {
        console.log(r);
      })
      .catch(r => {
        console.log(r);
      });
  };



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
                                    <form className="form" onSubmit={handleOnSubmit}>
                                        <h2 className="text-center">Contact Us</h2>
                                        <div className="form-group">
                                            <label>What is your name?</label>
                                            <div className="row">
                                                <div className="col col-6">
                                                    <input type="text" className="form-control" name="firstName"
                                                        placeholder="First name" onChange={handleInputChange} value={state.firstName} />
                                                </div>
                                                <div className="col col-6">
                                                    <input type="text" className="form-control" name="lastName"
                                                        placeholder="Last name" onChange={handleInputChange} value={state.lastName} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>What is your email?</label>
                                            <input type="email" className="form-control" name="email"
                                                placeholder="Enter your email address"  onChange={handleInputChange} value={state.email}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Which best describes you?</label>
                                            <select name="role" className="form-control" onChange={handleInputChange} value={state.role}>
                                                <option>select</option>
                                                <option>op1</option>
                                                <option>op2</option>
                                                <option>op3</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>What can we help you with?</label>
                                            <textarea className="form-control" rows="8" name="message"
                                                placeholder="Let us know how we can help" onChange={handleInputChange} value={state.message}></textarea>
                                        </div>
                                        <label className="custom-checkbox">
                                            I consent to having this website store my submitted information so they can
                                            respond to my inquiry.*
                                            <input type="checkbox" defaultChecked onChange={handleInputChange} />
                                            <span className="checkmark"></span>
                                        </label>
                                        <div className="submit-btn text-center">
                                            <button type="submit" href="#" className="btn rounded" disabled={serverState.submitting}>Submit</button>
                                        </div>
                                        {serverState.status && (
                <p className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
                </p>
            )}
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
