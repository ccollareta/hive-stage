import React from 'react';
import { graphql, Link, withPrefix } from 'gatsby';
import { Helmet } from 'react-helmet';


import Layout from '../components/layout';
import SocialShare from '../components/social-share';
import Tagline from '../components/tagline';
import SimilarBlogComponent from '../components/similararticles'
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

  const html2 = html;
  const pgVar = 'style-3';
  const date2 = new Date(frontmatter.date);
  var options = {year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }
    return (
    <Layout pgVar={pgVar}>
      <SEO title={frontmatter.title} />
      <section className="hive-submission-details">
            <img src={art5} className="art art-1"/>
            <img src={art4} className="art art-2"/>
            <div className="inner-container">
                <div className="post-category">
                    <span className="category">{frontmatter.tags ? frontmatter.tags.join(', ') : ''}</span>
                </div>
                <h1>{frontmatter.title}</h1>
                <div className="row">
                    <div className="col col-8">
                        <img src={frontmatter.featured_image} className="img-fluid post-img" alt="img" />
                        <div className="post-author">
                            <div className="author">
                                <img src={usr_img} alt="user" />
                                <div className="name">
                                    {frontmatter.author}
                                    <span>{date2.toLocaleDateString('en-US',options)}</span>
                                </div>
                            </div>

                        </div>
                        <div className="post-content">
                            <h3>{frontmatter.subtitle}</h3>
                            <div className="post-detail">
                               
                                {html && <div dangerouslySetInnerHTML={{ __html: html }} /> }
                                
                                
                            </div>
                            <h5>{frontmatter.pre_title}</h5>
                            <p>
                            {frontmatter.pre_text}
                            </p>
                            
                            {frontmatter.mobLink && <a href={frontmatter.mobLink} className="btn rounded"><span>Join the Conversation</span></a> }
                        </div>
                    </div>
                    <FeaturedBlogComponent currentArticleSlug={`/news/${fields.name}`} />
                </div>
            </div>
        </section>
        
        <SimilarBlogComponent currentArticleSlug={`/news/${fields.name}`} tags={frontmatter.tags} category={frontmatter.collections} />
        <Tagline />
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
      }
    }
  }
`;

export default BlogPost;
