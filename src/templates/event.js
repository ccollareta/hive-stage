import React from 'react';
import { graphql, Link, withPrefix } from 'gatsby';
import { Helmet } from 'react-helmet';


import Layout from '../components/layout';
import SEO from '../components/seo';
import usr_img from '../images/user.jpg';
import up_img from '../images/up.png';
import down_img from '../images/down.png';
import hne3 from '../images/hne-3.png';

/*
  This is used in blog posts. The index page can be found at src/pages/blog.js
*/

const BlogPost = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const pgVar = 'style-3';
  return (
    <Layout pgVar={pgVar}>
      <SEO title={frontmatter.title} />
      <section className="hive-submission-details">
            <div className="inner-container">
                <div className="post-category-date">
                    
                    <span className="date">{frontmatter.event_date}</span>
                </div>
                <h1>{frontmatter.title}</h1>
                <div className="author">
                    <img src={usr_img} alt="user" />
                    Submitted by &nbsp;<a href="#">{frontmatter.author}</a>
                </div>
                <img src={frontmatter.event_image} className="img-fluid post-img" alt="img" />
                <div className="post-content">
                    <h2>{frontmatter.title}</h2>
                    <p className="pre-text">
                        {frontmatter.pre_text}
                    </p>
                    <p dangerouslySetInnerHTML={{ __html: html }} />
                </div>
            </div>
        </section>
        <div className="form-card card-popup lity-hide" id="submit-response">
        <form className="form">
            <h2 className="text-center">Submit A Response</h2>
            <div className="form-group">
                <label>What is your name?</label>
                <div className="row">
                    <div className="col col-6">
                        <input type="text" className="form-control" name="name" placeholder="First name" />
                    </div>
                    <div className="col col-6">
                        <input type="text" className="form-control" name="name" placeholder="Last name" />
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label>What is your email?</label>
                <input type="email" className="form-control" name="email" placeholder="Enter your email address" />
            </div>
            <div className="form-group">
                <label>What is your response?</label>
                <textarea className="form-control" rows="5" placeholder="Let us know how we can help"></textarea>
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
            <p className="terms text-center">
                By submitting this form, you accept our <a href="#" className="text-underline">Terms of
                    Use</a> and <a href="#" className="text-underline">Privacy Policy.</a>
            </p>
        </form>
    </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($name: String!) {
    markdownRemark(
      fields: {
        sourceName: { eq: "events" }
        name: { eq: $name }
      }
    ) {
      html
      frontmatter {
        author
        event_date
        title
        event_image
      }
    }
  }
`;

export default BlogPost;
