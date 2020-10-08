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
                    <span className="date">{frontmatter.date}</span>
                </div>
                <h1>{frontmatter.title}</h1>
                <div className="author">
                    <img src={usr_img} alt="user" />
                    Submitted by &nbsp;<a href="#">{frontmatter.author}</a>
                </div>
                <img src={frontmatter.featured_image} className="img-fluid post-img" alt="img" />
                <div className="post-content">
                    <h2>{frontmatter.title}</h2>
                    <p className="pre-text">
                        {frontmatter.pre_text}
                    </p>
                    <p dangerouslySetInnerHTML={{ __html: html }} />
                    
                   
                </div>
            </div>
        </section>
        
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
      html
      frontmatter {
        author
        date
        title
        tags
        pre_text
        featured_image
      }
    }
  }
`;

export default BlogPost;
