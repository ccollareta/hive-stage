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
                <img src={frontmatter.event_image} className="img-fluid post-img" alt="img" />
                <div className="post-content">
                    <h2>{frontmatter.title}</h2>
                    <p className="pre-text">
                        {frontmatter.pre_text}
                    </p>
                    <h3>Resources for this Opportunity</h3>
                    {frontmatter.resources.map((res,index) => (
                        <div key={index}>
                            <a href={res.resource.file} download>{res.resource.title}</a>
                            <p>{res.resource.text}</p>
                        </div>
          ))}
          <h3>Important Dates for this Opportunity</h3>
                    {frontmatter.dates.map((imdate,index) => (
                        <div key={index}>
                            {imdate.date.title}<br />
                            {imdate.date.date}
                            <p>{imdate.date.text}</p>
                        </div>
          ))}
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                    
                   
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
        sourceName: { eq: "opps" }
        name: { eq: $name }
      }
    ) {
      html
      frontmatter {
        author
        date
        title
        tags
        resources{
            resource{
                title
                text
                file
            }
        }
        dates{
            date{
                title
                text
                date
            }
        }
        featured_image
        event_image
        description
      }
    }
  }
`;

export default BlogPost;
