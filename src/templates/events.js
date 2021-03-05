import React from 'react';
import { graphql, Link, withPrefix } from 'gatsby';
import YAMLData from '../../meta/tags.yml'
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import SEO from '../components/seo';
import prev from '../images/prev.png';
import next from '../images/next.png';

const Blog = ({ data, pageContext }) => {
  const posts = data.events.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/event/' + node.fields.name,
  }));
  const feat = data.feat.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/event/' + node.fields.name,
  }));
  const pgVar = 'style-3';
  return (
    <Layout pgVar={pgVar}>
      <Helmet>
  <link rel="stylesheet" href={withPrefix('../../vendor/slick/slick.css')} />
  <link rel="stylesheet" href={withPrefix('../../vendor/lity/lity.min.css')} />
    <script src={withPrefix('../../scripts/jquery.min.js')} type="text/javascript" />
    <script src={withPrefix('../../vendor/slick/slick.min.js')} type="text/javascript"/>
    <script src={withPrefix('../../vendor/lity/lity.min.js')} type="text/javascript"/>
    <script src={withPrefix('../../scripts/custom.js')} type="text/javascript"/>
    
  </Helmet>
      <SEO title="Blog" />
      <section className="hero-slider">
            <div className="container">
                <div className="slider-container">
                    <div className="featured-slider">
                      {feat.map((feat,index) =>(
                        <div className="featured-item" key={index}>
                            <div className="row">
                                <div className="col-6 text">
                                    <div className="section-head">
                                        <div className="section-title">
                                            <p className="sub-title text-orange-alt">FEATURED EVENT</p>
                                            <h2 className="title text-white"><a href={feat.path} className="text-dark">{feat.title}</a></h2>
                                        </div>
                                    </div>
                                    <p>
                                        {feat.description}
                                    </p>
                                    <a href={feat.path} className="btn rounded">Register Now</a>
                                </div>
                                <div className="col-6">
                                    <img src={feat.event_image} className="featured-img" alt="img" />
                                </div>
                            </div>
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
        <section className="hive-3-col-section style-2 events">
            <div className="inner-container">
                <div className="section-head">
                    <div className="section-title">
                        <p className="sub-title text-orange-alt">Lorem ipsum dolor sit amet,</p>
                        <h2 className="title">Upcoming events.</h2>
                    </div>
                </div>
                <div className="row ">
                    {posts.map((post,index) => (
                <div className="col col-4" key={post.title} >
                <div className="card">
                    <div className="img-hover">
                        <img src={post.event_image} className="card-img" alt="item1" />
                    </div>
                    <div className="card-body">
                        <h4><a href={post.path} className="text-dark">{post.title}</a></h4>
                        <div className="post-details">
                            <span className="time">{post.event_date}</span>
                        </div>
                    </div>
                </div>
            </div>
              ))}
                </div>
            </div>
        </section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    events: allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "events" } } }
      sort: { fields: frontmatter___event_date, order: DESC }
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
            featured_image
            excerpt
          }
          fields {
            name
          }
        }
      }
    }
    feat: allMarkdownRemark(
      filter: {fields: {sourceName: {eq: "events"}}, frontmatter: {featured: {eq: "Yes"}}}
      sort: { fields: frontmatter___event_date, order: DESC }
      limit: 5
    ) {
      edges {
        node {
          html
          frontmatter {
            author
            date
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
`;

export default Blog;
