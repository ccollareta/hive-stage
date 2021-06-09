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
import hover_icon from '../images/new/hover-icon.svg';
import art1 from '../images/new/art1.png'
import art5 from '../images/new/art5.png'
import art6 from '../images/new/art6.png'
import colbg from '../images/col-bg.jpg';
import hex5 from '../images/new/hex-5.svg'
import hex6 from '../images/new/hex-6.svg'
import hex4 from '../images/new/hex-4.svg'
import hex1 from '../images/new/hex-1.svg'
import hex2 from '../images/new/hex-2.svg'
import hex3 from '../images/new/hex-3.svg'
import hero_hex from '../images/new/hero-hex3.png'
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
    <SEO title="Our Community"
    image = {posts.top_section.hero_image}
    keywords="technology trends in healthcare (MSV 4,400)"
    description="The HIVE Community is a vibrant and resourceful place to make connections between and within the technology industry and Federal Health IT. Join us today." />
        <section className="hero-section-2 style-2 animated-hex" style={{
                backgroundImage: `url(${posts.top_section.hero_image})`
              }}>
            <img src={art1} className="art" />
            <div className="hero-hex">
                <img src={hero_hex} />
            </div>
            <div className="container">
                <img data-depth="0.05" src={hex5} className="hex-img img-1" />
                <img data-depth="0.05" src={hex6} className="hex-img img-2" />
                <img data-depth="0.05" src={hex4} className="hex-img img-3" />
                <div className="hero-action">
                    <div className="row">
                        <div className="col-7">
                            <h1 className="hero-title text-white">{posts.top_section.title}</h1>
                            <p className="hero-subtitle text-white">
                            {posts.top_section.text_block}
                            </p>
                            <div className="hero-ctas">
                                <a className="btn rounded" href={posts.top_section.button.button_link}><span>{posts.top_section.button.button_text}</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="hive-cards-section style-3">
            <img src={art6} className="art art-1" />
            <img src={art5} className="art art-2" />
            <div className="container">
                <div className="row">
                    <div className="col col-7">
                        <div className="section-head">
                            <div className="section-title">
                                <p className="sub-title text-blue">{posts.three_blocks.small_text}</p>
                                <h2 className="title">{posts.three_blocks.headline}</h2>
                            </div>
                        </div>
                        <p className="section-subhead">
                        {posts.three_blocks.description}
                        </p>
                    </div>
                </div>
                <div className="row cards-row">
                    <div className="col col-4">
                        <div className="card">
                            <img src={posts.three_blocks.block_one.icon} className="card-icon" />
                            <h4 className="card-title">{posts.three_blocks.block_one.title}</h4>
                            <p className="card-body">
                            {posts.three_blocks.block_one.description}
                            </p>
                        </div>
                    </div>
                    <div className="col col-4">
                        <div className="card">
                            <img src={posts.three_blocks.block_two.icon} className="card-icon" />
                            <h4 className="card-title">{posts.three_blocks.block_two.title}</h4>
                            <p className="card-body">
                            {posts.three_blocks.block_two.description}
                            </p>
                        </div>
                    </div>
                    <div className="col col-4">
                        <div className="card">
                            <img src={posts.three_blocks.block_three.icon} className="card-icon" />
                            <h4 className="card-title">{posts.three_blocks.block_three.title}</h4>
                            <p className="card-body">
                            {posts.three_blocks.block_three.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="hive-2-col-section animated-hex" style={{
          backgroundImage: `url(${colbg})`
          }}>
            <img data-depth="0.05" src={hex1} className="hex-img img-1" />
            <img data-depth="0.05" src={hex2} className="hex-img img-2" />
            <img data-depth="0.05" src={hex3} className="hex-img img-3" />
            <div className="inner-container">
                <div className="section-head">
                    <div className="section-title">
                        <p className="sub-title text-orange">The pollination platform</p>
                        <h2 className="title text-white">Join Our Network</h2>
                    </div>
                    <div className="link d-link" style={{
                      '--width' : '190.906px',
                    }}>
                        <a href="https://community.hive.gov" className="font-exo text-white">ENTER THE HIVE <img
                                src={link_arrow} /></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-6">
                        <div className="card">
                            <div className="card-img">
                                <img src={posts.com_blocks.block_one.icon} className="img-fluid" />
                                <a href={posts.com_blocks.block_one.link} className="card-overlay">
                                <img src={hover_icon} className="hover"/>
                                </a>
                            </div>
                            <div className="card-body">
                                <a href={posts.com_blocks.block_one.link}>
                                    <h4 className="text-white">{posts.com_blocks.block_one.title}</h4>
                                </a>
                                <p className="text-white">
                                {posts.com_blocks.block_one.description}
                                </p>
                                <div className="link">
                                    <a href={posts.com_blocks.block_one.link} className="font-exo text-white">
                                        Learn More <img src={link_arrow} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-6">
                        <div className="card">
                            <div className="card-img">
                                <img src={posts.com_blocks.block_two.icon} className="img-fluid" />
                                <a href={posts.com_blocks.block_two.link} className="card-overlay">
                                    <img src={hover_icon} className="hover"/>
                                </a>
                            </div>
                            <div className="card-body">
                                <a href={posts.com_blocks.block_two.link}>
                                    <h4 className="text-white">{posts.com_blocks.block_two.title}</h4>
                                </a>
                                <p className="text-white">
                                {posts.com_blocks.block_two.description}
                                </p>
                                <div className="link">
                                    <a href={posts.com_blocks.block_two.link} className="font-exo text-white">
                                        Learn More <img src={link_arrow} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="link m-link">
                    <a href="https://community.hive.gov" className="btn rounded"><span>ENTER THE HIVE</span></a>
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
            text_block
            button{
                button_text
                button_link
            }
        }
        three_blocks {
          description
          headline
          small_text
          block_one {
            description
            icon
      
            title
          }
          block_three {
            description
            icon
            
            title
          }
          block_two {
            description
            icon
            title
            
          }
        }
        com_blocks {
          
          block_one {
            description
            icon
            link
            title
          }
          block_two {
            description
            icon
            title
            link
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
              thumbnail
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
            thumbnail
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
