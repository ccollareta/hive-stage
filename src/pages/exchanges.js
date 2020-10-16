import React from 'react';
import { graphql, Link } from 'gatsby';
import YAMLData from '../../meta/tags.yml'

import Layout from '../components/layout';
import SEO from '../components/seo';

const Blog = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/event/' + node.fields.name,
  }));
  return (
    <Layout>
      <SEO title="Blog" />
      <div
        id="blog"
        className="bg-primary-darker usa-content font-serif-lg padding-y-6"
      >
        <div className="grid-container">
          <h1 className="text-normal text-white margin-0">Blog</h1>
          <span className="text-base-lighter display-block padding-top-1 text-light">
            This is a description of the page.
          </span>
          <ul>
          
        </ul>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-row">
          <div className="desktop:grid-col-8 usa-prose padding-right-4">
            <main id="main-content">
              {/* This loops through the paginated posts */}
              {posts.map(post => (
                <div
                  key={post.title}
                  className="padding-bottom-5 margin-top-4 usa-prose border-bottom-05 border-base-lightest"
                >
                  <h3 className="title">
                    <Link className="usa-link text-no-underline" to={post.path}>
                      {post.title}
                    </Link>
                  </h3>
                  <div className="text-base margin-bottom-2">
                    <div className="margin-top-neg-105">
                      By <span className="text-bold">{post.author}</span> ·{' '}
                      {post.date}
                    </div>
                  </div>
                  {/*
                    We default to using post.html, but you can also use post.excerpt.
                    If you use excerpt then you have to make sure the content is on each
                    post header
                  */}
                  <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
              ))}
              {/* Pagination links */}
              { pageContext.numberOfPages > 1 &&
              <div className="grid-row padding-top-2">
                <div className="tablet:grid-col-4 text-center tablet:order-2 font-body-xs text-base">
                  Page {pageContext.humanPageNumber} of{' '}
                  {pageContext.numberOfPages}
                </div>
                <div className="tablet:grid-col-4 text-right tablet:order-3">
                  {pageContext.nextPagePath && (
                    <>
                      <Link
                        to={pageContext.nextPagePath}
                        className="paginate-link usa-link text-no-underline text-bold tablet:margin-top-0"
                      >
                        Next {pageContext.limit} Posts &rsaquo;
                      </Link>
                      <Link
                        to={pageContext.nextPagePath}
                        className="paginate-button usa-button margin-top-3"
                      >
                        Next {pageContext.limit} Posts &rsaquo;
                      </Link>
                    </>
                  )}
                </div>
                <div className="tablet:grid-col-4 text-left tablet:order-1">
                  {pageContext.previousPagePath && (
                    <>
                      <Link
                        to={pageContext.previousPagePath}
                        className="paginate-link usa-link text-no-underline text-bold tablet:margin-top-0"
                      >
                        &lsaquo; Previous {pageContext.limit} Posts
                      </Link>
                      <Link
                        to={pageContext.previousPagePath}
                        className="paginate-button usa-button margin-top-2"
                      >
                        &lsaquo; Previous {pageContext.limit} Posts
                      </Link>
                    </>
                  )}
                </div>
              
              </div>
              }
            </main>
          </div>
          
        </div>
        <div className="grid-row padding-top-4 tablet:padding-x-4 margin-bottom-4">
          <a className="usa-link" href="#blog">
            Return to top
          </a>
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "exchanges" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            author
            date
            title
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
