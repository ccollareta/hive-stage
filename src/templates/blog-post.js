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
       <Helmet>
  <link rel="stylesheet" href={withPrefix('../../vendor/slick/slick.css')} />
  <link rel="stylesheet" href={withPrefix('../../vendor/lity/lity.min.css')} />
    <script src={withPrefix('../../scripts/jquery.min.js')} type="text/javascript" />
    <script src={withPrefix('../../vendor/slick/slick.min.js')} type="text/javascript"/>
    <script src={withPrefix('../../vendor/lity/lity.min.js')} type="text/javascript"/>
    <script src={withPrefix('../../vendor/isotope/isotope.pkgd.min.js')} type="text/javascript"/>
    <script src={withPrefix('../../scripts/custom.js')} type="text/javascript"/>
    <script src={withPrefix('../../scripts/isotope.js')} type="text/javascript"/>
  </Helmet>
      <SEO title={frontmatter.title} />
      <section className="hive-submission-details">
            <div className="inner-container">
                <div className="post-category-date">
                    <span className="category"><a href="#">{frontmatter.tags.join(' ')}</a></span>
                    <span className="date">{frontmatter.date}</span>
                </div>
                <h1>{frontmatter.title}</h1>
                <div className="author">
                    <img src={usr_img} alt="user" />
                    Submitted by &nbsp;<a href="#">{frontmatter.author}</a>
                </div>
                <img src={frontmatter.featured_image} className="img-fluid post-img" alt="img" />
                <div className="post-content">
                    <h2>{frontmatter.title}</h2>
                    <p className="pre-text">
                        {frontmatter.pre_text}
                    </p>
                    <p dangerouslySetInnerHTML={{ __html: html }} />
                    
                    <div className="comment-section">
                        <p className="comment-counts">
                            <span>15 Comments</span>
                            in {frontmatter.title}
                        </p>
                        <div className="comment-response">
                            <h4>Respond to this idea</h4>
                            <a href="#submit-response" className="btn rounded" data-lity>Submit Response</a>
                        </div>
                        <div className="sorting-selector">
                            Sort by
                            <select name="sorting" id="sorting">
                                <option value="oldest">Oldest</option>
                                <option value="newest">Newest</option>
                            </select>
                        </div>
                        <div className="comments">
                            <div className="comment-item">
                                <img src={usr_img} className="user-img" alt="user" />
                                <div className="comment-text">
                                    <span className="user">
                                        <a href="#">User Name</a>
                                        <span className="time">8 days ago</span>
                                    </span>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer
                                        quis. Iaculis urna id volutpat lacus laoreet. Mauris vitae ultricies leo integer
                                        malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus
                                        euismod. Dictum fusce ut placerat orci nulla. Tincidunt ornare massa eget
                                        egestas purus viverra accumsan in nisl. Tempor id eu nisl nunc mi ipsum
                                        faucibus. Fusce id velit ut tortor pretium. Massa ultricies mi quis hendrerit
                                        dolor magna eget. Nullam eget felis eget nunc lobortis. Faucibus ornare
                                        suspendisse sed nisi. Sagittis eu volutpat odio facilisis mauris sit amet massa.
                                        Erat velit scelerisque in dictum non consectetur a erat. Amet nulla facilisi
                                        morbi tempus iaculis urna.
                                    </p>
                                    <ul className="controls list-unstyled">
                                        <li className="vote">
                                            <a href="#"><img src={up_img} /></a>
                                            <a href="#"><img src={down_img} /></a>
                                        </li>
                                        <li><a href="#">Reply</a></li>
                                        <li><a href="#">Share</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="comment-item">
                                <img src={usr_img} className="user-img" alt="user" />
                                <div className="comment-text">
                                    <span className="user">
                                        <a href="#">User Name</a>
                                        <span className="time">8 days ago</span>
                                    </span>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer
                                        quis. Iaculis urna id volutpat lacus laoreet. Mauris vitae ultricies leo integer
                                        malesuada. Ac odio tempor orci dapibus ultrices in.
                                    </p>
                                    <img src={hne3} className="in-comment-img img-fluid" alt="img" />
                                    <ul className="controls list-unstyled">
                                        <li className="vote">
                                            <a href="#"><img src={up_img} /></a>
                                            <a href="#"><img src={down_img} /></a>
                                        </li>
                                        <li><a href="#">Reply</a></li>
                                        <li><a href="#">Share</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="comment-item">
                                <img src={usr_img} className="user-img" alt="user" />
                                <div className="comment-text">
                                    <span className="user">
                                        <a href="#">User Name</a>
                                        <span className="time">8 days ago</span>
                                    </span>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer
                                        quis. Iaculis urna id volutpat lacus laoreet. Mauris vitae ultricies leo integer
                                        malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus
                                        euismod. Dictum fusce ut placerat orci nulla. Tincidunt ornare massa eget
                                        egestas purus viverra accumsan in nisl. Tempor id eu nisl nunc mi ipsum
                                        faucibus. Fusce id velit ut tortor pretium. Massa ultricies mi quis hendrerit
                                        dolor magna eget. Nullam eget felis eget nunc lobortis. Faucibus ornare
                                        suspendisse sed nisi. Sagittis eu volutpat odio facilisis mauris sit amet massa.
                                        Erat velit scelerisque in dictum non consectetur a erat. Amet nulla facilisi
                                        morbi tempus iaculis urna.
                                    </p>
                                    <ul className="controls list-unstyled">
                                        <li className="vote">
                                            <a href="#"><img src={up_img} /></a>
                                            <a href="#"><img src={down_img} /></a>
                                        </li>
                                        <li><a href="#">Reply</a></li>
                                        <li><a href="#">Share</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
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
        sourceName: { eq: "blog-posts" }
        name: { eq: $name }
      }
    ) {
      html
      frontmatter {
        author
        date
        title
        tags
        featured_image
      }
    }
  }
`;

export default BlogPost;
