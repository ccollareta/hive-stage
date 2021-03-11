/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, withPrefix } from 'gatsby';
import { Helmet } from 'react-helmet';

import Footer from './footer';
import PostFoot from './postfoot';
import Header from './header';
import Nav from './nav';

import '../../static/vendor/slick/slick.css';
import '../../static/vendor/lity/lity.min.css';


const Layout = ({ children, pgVar }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          navigation {
            items {
              text
              link
            }
          }
          secondaryLinks {
            text
            link
          }
        }
      }
    }
  `);
  
  const { title, navigation, secondaryLinks } = data.site.siteMetadata;
  const jq = '/scripts/jquery.js';
  const lity = '/vendor/lity/lity.js';
  const slick = '/vendor/slick/slick.min.js';
  const isoptope ='/vendor/isotope/isotope.js';
  const isotope2 = '/scripts/isotope.js';
  const cust = '/scripts/custom.js';
  return (
    <>
     <Helmet>
      <script src={withPrefix(jq)} type="text/javascript"></script>
      <body className="home" />

  </Helmet>
      <div className="site-wrapper">
      <Header siteTitle={title} pgVar={pgVar}>
        <Nav {...{ navigation, secondaryLinks }} />
      </Header>
        {children}
        </div>
      <Footer />

      
      
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
