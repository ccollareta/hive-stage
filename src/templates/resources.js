import React from 'react';
import { graphql, Link, withPrefix } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import SEO from '../components/seo';
import FeaturedResources from '../pages/content/resources.yml'
import FeaturedResource from '../components/featuredresource'
import link_arrow from '../images/link-arrow.png';
import link_arrow_2 from '../images/link-arrow-2.png';
import prev from '../images/prev.png';
import next from '../images/next.png';
import download_blue from '../images/download-blue.png';
import r1 from '../images/r1.jpg';
import r2 from '../images/r2.jpg';
import r3 from '../images/r3.jpg';
import r4 from '../images/r4.jpg';

const Blog = ({ data, pageContext }) => {
    const pageVar = '/resource-library/';
    const pageVar2 = './';
  const resources = data.resources.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/resources/' + node.fields.name,
  }));
  const feat = data.feat.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/resources/' + node.fields.name,
  }));
  const sidebar = data.side.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/resources/' + node.fields.name,
  }));
  const pgVar = 'style-3';
  return (
    <Layout pgVar={pgVar}>
      <SEO title="Resource Library" />
      <section className="hero-slider">
            <div className="container">
                <div className="slider-container">
                    <div className="featured-slider">
                        {feat.map((resource,index) => (
          <div className="featured-item" key={`Featured${index}`}>
          <FeaturedResource title={resource.title} 
          file={resource.file}
          file_size={resource.file_size}
          description={resource.description}
          resource_thumb={resource.resource_thumb} />
          </div>
        ))}
                        
                    </div>
                    <div className="slider-control">
                        <div className="prev-slide"><img src={prev} /></div>
                        <div className="next-slide"><img src={next} /></div>
                    </div>
                </div>
            </div>
        </section>
        <section className="hive-3-col-section style-2 resource">
            <div className="inner-container">
                <div className="row ">
                <div className="col col-4 resource-small">
                        <h4>Quick resources.</h4>
                        <div className="qr-container custom-scroll">
                            
                            {sidebar.map((resource,index) => (
          <div className="qr-item" key={`item${index}`}>
          <h6>{resource.title}</h6>
          <a href={resource.file} download>
          <div className="post-details">
                                        <span className="download">DOWNLOAD
                                            ({resource.file_size})</span>
                                    </div>
          </a>
          </div>
        ))}
                        </div>
                    </div>
                    <div className="col col-8">
                        <div className="row">
                    {resources.slice(0, 4).map((resource,index) => (
          <div className="col col-6" key={`top${index}`}>
          <div className="card">
                                    <div className="img-hover">
                                        <img src={resource.resource_thumb} className="card-img" alt="item1" />
                                    </div>
                                    <div className="card-body">
                                        <h4>{resource.title}</h4>
                                        <a href={resource.file} download>
                                            <div className="post-details">
                                                <span className="download"><img src={download_blue} />
                                                    DOWNLOAD
                                                    ({resource.file_size})</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
            
          </div>
          
        ))}
        </div>
        </div>
                   
                    
        <div className="col col-12">
                        <div className="row">
                    {resources.slice(4, 7).map((resource,index) => (
          <div className="col col-4" key={`bottom${index}`}>
          <div className="card">
                                    <div className="img-hover">
                                        <img src={resource.resource_thumb} className="card-img" alt="item1" />
                                    </div>
                                    <div className="card-body">
                                        <h4>{resource.title}</h4>
                                        <a href={resource.file} download>
                                            <div className="post-details">
                                                <span className="download"><img src={download_blue} />
                                                    DOWNLOAD
                                                    ({resource.file_size})</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
            
          </div>
          
        ))}
        </div>
        </div>
                </div>
                <nav className="resource">
                <ul className="paginationr">
                  {Array.from({ length: pageContext.numberOfPages }, (_, i) => (
        <li key={`pagination-number${i + 1}`} className="page-item"><a className={`page-link ${i == pageContext.pageNumber ? "current" : ""}`}  href={`${i == pageContext.pageNumber ? "" : i === 0 ? "/resource-library" : pageContext.pageNumber == 1 ? pageVar + (i + 1):  pageVar + (i + 1)}`}>
          {i + 1}
        </a></li>
      ))}
      </ul>
                </nav>
            </div>
        </section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    resources: allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "resources" } } }
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          html
          frontmatter {
            author
            date
            title
            file
            file_size
            description
            resource_thumb
          }
          fields {
            name
          }
        }
      }
    }
    feat: allMarkdownRemark(
      filter: {fields: {sourceName: {eq: "resources"}}, frontmatter: {featured: {eq: "Yes"}}}
      sort: { fields: frontmatter___date, order: DESC }
      limit: 5
    ) {
      edges {
        node {
          html
          frontmatter {
            author
            date
            title
            file
            file_size
            description
            resource_thumb
          }
          fields {
            name
          }
        }
      }
    }
    side: allMarkdownRemark(
        filter: {fields: {sourceName: {eq: "resources"}}}
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            html
            frontmatter {
              author
              date
              title
              file
              file_size
              description
              resource_thumb
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
