import React from 'react';
import { graphql, Link, withPrefix } from 'gatsby';
import { Helmet } from 'react-helmet';


import Layout from '../components/layout';
import SEO from '../components/seo';
import usr_img from '../images/user.jpg';
import up_img from '../images/up.png';
import down_img from '../images/down.png';
import hne3 from '../images/hne-3.png';

/*
  This is used in blog posts. The index page can be found at src/pages/blog.js
*/

const BlogPost = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const pgVar = 'style-3';
  return (
    <Layout pgVar={pgVar}>
      <SEO title={frontmatter.title} />
      <section className="hive-submission-details">
            <div className="inner-container">
                <div className="post-category-date">
                    
                    <span className="date">{frontmatter.event_date}</span>
                </div>
                <h1>{frontmatter.title}</h1>
                <div className="author">
                    <img src={usr_img} alt="user" />
                    Submitted by &nbsp;<a href="#">{frontmatter.author}</a>
                </div>
                <img src={frontmatter.event_image} className="img-fluid post-img" alt="img" />
                <div className="post-content">
                    <h2>{frontmatter.title}</h2>
                    <p className="pre-text">
                        {frontmatter.pre_text}
                    </p>
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                </div>
           
            {frontmatter.vimeo_code.length > 1 && 
            <div style={{padding: '56.25% 0 0 0',
            position: 'relative'}}>
              <iframe src={`https://vimeo.com/event/${frontmatter.vimeo_code}/embed/f85d593830`} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen style={{position:'absolute', top:'0', left: '0', width:'100%', height:'100%'}}></iframe>
              <iframe src={`https://vimeo.com/event/${frontmatter.vimeo_code}/chat/f85d593830`} width="400" height="600" frameBorder="0"></iframe>
              </div>
            }
             </div>
        </section>
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
      html
      frontmatter {
        author
        event_date
        title
        event_image
        vimeo_code
        pre_text
      }
    }
  }
`;

export default BlogPost;
