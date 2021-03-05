import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, withPrefix } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import art2 from '../images/art2.png';
import art5 from '../images/art5.png';

const PrivacyPage = ({data}) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const pgVar = 'style-3';
  return (
  <Layout pgVar={pgVar}>
    <SEO title="Privacy Policy" />
    <section className="pp-section">
            <img src={art2} className="art art-1"/>
            <img src={art5} className="art art-2"/>
            <img src={art5} className="art art-3"/>
            <div className="pp-container" dangerouslySetInnerHTML={{ __html: html }}>
     

     </div>
     </section>
  </Layout>
);
    };

    export const pageQuery = graphql`
  query PrivacyPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "./content/privacy.md/" }) {
      html
      frontmatter {
        date
      }
    }
  }`
export default PrivacyPage;
