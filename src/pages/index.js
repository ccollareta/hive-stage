import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, withPrefix } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Tagline from '../components/tagline';
import Highlights from '../components/highlights';
import MultiList from '../components/multilist';
import Slider from '../components/slider'
import FeatOpp from '../components/opp'
import st1 from '../images/st1.jpg';
import st2 from '../images/st2.jpg';
import st3 from '../images/st3.jpg';
import st4 from '../images/st4.jpg';
import sect_1 from '../images/section-art-1.png';
import sect_2 from'../images/section-art-2.png';
import sect_3 from '../images/section-art-3.png';
import link_arrow from '../images/link-arrow.png';
import link_arrow_2 from '../images/link-arrow-2.png';


const IndexPage = ({data}) => {
  const { markdownRemark } = data;

  const posts = data.index.frontmatter;

  const exchanges = data.exchanges.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/exchange/' + node.fields.name,
  }));

  const opps = data.opps.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/opportunity/' + node.fields.name,
  }));

  const pgVar = 'style-1';
  return (
  <Layout pgVar={pgVar}>
    
    <SEO title="Home" />
    <Hero />
  </Layout>
  
);
    };
    export const pageQuery = graphql`
  query  {
    index: markdownRemark(fileAbsolutePath: { regex: "./content/home.md/" }) {
      html
      frontmatter {
        slider{
          name
          description
          thumbnail
        }
        featured_opportunity{
          opportunity{
            title
            description
            resource_thumb
            link
          }
        }
      }
    }
    exchanges: allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "exchanges" } } }
      sort: { fields: frontmatter___event_date, order: ASC }
      limit: 5
    ) {
      edges {
        node {
          html
          frontmatter {
            author
            date
            event_date
            description
            event_image
            title
            tags
          }
          fields {
            name
          }
        }
      }
    }
    opps: allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "opps" } } }
      sort: { fields: frontmatter___date, order: ASC }
      limit: 3
    ) {
      edges {
        node {
          html
          frontmatter {
            author
            date
            title
            event_image
            description
          }
          fields {
            name
          }
        }
      }
    }
  }`
export default IndexPage;
