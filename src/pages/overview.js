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


const OverviewPage = ({data}) => {
  const { markdownRemark } = data;
  const posts = data.abouts.frontmatter;
  const news = data.news.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/news/' + node.fields.name,
  }));
  const ideas = data.ideas.edges.map(({ node }) => ({
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
        <h2>Join The Conversation</h2>
            <div className="inner-container">
            
                <div className="row">
                    {posts.blocks.slice(0, 3).map((block,index) => (
                        <div className="col col-4" key={index}>
                        <div className="col-item">
                            <img src={block.block.icon} alt="img" />
                            <div className="col-content">
                                <h6>{block.block.title}</h6>
                                <p>
                                    {block.block.text}
                                </p>
                                <div className="link"><a href={block.block.url}>Learn More <img src={link_arrow} /></a></div>
                            </div>
                        </div>
                    </div>
                    ))}
                    
                </div>
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
                    {ideas.map((idea,index)=> (
                        <div className="col col-4" key={index}>
                        <div className="card">
                            <div className="img-hover">
                                <img src={idea.event_image} className="card-img" alt="item1" />
                            </div>
                            <div className="card-body">
                                <a href={idea.url}>
                                    <h4 className="text-white">{idea.title}</h4>
                                </a>
                                <p className="text-white">
                                    {idea.description}
                                </p>
                                <div className="post-details">
                                    <span className="author">Submitted by {idea.author}</span>
                                    <span className="date">{idea.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="link m-link">
                    <a href="#" className="font-exo text-white">View all <img src={link_arrow} /></a>
                </div>
            </div>
        </section>
        <section className="hive-3-col-section style-2">
            <div className="inner-container">
                <div className="row ">
                        {news.map((post,index)=>(
                    <div className="col col-4">
                        <div className="card">
                            <div className="img-hover">
                                <img src={post.featured_image} className="card-img" alt="item1" />
                            </div>
                            <div className="card-body">
                                <a href={post.path}>
                                    <h4>{post.title}</h4>
                                </a>
                                <p>
                                    {post.excerpt}
                                </p>
                                <div className="post-details">
                                    <span className="author">Submitted by {post.author}</span>
                                    <span className="date">{post.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                        ))}
                    

                    
                </div>
                <nav>
                    <ul className="pagination">
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
                title
                url
            }
        }
        }
      }
    news: allMarkdownRemark(
        filter: { fields: { sourceName: { eq: "blog-posts" } } }
        sort: { fields: frontmatter___date, order: ASC }
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
        filter: { fields: { sourceName: { eq: "ideas" } } }
        sort: { fields: frontmatter___date, order: ASC }
        limit: 3
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
              event_image
              description
              url
            }
            fields {
              name
            }
          }
        }
      }
  }`
export default OverviewPage;
