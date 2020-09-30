import React from 'react';
import { graphql, Link, withPrefix  } from 'gatsby';
import Tags from '../../meta/tags.yml'
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Blog = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/news/' + node.fields.name,
  }));
  const pgVar = 'style-3'
  return (
    <Layout pgVar={pgVar}>
      <Helmet>
  <link rel="stylesheet" href={withPrefix('../../vendor/slick/slick.css')} />
  <link rel="stylesheet" href={withPrefix('../../vendor/lity/lity.min.css')} />
    <script src={withPrefix('../../scripts/jquery.min.js')} type="text/javascript" />
    <script src={withPrefix('../../vendor/slick/slick.min.js')} type="text/javascript"/>
    <script src={withPrefix('../../vendor/lity/lity.min.js')} type="text/javascript"/>
    <script src={withPrefix('../../vendor/isotope/isotope.pkgd.min.js')} type="text/javascript"/>
    <script src={withPrefix('../../scripts/custom.js')} type="text/javascript"/>
    <script src={withPrefix('../../scripts/isotope.js')} type="text/javascript"/>
  </Helmet>
      <SEO title="Blog" />
      <section className="all-news">
            <div className="inner-container">
                <h1 className="text-center">All Posts</h1>
                <div className="post-filters filterby">
                {Tags.tags.map(tag => (
              <a  className="filter" data-filter={`${tag.slug}`} key={tag.slug}>{tag.name}</a>

          ))}
          <a href="javascript: void(0);" className="filter active" data-filter="*">All Posts</a>
                </div>
                <div className="row filter-container">
                {posts.map(post => (
                <div
                  key={post.title}
                  className={`col col-4 filter-item`}
                  data-filter={`${post.tags.join(' ')}`}
                >
                  <div className="card">
                            <div className="img-hover">
                                <img src={post.featured_image} className="card-img" alt="item2" />
                            </div>
                            <div className="card-body">
                              <a href={post.path}><h4>{post.title}</h4></a>
                                <p>{post.excerpt}</p>
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
                { /* Pagination added here */ }
                </nav>
            </div>
        </section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
      allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "blog-posts" } } }
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          html
          frontmatter {
            author
            date
            title
            tags
            excerpt
            featured_image
          }
          fields {
            name
          }
        }
      }
    }
  
      
    
  }
`;

export default Blog;
