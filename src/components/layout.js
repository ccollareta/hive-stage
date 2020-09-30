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
  return (
    <>
     <Helmet>
  <link rel="stylesheet" href={withPrefix('/vendor/slick/slick.css')} />
  <link rel="stylesheet" href={withPrefix('/vendor/lity/lity.min.css')} />
    <script src={withPrefix('/scripts/jquery.min.js')} type="text/javascript" />
    <script src={withPrefix('/vendor/slick/slick.min.js')} type="text/javascript"/>
    <script src={withPrefix('/vendor/lity/lity.min.js')} type="text/javascript"/>
    <script src={withPrefix('/scripts/custom.js')} type="text/javascript"/>
  </Helmet>
      <div className="site-wrapper">
      <Header siteTitle={title} pgVar={pgVar}>
        <Nav {...{ navigation, secondaryLinks }} />
      </Header>
        {children}
      <Footer />
      <PostFoot />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
