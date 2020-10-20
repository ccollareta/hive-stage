import React from 'react';
import { graphql, Link, withPrefix } from 'gatsby';
import YAMLData from '../../meta/tags.yml'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout';
import SEO from '../components/seo';
import FeaturedPost from '../components/featuredpost';
import prev from '../images/prev.png';
import next from '../images/next.png';
import section_1 from '../images/section-art-1.png';
import section_2 from '../images/section-art-2.png';
import section_3 from '../images/Hexagon-Patter-On-White-Top.png';
import section_4 from '../images/Hexagon-Patter-On-White-Bottom.png';
import link_arrow from '../images/link-arrow.png';
import link_arrow_2 from '../images/link-arrow-2.png';
import hne3 from '../images/idea2.png';

const Blog = ({ data, pageContext }) => {
    
  const late = data.latenews.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/news/' + node.fields.name,
  }));
  const feat = data.feat.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/news/' + node.fields.name,
  }));
  const events = data.events.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/event/' + node.fields.name,
  }));
  const side = data.side.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/event/' + node.fields.name,
  }));
  const abouts = data.abouts.frontmatter;
  const pgVar = 'style-3';
  return (
    <Layout pgVar={pgVar}>
     
      <SEO title="Workforce 3.0" />
      <section className="hero-slider">
            <div className="container">
                <div className="slider-container">
                    <div className="featured-slider">
                    {feat.map((feat_post,index) => (
                <div
                  key={`feat${index}`}
                  className="featured-item"
                >
                  
                    <FeaturedPost 
                    title={feat_post.title}
                    slug={feat_post.path}
                    description={feat_post.excerpt}
                    thumb={feat_post.featured_image}
                    author={feat_post.author}
                    date={feat_post.date}
                    />
                  
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
        <section className="hive-3-col-section style-1">
            <img className="section-art art-1" src={section_1} />
            <img className="section-art art-2" src={section_2} />
            <div className="inner-container">
                <div className="section-head">
                    <div className="section-title">
                        <p className="sub-title text-orange">The Buzz</p>
                        <h2 className="title text-white">Latest News & Announcements</h2>
                    </div>
                    <div className="link d-link">
                        <a href="/news/" className="font-exo text-white">View all <img src={link_arrow} /></a>
                    </div>
                </div>
                <div className="row">
                {late.map((post,index) => (
                <div
                  key={`latest${index}`}
                  className="col col-4"
                >
                        <div className="card">
                            <div className="img-hover">
                                <img src={post.featured_image} className="card-img" alt="item1" />
                            </div>
                            <div className="card-body">
                                <a href={post.path}><h4 className="text-white">{post.title}</h4></a>
                                <p className="text-white">
                                    {post.excerpt}
                                </p>
                                <div className="post-details">
                                    <span className="author">Submitted by {post.author}</span>
                                    <span className="date">{post.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
              ))}
                    
                </div>
                <div className="link m-link">
                    <a href="/news/" className="font-exo text-white">View all <img src={link_arrow} /></a>
                </div>
            </div>
        </section>
        <section className="hive-multi-lists-section">
            <img className="section-art art-3" src={section_3} />
            <img className="section-art art-4" src={section_4} />
            <div className="inner-container">
                <div className="section-head">
                    <div className="section-title">
                        <p className="sub-title text-orange-alt">Join Us.</p>
                        <h2 className="title">Upcoming Events</h2>
                    </div>
                </div>
                <div className="row primary-row">
                    <div className="col col-8">
                        <div className="card-exchanges">
                                
                            
                            {events.map((post,index) => (
                <div
                  key={`news${index}`}
                  className="card"
                >
                  <div className="row secondary-row">
                                    <div className="col col-3">
                                        <img src={post.event_image} alt="item1" />
                                    </div>
                                    <div className="col col-9">
                                        <div className="card-body">
                                            <a href={post.path}><h4>{post.title}</h4></a>
                                            <p>
                                                {post.description}
                                            </p>
                                            <div className="post-details">
                                                <span className="author">Submitted by {post.author}</span>
                                                <span className="date">{post.event_date} {post.event_time}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                </div>
              ))}
              <div className="card">
              <div className="row secondary-row">
                                    <div className="col col-3">
                                        <img src={hne3} alt="item1" />
                                    </div>
                                    <div className="col col-9">
                                        <div className="card-body">
                                            <a href="/virtual-industry-day"><h4>{abouts.title}</h4></a>
                                            <p>
                                                {abouts.text}
                                            </p>
                                            <div className="post-details">
                                            <span className="author">Submitted by HOLLY JOER</span>
                                                <span className="date">{abouts.event_date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        </div>
                        <div className="link">
                            <a href="/events/" className="font-exo text-dark">
                                See all events <img src={link_arrow} />
                            </a>
                        </div>
                    </div>
                    <div className="col col-4">
                        <h4>Resources</h4>
                        <div className="oppn-container">
                        {side.map((event,index) => (
                            <div className="oppn-item" key={`event${index}`}>
                                <a href={event.file}><h6>{event.title}</h6></a>
                                <div className="post-details">
                                    <span className="author">Submitted by {event.author}</span>
                                    <span className="date">{event.date}</span>
                                </div>
                            </div>
                        ))}
                        </div>
                        <div className="link type-2">
                            <a href="#" className="font-exo text-dark">
                                LEARN MORE AT SAM.GOV <img src={link_arrow_2} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    feat: allMarkdownRemark(
      filter: {fields: {sourceName: {eq: "blog-posts"}}, frontmatter: {featured: {eq: "Yes"}}}
      sort: { fields: frontmatter___date, order: ASC }
      limit: 3
    ) {
      edges {
        node {
          html
          frontmatter {
            author
            featured
            date
            title
            tags
            featured_image
            excerpt
          }
          fields {
            name
          }
        }
      }
    }
    latenews: allMarkdownRemark(
      filter: {fields: {sourceName: {eq: "blog-posts"}}}
      sort: { fields: frontmatter___date, order: DESC }
      limit: 3
    ) {
      edges {
        node {
          html
          frontmatter {
            author
            featured
            date
            title
            tags
            featured_image
            excerpt
          }
          fields {
            name
          }
        }
      }
    }
    news: allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "blog-posts" } } }
      sort: { fields: frontmatter___date, order: ASC }
      limit: 5
    ) {
      edges {
        node {
          html
          frontmatter {
            author
            featured
            date
            title
            tags
            featured_image
            excerpt
          }
          fields {
            name
          }
        }
      }
    }
    events: allMarkdownRemark(
        filter: { fields: { sourceName: { eq: "events" } } }
        sort: { fields: frontmatter___event_date, order: DESC }
        limit: 6
      ) {
        edges {
          node {
            html
            frontmatter {
              author
              date
              event_date
              event_time
              description
              title
              event_image
              tags
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
              category
              resource_thumb
            }
            fields {
              name
            }
          }
        }
      }
      abouts: markdownRemark(fileAbsolutePath: { regex: "./content/viday.md/" }) {
        html
        frontmatter {
          title
          vimeo_code
          event_date
          sub_title
          text
          }
        }
  }
`;

export default Blog;
