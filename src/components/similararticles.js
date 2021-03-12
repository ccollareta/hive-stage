// SimilarArticles.js

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from "gatsby"
import { SimilarArticlesFactory } from './similararticlesfactory'
import Article from './article'
import link_arrow from '../images/link-arrow.png';

const SimilarBlogComponent = ({ articles }) => (
  <>
  {articles.length > 0 &&
    <section className="hive-3-col-section-2 style-2">
    <div className="inner-container">
        <div className="section-head">
            <div className="section-title">
                <h2 className="title">Other News Articles</h2>
            </div>
            <div className="link d-link">
                <a href="/news" className="font-exo text-dark">View all <img src={link_arrow}/></a>
            </div>
        </div>
        <div className="row ">
    {articles.slice(0,3).map((article, i) => (
      <Article {...article.article} key={i}/>
    ))}
     </div>
                <div className="link m-link">
                    <a href="/news" className="font-exo text-dark">View all <img src={link_arrow} /></a>
                </div>
            </div>
        </section>
        }
        </>
)

// (1.) Query for articles
export default (props) => (
  <StaticQuery
    query={graphql`
      query SimilarArticles {    
        posts: allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "blog-posts" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            author
            date
            tags
            collections
            title
            featured_image
            thumbnail
      
            excerpt
          }
          fields {
            name
          }
        }
      }
      }
      }
    `}
    render={data => {
      const { category, tags, currentArticleSlug } = props;

      // (2.) Marshall the response into articles
      const articles = data.posts.edges.map(({ node }) => ({
        html: node.html,
        ...node.frontmatter,
        slug: node.fields.name,
        path: '/news/' + node.fields.name,
      }));
      // (3.) Use a SimilarArticlesFactory to get my similar articles
      const similarArticles = new SimilarArticlesFactory(
        articles, currentArticleSlug
      )
      .setMaxArticles(3)
      .setCategory(category)
      .setTags(tags)
      .getArticles()
      // (4.) Render it
      return (
        <SimilarBlogComponent
          articles={similarArticles}
        />
      )
    }}
  />
)


