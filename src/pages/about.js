import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Tagline from '../components/tagline';
import HiveIdeas from '../components/hiveideas';
import Slider from '../components/slider'
import FeatOpp from '../components/opp'
import { Link, withPrefix } from 'gatsby';
import hero_bg from '../images/hero-bg-2.jpg';
import { Helmet } from 'react-helmet';
import link_arrow from '../images/link-arrow.png';
import link_arrow_2 from '../images/link-arrow-2.png';
import prev from '../images/prev.png';
import next from '../images/next.png';
import hne_1 from '../images/hne-1.png';
import hne_2 from '../images/hne-2.png';
import hne_3 from '../images/hne-3.png';
import hne_4 from '../images/hne-4.png';
import hne_5 from '../images/hne-5.png';
import art_7 from '../images/section-art-7.png';
import art_5 from '../images/section-art-5.png';
import art_4 from '../images/section-art-4.png';
import partners from '../images/partners.png';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

const AboutPage = ({data}) => {
  const { markdownRemark } = data;
  const posts = data.abouts.frontmatter;
  const news = data.news.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/news/' + node.fields.name,
  }));
  const pgVar = 'style-2';
  return (
  <Layout pgVar={pgVar}>
    <SEO title="About Us" />
    <section className="hero-section style-2">
            <div className="hero-img" style={{
    backgroundImage: `url(${hero_bg})`
  }}></div>
            <div className="container">
                <div className="hero-action">
                    <h2 className="hero-title">{posts.top_section.title}</h2>
                    <p>
                    {posts.top_section.text_block}
                    </p>
                    <div className="hero-ctas">
                    <Link className="btn rounded" to={posts.top_section.button.button_link}>{posts.top_section.button.button_text}</Link>
                    </div>
                </div>
            </div>
        </section>
        <section className="hive-info">
            <img className="section-art art-1" src={art_5} />
            <img className="section-art art-2" src={art_4} />
            <div className="inner-container">
                <div className="section-head">
                    <div className="section-title">
                        <p className="sub-title text-orange-alt">WE’RE BUZZING WITH INFORMATION</p>
                        <h2 className="title">What is HIVE?</h2>
                    </div>
                    <div className="link d-link">
                        <a href="#" className="font-exo text-dark">Get Started <img src={link_arrow} /></a>
                    </div>
                </div>
                <div className="row">
                {posts.blocks.map(block => (
              <div className="col col-6" key={block.block.icon}>
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
                    <a href="#" className="font-exo text-dark">Get Started <img src={link_arrow} /></a>
                </div>
            </div>
        </section>
        <section className="hive-partners">
            <div className="inner-container">
                <div className="row">
                    <div className="col col-6">
                        <div className="section-head">
                            <div className="section-title">
                                <p className="sub-title text-orange-alt">WE’RE PART OF A GREATER COLONY</p>
                                <h2 className="title">Streamlining Federal Health IT</h2>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="col col-6">
                        <img src={partners} className="img-fluid" alt="partners" />
                    </div>
                </div>
            </div>
        </section>
        <HiveIdeas />
        <section className="hive-news-events" >
            <img className="section-art art-1" src={art_7} />
            <div className="inner-container">
                <div className="section-head">
                    <div className="section-title">
                        <p className="sub-title text-orange-alt">Whats the buzz?</p>
                        <h2 className="title">News & upcoming events.</h2>
                    </div>
                    <div className="link d-link">
                        <Link to="/news-events/" className="font-exo text-dark">View all <img src={link_arrow} /></Link>
                    </div>
                </div>
                <div className="slider-container">
                    <div className="hne-slider">
                    {news.map((post,index) => (
                         <div key={`post${index}`} className="hne-item">
                         <div className="hne-img-wrapper img-hover">
                             <img src={post.featured_image} className="img-fluid" alt="slide_image" />
                         </div>
                         <h4><Link to={post.path} className="text-dark">{post.title}</Link></h4>
                         <div className="link type-2">
                             <Link to={post.path} className="font-exo text-dark">
                                 LEARN MORE <img src={link_arrow_2} />
                             </Link>
                         </div>
                     </div>
                    ))}
                        
                    </div>
                </div>
                <div className="slider-control">
                    <div className="prev-slide"><img src={prev} /></div>
                    <div className="next-slide"><img src={next} /></div>
                </div>
                <div className="link m-link">
                    <a href="#" className="font-exo text-dark">View all <img src={link_arrow} /></a>
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
export default AboutPage;
