import React from 'react';
import { graphql, Link, withPrefix  } from 'gatsby';
import Tags from '../../meta/tags.yml'
import Collections from '../../meta/collections.yml';
import { Helmet } from 'react-helmet';
import art4 from '../images/art4.png';
import art5 from '../images/art5.png';
import hovericon from '../images/hover-icon.svg';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Blog = ({ data, pageContext }) => {
  const posts = data.posts.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/opportunity/' + node.fields.name,
  }));
  const feat = data.feat.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/opportunity/' + node.fields.name,
  }));
  const pgVar = 'style-3'
  var options = {year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }
  return (
    <Layout pgVar={pgVar}>
      <SEO title="Opportunities" />
      <section className="all-news">
            <img src={art5} className="art art-1" />
            <img src={art4} className="art art-2" />
            <div class="inner-container">
                <div class="featured-news">
                    <div class="row featured-item">
                        
                        {feat.slice(0,1).map((feat_post,index) => (
                          <>
                    <div class="col col-6">
                            <div class="text">
                                <div class="section-head">
                                    <div class="section-title">
                                        <p class="sub-title text-orange-alt">FEATURED OPPORTUNITY</p>
                                        <h2 class="title">{feat_post.title}</h2>
                                    </div>
                                </div>
                                <p>
                                {feat_post.excerpt}
                                </p>
                                <a href={feat_post.path} class="btn rounded"><span>Read More</span></a>
                            </div>
                        </div>
                        <div class="col col-6">
                            <div class="image" style={{
                              backgroundImage: `url(${feat_post.featured_image})`
                              }}></div>
                        </div>
                </>
              ))}
                    </div>
                </div>
            </div>
            <div className="inner-container">
                <h1>All Opportunites</h1>
                <div className="filter-form">
                    <div className="filters">
                        <select className="filter" data-filter-group="0">
                            <option value="title">Category</option>
                            {Tags.tags.map((tag,index) => (
                              <option value={`.${tag.slug}`} key={tag.slug}>{tag.name}</option>
                              ))}
                        </select>
                        <select className="filter" data-filter-group="1">
                            <option value="title">Collection</option>
                            {Collections.collections.map((tag,index) => (
                              <option value={`.${tag.slug}`} key={tag.slug}>{tag.name}</option>
                              ))}
                        </select>
                        <a href="javascript: void(0);" className="btn rounded outline btn-filter">
                            <span>Sort & Filter</span>
                        </a>
                    </div>
                    <div className="selected-filters"></div>
                </div>

      
            
                <div className="row filter-container">
                {posts.map((post,index) => (
                <div
                  key={`news${index}`}
                  className={`col col-4 filter-item ${posts.tags ? post.tags.join(' ') : ''} ${post.collections ? post.collections.join(' '): ''}`}
                >
                  <div className="card">
                            <div className="card-img">
                                <img src={post.featured_image} className="img-fluid" alt="item1" />
                                <a href={post.path} className="card-overlay">
                                    <img src={hovericon} />
                                </a>
                            </div>
                            <div className="card-body">
                                <a href={post.path}>
                                    <h4>{post.title}</h4>
                                </a>
                                <p>
                                    {post.excerpt}
                                </p>
                                <div className="post-details">
                                    <span className="author">Submitted by {post.author}</span>
                                    <span className="date">{post.date ? new Date(post.date).toLocaleDateString('en-US',options) : ''}</span>
                                </div>
                            </div>
                        </div>
                    </div>
              ))}
                    
                    
                </div>
                <nav className="paged">
                { /* Pagination added here */ }
                </nav>
            </div>
        </section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
      posts: allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "opps" } } }
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
            collections
            excerpt
            featured_image
          }
          fields {
            name
          }
        }
      }
    }
    feat: allMarkdownRemark(
      filter: {fields: {sourceName: {eq: "opps"}}, frontmatter: {featured: {eq: "Yes"}}}
      sort: { fields: frontmatter___date, order: DESC }
      limit: 3
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
      
    
  }
`;

export default Blog;
