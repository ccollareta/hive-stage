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
      <SEO title="Blog" />
      <section className="all-news">
            <div className="inner-container">
                <h1 className="text-center">All Posts</h1>
                <div className="post-filters filterby">
                {Tags.tags.map((tag,index) => (
              <a className="filter" data-filter={`${tag.slug}`} key={tag.slug}>{tag.name}</a>

          ))}
          <a className="filter active" data-filter="*">All Posts</a>
                </div>
                <div className="row filter-container">
                {posts.map((post,index) => (
                <div
                  key={`news${index}`}
                  className={`col col-4 filter-item`}
                  data-filter={`${post.tags.join(' ')}`}
                >
                  <div className="card">
                            <div className="img-hover">
                                <img src={post.featured_image} className="card-img" alt="item2" />
                            </div>
                            <div className="card-body">
                                <Link to={post.path}><h4>{post.title}</h4></Link>
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
  query {
      allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "blog-posts" } } }
      sort: { fields: frontmatter___date, order: DESC }
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
