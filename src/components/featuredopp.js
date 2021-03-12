// SimilarArticles.js

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from "gatsby"
import { SimilarArticlesFactoryFeat } from './similararticlesfactoryfeat'
import FeatArticle from './featarticle'
import link_arrow from '../images/link-arrow.png';

const FeaturedOppComponent = ({ articles }) => (
  <>
    <div className="col col-4">
        <h4 className="widget-title">Related Opportunities</h4>
        <div className="related-post-container">
        {articles.slice(0,3).map((article, i) => (
      <FeatArticle {...article.article} key={i}/>
    ))}
        </div>
    </div>
    </>
)

// (1.) Query for articles
export default (props) => (
  <StaticQuery
    query={graphql`
      query FeaturedOpps {    
        posts: allMarkdownRemark(
    filter: {fields: {sourceName: {eq: "opps"}}, frontmatter: {featured: {eq: "Yes"}}}
      sort: { fields: frontmatter___date, order: DESC }
      limit: 3
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
        path: '/opportunity/' + node.fields.name,
      }));
      // (3.) Use a SimilarArticlesFactory to get my similar articles
      const similarArticles = new SimilarArticlesFactoryFeat(
        articles, currentArticleSlug
      )
      .setMaxArticles(3)
      .getArticles()
      // (4.) Render it
      return (
        <FeaturedOppComponent
          articles={similarArticles}
        />
      )
    }}
  />
)


