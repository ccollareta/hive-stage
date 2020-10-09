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
import c1 from '../images/c1.png';
import c2 from '../images/c2.png';
import c3 from '../images/c3.png';
import idea_1 from '../images/idea1.png';
import idea_2 from '../images/idea2.png';
import idea_3 from '../images/idea3.png';


const OverviewPage = ({data}) => {
  const { markdownRemark } = data;
  const posts = data.abouts.frontmatter;
  const pgVar = 'style-3';
  return (
  <Layout pgVar={pgVar}>
    <SEO title={posts.title} />
    <section className="hero-section style-3"
    style={{
        background: 'linear-gradient(243deg, #05409E 0%, #011947 100%)'
      }}>
            <div className="container">
                <div className="hero-action">
                    <div className="row">
                        <div className="col-7">
                            <h2 className="hero-title text-white">{posts.title} </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="hive-conversation industry">
            <div className="inner-container">
                <div className="row">
                    <div className="col col-8">
                        <div className="col-item">
                        
                            <div className="col-content">
                            {posts.vimeo_code.length > 1 && 
            <div style={{padding: '50% 0 0 0',
            height: '600px',
            position: 'relative'}}>
              <iframe src={`https://vimeo.com/event/${posts.vimeo_code}/embed/f85d593830`} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen style={{position:'absolute', top:'0', left: '0', width:'100%', height:'100%', minHeight:'500px'}}></iframe>
              </div>
            }
                                <h6 style={{
                                    marginTop: '10px'
                                }}><strong>{posts.sub_title}</strong></h6>
                                <div style={{
                                    display: 'flex',
                                    width: '100%',
                                    flexDirection: 'row'
                                }}>
                                <div style={{
                                    display: 'flex',
                                    width: '25%',
                                    height: '60px',
                                    paddingLeft: '15px',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    borderLeft: '5px solid #F7941D'
                                }}><span className="date">{posts.event_date}</span></div>
                                <div style={{
                                    display: 'flex',
                                    width: '75%',
                                    paddingLeft: '10px'
                                }}>
                                    {posts.text}
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-4" style={{
                        padding: '0px'
                    }}>
                        <div className="col-item">
                            <div className="col-content" style={{
                                marginLeft: '0px'
                            }}>
                            {posts.vimeo_code.length > 1 && 
            
              <iframe src={`https://vimeo.com/event/${posts.vimeo_code}/chat/f85d593830`} height="600" width="400" frameBorder="0"></iframe>
            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        
    
  </Layout>
);
    };
    export const pageQuery = graphql`
  query {
    abouts: markdownRemark(fileAbsolutePath: { regex: "./content/viday.md/" }) {
      html
      frontmatter {
        title
        vimeo_code
        event_date
        sub_title
        text
        }
      }
  }`
export default OverviewPage;
