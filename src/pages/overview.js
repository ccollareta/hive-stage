import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Tagline from '../components/tagline';
import Highlights from '../components/highlights';
import Slider from '../components/slider'
import FeatOpp from '../components/opp'
import { Link, withPrefix } from 'gatsby';
import hero_bg from '../images/hero-bg-3.jpg';
import { Helmet } from 'react-helmet';
import link_arrow from '../images/link-arrow.png';
import conv from '../images/conv.png';
import art_1 from '../images/section-art-1.png';
import art_2 from '../images/section-art-2.png'


const OverviewPage = ({data}) => {
  const { markdownRemark } = data;
  const posts = data.abouts.frontmatter;
  const news = data.news.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/news/' + node.fields.name,
  }));
  const pgVar = 'style-3';
  return (
  <Layout pgVar={pgVar}>
    <SEO title="Overview" />
    <section className="hero-section style-3"
    style={{
        backgroundImage: `url(${posts.top_section.hero_image})`
      }}>
            <div className="container">
                <div className="hero-action">
                    <div className="row">
                        <div className="col-7">
                            <h2 className="hero-title text-white">{posts.top_section.title} </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="hive-conversation">
            <div className="inner-container">
                <div className="row">
                    <div className="col col-4">
                        <div className="col-item">
                            <img src="dist/images/c1.png" alt="img" />
                            <div className="col-content">
                                <h6>Explore Our Needs</h6>
                                <p>
                                    Lorem ipsum dolor sit amet, elit
                                    sed do eiusmod tempor incididunt
                                    ut labore et dolore .
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-4">
                        <div className="col-item">
                            <img src="dist/images/c2.png" alt="img" />
                            <div className="col-content">
                                <h6>Pitch Your Idea</h6>
                                <p>
                                    Lorem ipsum dolor sit amet, elit
                                    sed do eiusmod tempor incididunt
                                    ut labore et dolore .
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-4">
                        <div className="col-item">
                            <img src="dist/images/c3.png" alt="img" />
                            <div className="col-content">
                                <h6>Connect With Us</h6>
                                <p>
                                    Lorem ipsum dolor sit amet, elit
                                    sed do eiusmod tempor incididunt
                                    ut labore et dolore .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <h2>Join The Conversation</h2>
                <img src={conv} className="img-fluid" alt="img" />
            </div>
        </section>
        <section className="hive-3-col-section style-1">
            <img className="section-art art-1" src={art_1} />
            <img className="section-art art-2" src={art_2} />
            <div className="inner-container">
                <div className="section-head">
                    <div className="section-title">
                        <p className="sub-title text-orange">LOREM IPSUM DOLAR</p>
                        <h2 className="title text-white">Latest ideas.</h2>
                    </div>
                    <div className="link d-link">
                        <a href="#" className="font-exo text-white">View all <img src={link_arrow} /></a>
                    </div>
                </div>
                <div className="row ">
                    <div className="col col-4">
                        <div className="card">
                            <div className="img-hover">
                                <img src="dist/images/idea1.png" className="card-img" alt="item1" />
                            </div>
                            <div className="card-body">
                                <a href="javascript:void(0)">
                                    <h4 className="text-white">Lorem ipsum dolor sit ed amet, consectetur</h4>
                                </a>
                                <p className="text-white">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div className="post-details">
                                    <span className="author">Submitted by User Name</span>
                                    <span className="date">June 26, 2020</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-4">
                        <div className="card">
                            <div className="img-hover">
                                <img src="dist/images/idea2.png" className="card-img" alt="item2" />
                            </div>
                            <div className="card-body">
                                <a href="javascript:void(0)">
                                    <h4 className="text-white">Lorem ipsum dolor sit ed amet, consectetur</h4>
                                </a>
                                <p className="text-white">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div className="post-details">
                                    <span className="author">Submitted by User Name</span>
                                    <span className="date">June 26, 2020</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-4">
                        <div className="card">
                            <div className="img-hover">
                                <img src="dist/images/idea3.png" className="card-img" alt="item3" />
                            </div>
                            <div className="card-body">
                                <a href="javascript:void(0)">
                                    <h4 className="text-white">Lorem ipsum dolor sit ed amet, consectetur</h4>
                                </a>
                                <p className="text-white">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div className="post-details">
                                    <span className="author">Submitted by User Name</span>
                                    <span className="date">June 26, 2020</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="link m-link">
                    <a href="#" className="font-exo text-white">View all <img src={link_arrow} /></a>
                </div>
            </div>
        </section>
        <section className="hive-3-col-section style-2">
            <div className="inner-container">
                <div className="row ">
                    <div className="col col-4">
                        <div className="card">
                            <div className="img-hover">
                                <img src="dist/images/idea1.png" className="card-img" alt="item1" />
                            </div>
                            <div className="card-body">
                                <a href="javascript:void(0)">
                                    <h4>Lorem ipsum dolor sit ed amet, consectetur</h4>
                                </a>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div className="post-details">
                                    <span className="author">Submitted by User Name</span>
                                    <span className="date">June 26, 2020</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-4">
                        <div className="card">
                            <div className="img-hover">
                                <img src="dist/images/idea2.png" className="card-img" alt="item2" />
                            </div>
                            <div className="card-body">
                                <a href="javascript:void(0)">
                                    <h4>Lorem ipsum dolor sit ed amet, consectetur</h4>
                                </a>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div className="post-details">
                                    <span className="author">Submitted by User Name</span>
                                    <span className="date">June 26, 2020</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-4">
                        <div className="card">
                            <div className="img-hover">
                                <img src="dist/images/idea3.png" className="card-img" alt="item3" />
                            </div>
                            <div className="card-body">
                                <a href="javascript:void(0)">
                                    <h4>Lorem ipsum dolor sit ed amet, consectetur</h4>
                                </a>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div className="post-details">
                                    <span className="author">Submitted by User Name</span>
                                    <span className="date">June 26, 2020</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-4">
                        <div className="card">
                            <div className="img-hover">
                                <img src="dist/images/idea1.png" className="card-img" alt="item1" />
                            </div>
                            <div className="card-body">
                                <a href="javascript:void(0)">
                                    <h4>Lorem ipsum dolor sit ed amet, consectetur</h4>
                                </a>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div className="post-details">
                                    <span className="author">Submitted by User Name</span>
                                    <span className="date">June 26, 2020</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-4">
                        <div className="card">
                            <div className="img-hover">
                                <img src="dist/images/idea2.png" className="card-img" alt="item2" />
                            </div>
                            <div className="card-body">
                                <a href="javascript:void(0)">
                                    <h4>Lorem ipsum dolor sit ed amet, consectetur</h4>
                                </a>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div className="post-details">
                                    <span className="author">Submitted by User Name</span>
                                    <span className="date">June 26, 2020</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-4">
                        <div className="card">
                            <div className="img-hover">
                                <img src="dist/images/idea3.png" className="card-img" alt="item1" />
                            </div>
                            <div className="card-body">
                                <a href="javascript:void(0)">
                                    <h4>Lorem ipsum dolor sit ed amet, consectetur</h4>
                                </a>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div className="post-details">
                                    <span className="author">Submitted by User Name</span>
                                    <span className="date">June 26, 2020</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav>
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link current" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">4</a></li>
                        <li className="page-item"><a className="page-link" href="#">5</a></li>
                    </ul>
                </nav>
            </div>
        </section>
    <Highlights />
    <Tagline />
    
  </Layout>
);
    };
    export const pageQuery = graphql`
  query {
    abouts: markdownRemark(fileAbsolutePath: { regex: "./content/overview.md/" }) {
      html
      frontmatter {
        top_section{
            title
            hero_image
        }
        blocks{
            block{
                icon
                text
            }
        }
        }
      }
    news: allMarkdownRemark(
        filter: { fields: { sourceName: { eq: "blog-posts" } } }
        sort: { fields: frontmatter___date, order: ASC }
        limit: 5
      ) {
        edges {
          node {
            html
            frontmatter {
              author
              featured
              date
              title
              tags
              featured_image
              excerpt
            }
            fields {
              name
            }
          }
        }
      }
  }`
export default OverviewPage;
