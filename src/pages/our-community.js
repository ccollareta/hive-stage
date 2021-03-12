import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Tagline from '../components/tagline';
import Highlights from '../components/highlights';
import Slider from '../components/slider'
import FeatOpp from '../components/opp'
import { Link, withPrefix, graphql } from 'gatsby';
import hero_bg from '../images/hero-bg-3.jpg';
import { Helmet } from 'react-helmet';
import link_arrow from '../images/link-arrow.png';
import conv from '../images/conv.png';
import art_1 from '../images/section-art-1.png';
import art_2 from '../images/section-art-2.png'
import c1 from '../images/c1.png';
import c2 from '../images/c2.png';
import c3 from '../images/c3.png';
import idea_1 from '../images/idea1.png';
import idea_2 from '../images/idea2.png';
import idea_3 from '../images/idea3.png';
import hex_2 from '../images/Join-The-Conversation-lowpoly_v2.png'
import hex_3 from '../images/hero-hex-3.svg'
import art1 from '../images/art1.png'
import art5 from '../images/art5.png'
import colbg from '../images/col-bg.jpg';
import hex1 from '../images/hex-1.svg'
import hex2 from '../images/hex-2.svg'
import hex3 from '../images/hex-3.svg'
import art2 from '../images/art2.png'
import art3 from '../images/art3.png'


const OverviewPage = ({data}) => {
  const { markdownRemark } = data;
  const posts = data.abouts.frontmatter;
  const news = data.news.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/opportunity/' + node.fields.name,
  }));
  
  const ideas = data.ideas.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/opportunity/' + node.fields.name,
  }));
  const pgVar = 'style-1 animated-hex';
  return (
  <Layout pgVar={pgVar}>
    <SEO title="Our Community" />
<section className="hero-section-2 style-2 title-only animated-hex"
            style={{
                backgroundImage: `url(${posts.top_section.hero_image})`
              }}>
            <img src={art1} className="art" />
            <div className="hero-hex">
                <img data-depth="0.05" src={hex_3} className="hex-img" />
                <img src={hex_2} />
            </div>
            <div className="container">
                <div className="hero-action">
                    <div className="row">
                        <div className="col-6">
                            <h1 className="hero-title text-white"><span>{posts.top_section.title}</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="hive-slider-section">
            <img src={art5} className="art" />
            <div className="inner-container">
                <div className="slider-container">
                    <div className="feature-slider">
                    {posts.blocks.slice(0, 3).map((block,index) => (
                        <div className="feature-item" key={index}>
                            <div className="row">
                                <div className="col-6 text">
                                    <div className="section-head">
                                        <div className="section-title">
                                            <p className="sub-title text-orange-alt">{block.block.subtitle}</p>
                                            <h2 className="title text-white"><a href={block.block.url} className="text-dark">{block.block.title}</a></h2>
                                        </div>
                                    </div>
                                    <p>
                                        {block.block.text}
                                    </p>
                                    <a href={block.block.url} className="btn rounded"><span>Read More</span></a>
                                </div>
                                <div className="col-6 image">
                                    <img src={block.block.icon} className="img-fluid" alt="img" />
                                </div>
                            </div>
                        </div>
                         ))}
                    </div>
                </div>
            </div>
        </section>
        <section className="hive-3-col-section-2 animated-hex" style={{
          backgroundImage: `url(${colbg})`
          }}>
            <img data-depth="0.05" src={hex1} className="hex-img img-1" />
            <img data-depth="0.05" src={hex2} className="hex-img img-2" />
            <img data-depth="0.05" src={hex3} className="hex-img img-3" />
            <div className="inner-container">
                <div className="section-head">
                    <div className="section-title">
                        <p className="sub-title text-orange">The pollination platform</p>
                        <h2 className="title text-white">HIVE Opportunity buzz.</h2>
                    </div>
                    <div className="link d-link">
                        <a href="/opportunities" className="font-exo text-white">See all opportunities <img
                                src={link_arrow} /></a>
                    </div>
                </div>
                <div className="row ">
                {ideas.map(feat => (
      <div key={feat.title} className="col col-4">
        <FeatOpp title={feat.title}
        description = {feat.excerpt}
        author = {feat.author}
        date = {feat.date}
        thumbnail = {feat.featured_image}
        link = {feat.path}/>
      </div>
    )) }
                    
                </div>
                <div className="link m-link">
                    <a href="/opportunities" className="font-exo text-white">See all opportunities <img
                            src={link_arrow} /></a>
                </div>
            </div>
        </section>
    
    
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
                subtitle
                title
                url
            }
        }
        }
      }
    news: allMarkdownRemark(
        filter: { fields: { sourceName: { eq: "opps" } } }
        sort: { fields: frontmatter___date, order: DESC }
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
      ideas: allMarkdownRemark(
        filter: { fields: { sourceName: { eq: "opps" } } }
        sort: { fields: frontmatter___date, order: DESC }
        limit: 3
      ) {
        edges {
          node {
            html
            frontmatter {
              author
            date
            title
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
