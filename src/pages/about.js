import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Tagline from '../components/tagline';
import HiveIdeas from '../components/hiveideas';

import { Link, withPrefix, graphql } from 'gatsby';

import { Helmet } from 'react-helmet';
import link_arrow from '../images/link-arrow.png';

import art_5 from '../images/art5.png';
import art2 from '../images/art2.png';


import art1 from '../images/art1.png'
import hex2 from '../images/4-hands-lowpoly_v3.png'
import hex3 from '../images/hero-hex-3.svg'
import c1 from '../images/peo-dhms.png';
import c2 from '../images/c2.png';
import c3 from '../images/c3.png';
import c4 from '../images/c4.png';
import c5 from '../images/c5.png';
import c6 from '../images/c6.png';
import hovericon from '../images/hover-icon.svg'
import arrow_r from '../images/arrow-r.svg'


const AboutPage = ({data}) => {
  const { markdownRemark } = data;
  const posts = data.abouts.frontmatter;
  const news = data.news.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/news/' + node.fields.name,
  }));
  const events = data.events.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/event/' + node.fields.name,
  }));

  const test = news.concat(events);
  test.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const pgVar = 'style-1 animated-hex';
  return (
  <Layout pgVar={pgVar}>
    <SEO title="About Us" />
    
        <section className="hero-section-2 style-2 animated-hex" style={{
    backgroundImage: `url(${posts.top_section.hero_image})`
  }}>
            <img src={art1} className="art" />
            <div className="hero-hex">
                <div data-depth="0.05"  className="hexagon hex-img" />
                <img src={hex2} />
               
            </div>
            <div className="container">
                <div className="hero-action">
                    <div className="row">
                        <div className="col-6">
                            <h1 className="hero-title small text-white">{posts.top_section.title}</h1>
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
        <section className="hive-info-2" id="about-hive">
            <div className="inner-container">
                <div className="section-head">
                    <div className="section-title">
                        <p className="sub-title text-orange-alt">WE’RE BUZZING WITH INFORMATION</p>
                        <h2 className="title">What is HIVE?</h2>
                    </div>
                    <div className="link d-link">
                        <a href="/opportunities" className="font-exo text-dark">View opportunities <img
                                src={link_arrow} /></a>
                    </div>
                </div>
                <div className="row">
                {posts.blocks.map(block => (
          <div className="col col-3" key={block.block.icon}>
          <div className="info">
              <img src={block.block.icon} alt="info1" />
              <p>
              {block.block.text}
              </p>
          </div>
      </div>
          ))}
                    
                </div>
                <div className="link m-link">
                    <a href="/opportunities" className="font-exo text-dark">View opportunities <img src={link_arrow} /></a>
                </div>
            </div>
        </section>
        <section className="hive-partners-2">
            <img src={art_5} className="art" />
            <div className="inner-container">
                <div className="row">
                    <div className="col col-9 text-center">
                        <div className="section-head">
                            <div className="section-title">
                                <p className="sub-title text-orange-alt">WE’RE PART OF A GREATER COLONY</p>
                                <h2 className="title">Streamlining Federal Health IT</h2>
                            </div>
                        </div>
                        <p>
                            Bridging the gap between Federal Health IT organizations is key to bringing together the
                            entire community and providing the best solutions for Federal Healthcare. HIVE works with
                            government partners across the Federal landscape.
                        </p>
                    </div>
                    <div className="col col-12">
                        <div className="img-container logos">
                            <a href="https://www.health.mil/About-MHS/OASDHA/Defense-Health-Agency/Defense-Healthcare-Management-SystemsSeal"><img src={c1} /></a>
                            <a href="https://health.mil/About-MHS/OASDHA/Defense-Health-Agency"><img src={c2} /></a>
                            <a href="https://www.va.gov/"><img src={c3} /></a>
                            <a href="https://www.defense.gov/"><img src={c4} /></a>
                            <a href="https://www.health.mil/Military-Health-Topics/Technology/Military-Electronic-Health-Record"><img src={c5} /></a>
                            <a href="https://www.hhs.gov/"><img src={c6} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <section className="hive-news-events-2">
            <img src={art2} className="art" />
            <div className="inner-container">
                <div className="section-head">
                    <div className="section-title">
                        <p className="sub-title text-orange-alt">Whats the buzz?</p>
                        <h2 className="title">News & Upcoming Events</h2>
                    </div>
                    <div className="link d-link">
                        <a href="/news-events" className="font-exo text-dark">View all <img src={link_arrow} /></a>
                    </div>
                </div>
                <div className="row">
                {test.slice(0,1).map((post,index) => (
            <div className={`col col-6 ${index}`} key={`First${index}`}>
                        <div className="ne-card main" style={{
                            backgroundImage: `url(${post.thumbnail})`
                            }}>
                            <h3 className="text-white">{post.title} <img src={arrow_r} /></h3>
                            <a href={post.path} className="ne-overlay">
                                <img src={hovericon} />
                            </a>
                        </div>
                    </div>
))}

            <div className="col col-6">
                <div className="row">
                {test.slice(1,4).map((post,index) => (
                    <>
             {index == 0 &&
             <>
             <div className={`col col-12 ${index}`} key={`Second${index}`}>
             <div className="ne-card fixed-h" style={{
                 backgroundImage: `url(${post.thumbnail})`
                 }}>
                 <h3 className="text-white">{post.title}</h3>
                 <a href={post.path} className="ne-overlay">
                     <img src={hovericon} />
                 </a>
             </div>
            </div>
            </>
             }
             {index == 1 &&
                <div className={`col col-6  ${index}`} key={`Third${index}`}>
                                <div className="ne-card fixed-h" style={{
                 backgroundImage: `url(${post.thumbnail})`
                 }}>
                                    <h3 className="text-white">{post.title}</h3>
                                    <a href={post.path} className="ne-overlay">
                                        <img src={hovericon} />
                                    </a>
                                </div>
                            </div>

             } 
             {index == 2 &&
                <div className={`col col-6  ${index}`} key={`Fourth${index}`}>
                                <div className="ne-card fixed-h" style={{
                 backgroundImage: `url(${post.thumbnail})`
                 }}>
                                    <h3 className="text-white">{post.title}</h3>
                                    <a href={post.path} className="ne-overlay">
                                        <img src={hovericon} />
                                    </a>
                                </div>
                            </div>

             }
             
            </>
                ))}    
                </div>
                </div>
                </div>
                <div className="link m-link">
                    <a href="/news-events" className="font-exo text-dark">View all <img src={link_arrow} /></a>
                </div>
            </div>
        </section>
        
    <Tagline />
    
  </Layout>
);
    };
    export const pageQuery = graphql`
  query {
    abouts: markdownRemark(fileAbsolutePath: { regex: "./content/about.md/" }) {
      html
      frontmatter {
        top_section{
            button{
                button_text
                button_link
            }
            title
            text_block
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
        limit: 4
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
              thumbnail
              excerpt
            }
            fields {
              name
            }
          }
        }
      }
      events: allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "events" } } }
      sort: { fields: frontmatter___date, order: ASC }
      limit: 5
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
export default AboutPage;
