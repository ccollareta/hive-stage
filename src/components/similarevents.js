// SimilarArticles.js

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from "gatsby"
import { SimilarArticlesFactory } from './similararticlesfactory'
import Article2 from './article2'
import link_arrow from '../images/link-arrow.png';
import colbg from '../images/col-bg.jpg';
import hex1 from '../images/new/hex-1.svg'
import hex2 from '../images/new/hex-2.svg'
import hex3 from '../images/new/hex-3.svg'

const SimilarEventComponent = ({ articles }) => (
    <>
    {articles.length > 0 &&
        <>
    <section className="hive-3-col-section-2 style-2 animated-hex" style={{
      backgroundImage: `url(${colbg})`
      }}>
      <img data-depth="0.05" src={hex1} className="hex-img img-1" />
            <img data-depth="0.05" src={hex2} className="hex-img img-2" />
            <img data-depth="0.05" src={hex3} className="hex-img img-3" />
    <div className="inner-container">
        <div className="section-head">
            <div className="section-title">
                <h2 className="title text-white">Other Events</h2>
            </div>
            <div className="link d-link"style={{
                      '--width':'134px',
                    }}>
                <a href="/news-events" className="font-exo text-white">View all <img src={link_arrow}/></a>
            </div>
        </div>
        <div className="row ">
    {articles.slice(0,3).map((article, i) => (
       <Article2 {...article.article} key={i} color="white"/>
    ))}
     </div>
                <div className="link m-link">
                    <a href="/news-events" className="font-exo text-white">View all <img src={link_arrow} /></a>
                </div>
            </div>
        </section>
        </>
    }
    </>
)

// (1.) Query for articles
export default (props) => (
  <StaticQuery
    query={graphql`
      query SimilarEvents {    
        posts: allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "events" } } }
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
        path: '/event/' + node.fields.name,
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
        <SimilarEventComponent
          articles={similarArticles}
        />
      )
    }}
  />
)


