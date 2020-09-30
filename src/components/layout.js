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
