import React from 'react';
import { graphql, Link, withPrefix } from 'gatsby';
import { Helmet } from 'react-helmet';

import Tags from '../../meta/tags.yml'
import Layout from '../components/layout';
import SocialShare from '../components/social-share';
import Tagline from '../components/tagline';
import SimilarOppComponent from '../components/similaropps'
import FeaturedBlogComponent from '../components/featuredblog'
import SEO from '../components/seo';
import usr_img from '../images/user.svg';
import up_img from '../images/up.png';
import down_img from '../images/down.png';
import hne3 from '../images/hne-3.png';
import art4 from '../images/art4.png';
import art5 from '../images/art5.png';
import { post } from 'jquery';
import colbg from '../images/col-bg.jpg';
import idea from '../images/new/opps-detailed.jpg';
import download from '../images/download.svg';
import subhex from '../images/sub-hex.svg'
import link_arrow from '../images/link-arrow.png';
import hex7 from '../images/new/hex-1.svg'
import hex8 from '../images/new/hex-2.svg'
import hex9 from '../images/new/hex-3.svg'



/*
  This is used in blog posts. The index page can be found at src/pages/blog.js
*/
const BlogPost = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html, fields } = markdownRemark;
  const date2 = new Date(frontmatter.date);
  var options = {year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
  
  const pgVar = 'style-3';
  var tagT = [];
  const tag2 = frontmatter.tags.map((tag)=>(
    Tags.tags.map((tags) => (
      tag != tags.slug ? '' : tagT.push(tags.name) 
    ))
  ))
 
    
  return (
    <Layout pgVar={pgVar}>
      <SEO title={frontmatter.title} />
      <section className="hive-submission-details">
            <img src={art5} className="art art-1"/>
            <img src={art4} className="art art-2"/>
            <div className="inner-container">
                <div className="post-category">
                    <span className="category text-blue"><strong>{tagT.length > 0 ? tagT.join(', ') : ''}</strong></span>
                </div>
                <h1>{frontmatter.title}</h1>
                <div className="row">
                    <div className="col col-8">
                        <div class="img-post" style={{
                          backgroundImage :  `url(${frontmatter.featured_image})`
                        }}>
                        
                        </div>
                        <div className="post-author">
                            <div className="author">
                                <img src={usr_img} alt="user" />
                                <div className="name">
                                    {frontmatter.author}
                                    <span>{date2.toLocaleDateString('en-US',options)}</span>
                                </div>
                            </div>
                        <SocialShare url={`https://hive.gov/opportunity/${fields.name}`} title={frontmatter.title} />
                        </div>
                        <div className="post-content">
                            <h3>{frontmatter.subtitle}</h3>
                            <div className="post-detail">
                               
                                {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
                                
                                {frontmatter.information.value && <> <span><strong>Value:</strong> {frontmatter.information.value}</span> </>}
                                {frontmatter.information.type && <> <span><strong>Type:</strong> {frontmatter.information.type}</span> </>}
                                {frontmatter.information.release && <> <span><strong>Release:</strong> {frontmatter.information.release}</span> </>}
                            </div>
                            <h5>{frontmatter.pre_title}</h5>
                            <p>
                            {frontmatter.pre_text}
                            </p>
                            {frontmatter.changelog &&
                            <>
                            <h5>Change Log</h5>
                            {frontmatter.changelog.map((change) =>(
                              <p>
                                {change.value}
                              </p>
                            ))}
                            </>
                            }
                            {frontmatter.impLinks &&
                            <>
                            <h5>Important Links</h5>
                            {frontmatter.impLinks.map((change) =>(
                              <p>
                                <a href={change.url}>{change.text}</a>
                              </p>
                            ))}
                            </>
                            } 
                        </div>
                    </div>
                    <FeaturedBlogComponent currentArticleSlug={`/opportunity/${fields.name}`} />
                </div>
            </div>
        </section>
        
        <section className="hive-ideas-2 style-2 animated-hex" style={{
        backgroundImage: `url(${colbg})`
    }}>
            <div className="inner-container">
                <div className="row">
                    <div className="col col-7 text">
                        <div className="section-head">
                            <div className="section-title">
                                <p className="sub-title text-orange">Let’s make some honey</p>
                                <h2 className="title text-white">Want To Weigh In <br />On The Buzz?</h2>
                            </div>
                        </div>
                        <div className="text-container text-white">
                            <p>
                            Join this opportunity’s dedicated HIVE Community to see the latest information, <br />ask questions, and interact with other HIVE members. <br />Don’t miss your chance to help shape this opportunity with us!
                            </p>
                            <div className="ctas">
                            {frontmatter.mobLink && <a href={frontmatter.mobLink} className="btn rounded"><span>Join the Conversation</span></a> }
                            {frontmatter.file && <a href={frontmatter.file} className="btn rounded outline" download><span><img src={download} />Download the
                                    latest files</span></a> }
                                    </div>
                        </div>
                    </div>
                    <div className="col col-5 image">
                    <img data-depth="0.05" src={hex7} className="hex-img img-1" />
                        <img data-depth="0.05" src={hex8} className="hex-img img-2" />
                        <img data-depth="0.05" src={hex9} className="hex-img img-3" />
                        <div className="hexagon-img hex-2">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="1043.739" height="964.99" viewBox="0 0 1043.739 964.99">
                                <defs>
                                    
                                    <linearGradient id="linear-gradient" y1="1" x2="1" y2="1"
                                        gradientUnits="objectBoundingBox">
                                        <stop offset="0" stopColor="#f15a29" />
                                        <stop offset="1" stopColor="#f7941d" />
                                    </linearGradient>
                                    <clipPath id="clip-path">
                                        <path className="cls-1"
                                            d="M612.315,651.091,766.79,384.59a76.676,76.676,0,0,0-.038-76.866L609.873,39.848A77.293,77.293,0,0,0,542.984,1.386L231.635,0a77.3,77.3,0,0,0-66.856,38.406L10.308,304.9a76.662,76.662,0,0,0,.041,76.862L167.228,649.648a77.3,77.3,0,0,0,66.891,38.467l311.35,1.378A77.3,77.3,0,0,0,612.315,651.091Z"
                                            transform="matrix(0.966, 0.259, -0.259, 0.966, 178.454, 0)" />
                                    </clipPath>
                                    <clipPath id="clip-path-2">
                                        <path className="cls-1"
                                            d="M491.718,522.857,615.769,308.844a61.574,61.574,0,0,0-.03-61.727L489.757,32A62.07,62.07,0,0,0,436.042,1.113L186.014,0a62.072,62.072,0,0,0-53.689,30.842L8.278,244.849a61.563,61.563,0,0,0,.033,61.724L134.292,521.7a62.076,62.076,0,0,0,53.717,30.891L438.038,553.7A62.073,62.073,0,0,0,491.718,522.857Z"
                                            transform="matrix(0.966, 0.259, -0.259, 0.966, 143.307, 0)" />
                                    </clipPath>
                                    <image id="image" width="1584.46" height="753.059"
                                        xlinkHref={idea} />
                                </defs>
                                <g transform="translate(57.332 48.932)">
                                    <path className="cls-2"
                                        d="M690.042,721.8,864.127,426.359a83.808,83.808,0,0,0-.043-85.214L687.29,44.176A87.384,87.384,0,0,0,611.911,1.537L261.039,0A87.389,87.389,0,0,0,185.7,42.577L11.617,338.015a83.793,83.793,0,0,0,.046,85.21L188.456,720.2a87.392,87.392,0,0,0,75.382,42.644l350.872,1.528A87.391,87.391,0,0,0,690.042,721.8Z"
                                        transform="matrix(0.966, 0.259, -0.259, 0.966, 140.503, -48.932)" />
                                    <path className="cls-3"
                                        d="M612.315,651.091,766.79,384.59a76.676,76.676,0,0,0-.038-76.866L609.873,39.848A77.293,77.293,0,0,0,542.984,1.386L231.635,0a77.3,77.3,0,0,0-66.856,38.406L10.308,304.9a76.662,76.662,0,0,0,.041,76.862L167.228,649.648a77.3,77.3,0,0,0,66.891,38.467l311.35,1.378A77.3,77.3,0,0,0,612.315,651.091Z"
                                        transform="matrix(0.966, 0.259, -0.259, 0.966, 178.454, 0)" />
                                    <g className="cls-4" transform="translate(0.001 0)">
                                        <use transform="translate(-365.03 56.54)" xlinkHref="#image" />
                                    </g>
                                    <g className="cls-5" transform="translate(91.493 85.392)">
                                        <use transform="translate(-456.522 -28.851)" xlinkHref="#image" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <SimilarOppComponent currentArticleSlug={`/opportunity/${fields.name}`} tags={frontmatter.tags} category={frontmatter.collections} />
     
    </Layout>
  );
};

export const pageQuery = graphql`
  query($name: String!) {
    markdownRemark(
      fields: {
        sourceName: { eq: "opps" }
        name: { eq: $name }
      }
    ) {
        fields {
        name
      }
      html
      frontmatter {
        author
        date
        title
        subtitle
        tags
        collections
        pre_title
        pre_text
        featured_image
        mobLink
        file
        information{
          value
          type 
          release
        }
        changelog{
          value
        }
        impLinks {
        text
        url
      }
      }
    }
  }
`;

export default BlogPost;
