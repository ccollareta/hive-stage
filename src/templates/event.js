import React from 'react';
import { graphql, Link, withPrefix } from 'gatsby';
import { Helmet } from 'react-helmet';


import Layout from '../components/layout';
import SocialShare from '../components/social-share';
import Tagline from '../components/tagline';
import SimilarEventComponent from '../components/similarevents'
import FeaturedEventComponent from '../components/featuredevent'
import SEO from '../components/seo';
import usr_img from '../images/user.svg';
import up_img from '../images/up.png';
import down_img from '../images/down.png';
import hne3 from '../images/hne-3.png';
import art4 from '../images/art4.png';
import art5 from '../images/art5.png';
import { post } from 'jquery';
import colbg from '../images/col-bg.jpg';
import idea from '../images/idea-mobile.jpg';
import download from '../images/download.svg';
import subhex from '../images/sub-hex.svg'
import link_arrow from '../images/link-arrow.png';



/*
  This is used in blog posts. The index page can be found at src/pages/blog.js
*/

const BlogPost = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html, fields } = markdownRemark;
  const pgVar = 'style-3';
  return (
    <Layout pgVar={pgVar}>
      <SEO title={frontmatter.title} />
      <section className="hive-submission-details">
            <img src={art5} className="art art-1"/>
            <img src={art4} className="art art-2"/>
            <div className="inner-container">
                <div className="post-category">
                    <span className="category"><a href="#">{frontmatter.tags.join(', ')}</a></span>
                </div>
                <h1>{frontmatter.title}</h1>
                <div className="row">
                    <div className="col col-8">
                        <img src={frontmatter.featured_image} className="img-fluid post-img" alt="img" />
                        <div className="post-author">
                            <div className="author">
                                <img src={usr_img} alt="user" />
                                <div className="name">
                                    <a href="#">{frontmatter.author}</a>
                                    <span>{frontmatter.date}</span>
                                </div>
                            </div>
                            <SocialShare />
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
                    <FeaturedEventComponent />
                </div>
            </div>
        </section>
        <section className="hive-text-image-section animated-hex" style={{
          backgroundImage: `url(${colbg})`
          }}>
            <div className="inner-container">
                <div className="row">
                    <div className="col col-5">
                        <div className="section-head">
                            <div className="section-title">
                                <p className="sub-title text-orange">Let’s make some honey</p>
                                <h2 className="title text-white">Want To Weigh In On The Buzz?</h2>
                            </div>
                        </div>
                        <p className="text-white subtext">
                            We’re interested in ideas that don’t target one of our Areas of Interest. Use the ‘Other
                            AOI’ category to submit these types of ideas!
                        </p>
                        <div className="ctas">
                            {frontmatter.mobLink && <a href={frontmatter.mobLink} className="btn rounded"><span>Join the Conversation</span></a> }
                            {frontmatter.file && <a href={frontmatter.file} className="btn rounded outline" download><span><img src={download} />Download the
                                    latest files</span></a> }
                        </div>
                    </div>
                    <div className="col col-7">
                        <div className="hex-img">
                            <img data-depth="0.05" src={subhex} className="sub-hex"/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="327.846" height="318.144"
                                viewBox="0 0 327.846 318.144">
                                <defs>
                                    <mask id="msk1">
                                        <path className="a" transform="translate(50 50) rotate(15 130.5 20.5)"
                                            d="M172.871,0a28.906,28.906,0,0,1,25.009,14.412L245.805,97.1a28.906,28.906,0,0,1,0,28.989L197.88,208.784A28.906,28.906,0,0,1,172.871,223.2H76.831a28.906,28.906,0,0,1-25.009-14.412L3.9,126.092A28.906,28.906,0,0,1,3.9,97.1L51.821,14.412A28.906,28.906,0,0,1,76.831,0Z" />
                                    </mask>
                                </defs>
                                <image mask="url(#msk1)" height="100%" width="100%" href={idea}
                                    preserveAspectRatio="xMidYMin slice">
                                </image>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <SimilarEventComponent currentArticleSlug={`/event/${fields.name}`} tags={frontmatter.tags} category={frontmatter.collections} />
        <Tagline />
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
