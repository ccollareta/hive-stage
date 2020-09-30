import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, withPrefix } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const PrivacyPage = ({data}) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const pgVar = 'style-3';
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
    <SEO title="Privacy Policy" />
    <section className="hive-privacy-policy">
            <div className="inner-container">
    <h2>Privacy Policy</h2>
    <h5>Last Updated: {frontmatter.date}</h5>
     <span dangerouslySetInnerHTML={{ __html: html }} />
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
