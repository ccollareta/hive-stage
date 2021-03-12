import React from 'react';
import { graphql, Link, withPrefix } from 'gatsby';
import PData from '../pages/content/news.yml';
import { Helmet } from 'react-helmet'
import Layout from '../components/layout';
import SEO from '../components/seo';
import HiveIdeas from '../components/hiveideas' 
import prev from '../images/prev.png';
import next from '../images/next.png';
import section_1 from '../images/section-art-1.png';
import section_2 from '../images/section-art-2.png';
import section_3 from '../images/Hexagon-Patter-On-White-Top.png';
import section_4 from '../images/Hexagon-Patter-On-White-Bottom.png';
import link_arrow from '../images/link-arrow.png';
import link_arrow_2 from '../images/link-arrow-2.png';
import hne3 from '../images/idea2.png';
import art1 from '../images/art1.png';
import art5 from '../images/art5.png';
import hovericon from '../images/hover-icon.svg'
import arrow_r from '../images/arrow-r.svg'
import art2 from '../images/art2.png'
import art3 from '../images/art3.png'

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
    path: '/opportunity/' + node.fields.name,
  }));

  const test = late.concat(events);
  test.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  console.log(test);
  const abouts = data.abouts.frontmatter;
  const pgVar = 'style-3';
  var options = {year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }
  return (
    <Layout pgVar={pgVar}>
     
      <SEO title="News & Events" />
      <section class="hive-news-events-2 style-2">
            <div class="inner-container">
                <div class="featured-news">
                    <div class="row featured-item">
                        <img src={art1} class="art art-1" />
                        <img src={art5} class="art art-2" />
                        {feat.slice(0,1).map((feat_post,index) => (
                          <>
                    <div class="col col-6">
                            <div class="text">
                                <div class="section-head">
                                    <div class="section-title">
                                        <p class="sub-title text-orange-alt">FEATURED NEWS</p>
                                        <h2 class="title">{feat_post.title}</h2>
                                    </div>
                                </div>
                                <p>
                                {feat_post.excerpt}
                                </p>
                                <a href={feat_post.path} class="btn rounded"><span>Read More</span></a>
                            </div>
                        </div>
                        <div class="col col-6">
                            <div class="image" style={{
                              backgroundImage: `url(${feat_post.featured_image})`
                              }}></div>
                        </div>
                </>
              ))}
                    </div>
                </div>
            </div>
            <div class="inner-container">
                <div class="section-head">
                    <div class="section-title">
                        <p class="sub-title text-orange-alt">Whats the buzz?</p>
                        <h2 class="title">News & Upcoming Events</h2>
                    </div>
                    <div class="link d-link">
                        <a href="/news" class="font-exo text-dark">View all <img src={link_arrow} /></a>
                    </div>
                </div>
                <div class="row">
                {test.slice(0,1).map((post,index) => (
            <div className={`col col-6 ${index}`} key={`First${index}`}>
                        <div className="ne-card main" style={{
                            backgroundImage: `url(${post.featured_image})`
                            }}>
                            <h3 className="text-white">{post.title} <img src={arrow_r} /></h3>
                            <a href={post.path} className="ne-overlay">
                                <img src={hovericon} />
                            </a>
                        </div>
                    </div>
))}

            <div className="col col-6">
                <div className="row">
                {test.slice(1,4).map((post,index) => (
                    <>
             {index == 0 &&
             <>
             <div className={`col col-12 ${index}`} key={`Second${index}`}>
             <div className="ne-card fixed-h" style={{
                 backgroundImage: `url(${post.featured_image})`
                 }}>
                 <h3 className="text-white">{post.title}</h3>
                 <a href={post.path} className="ne-overlay">
                     <img src={hovericon} />
                 </a>
             </div>
             </div>
            </>
             }
             {index == 1 &&
                <div className={`col col-6  ${index}`} key={`Third${index}`}>
                                <div className="ne-card fixed-h" style={{
                 backgroundImage: `url(${post.featured_image})`
                 }}>
                                    <h3 className="text-white">{post.title}</h3>
                                    <a href={post.path} className="ne-overlay">
                                        <img src={hovericon} />
                                    </a>
                                </div>
                            </div>

             } 
             {index == 2 &&
                <div className={`col col-6  ${index}`} key={`Fourth${index}`}>
                                <div className="ne-card fixed-h" style={{
                 backgroundImage: `url(${post.featured_image})`
                 }}>
                                    <h3 className="text-white">{post.title}</h3>
                                    <a href={post.path} className="ne-overlay">
                                        <img src={hovericon} />
                                    </a>
                                </div>
                            </div>

             }
             
            </>
                ))} 
                </div>
                </div>
                </div>
                <div class="link m-link">
                    <a href="/news" class="font-exo text-dark">View all <img src={link_arrow} /></a>
                </div>
            </div>
        </section>
        <HiveIdeas />
        <section className="hive-multi-lists-section-2">
            <img className="art art-1" src={art2} />
            <img className="art art-2" src={art3} />
            <div className="inner-container">
                <div className="section-head">
                    <div className="section-title">
                        <p className="sub-title text-orange-alt">NOW WITH A FULL DOSE OF VITAMIN BEE!</p>
                        <h2 className="title">Latest New Posts</h2>
                    </div>
                </div>
                <div className="row primary-row">
                    <div className={PData.hide ? "col col-12" : "col col-8"}>
                        <div className="card-exchanges">
                        {late.map(exchange =>(
      <div className="card" key={exchange.title}>
      <div className="row secondary-row">
          <div className="col col-3">
              <img src={exchange.featured_image} alt="item1" />
          </div>
          <div className="col col-9">
              <div className="card-body">
                  <a href={exchange.path}>
                      <h4>{exchange.title}</h4>
                  </a>
                  <p>
                  {exchange.description}
                  </p>
                  <div className="post-details">
                      <span className="author">Submitted by {exchange.author}</span>
                      <span className="date">{exchange.date ? new Date(exchange.date).toLocaleDateString('en-US',options) : ''}</span>
                  </div>
              </div>
          </div>
      </div>
  </div>
  ))}
                            
                          
                        </div>
                        <div className="link">
                            <a href="/news" className="font-exo text-dark">
                                See all news posts <img src={link_arrow} />
                            </a>
                        </div>
                    </div>
                    {!PData.hide &&
                    <div className="col col-4">
                        <h4>Featured News Posts</h4>
                        <div className="oppn-container">
                            
                        {test.map((res,index)=>(
                    <div className="oppn-item" key={index}>
                                <a href={res.path}>
                                    <h6>{res.title}</h6>
                                </a>
                                <div className="post-details">
                                    <a href={res.path} className="author">Submitted by {res.author}</a>
                                    <span className="date">{res.date ? new Date(res.date).toLocaleDateString('en-US',options) : ''}</span>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                  }
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
    latenews: allMarkdownRemark(
      filter: {fields: {sourceName: {eq: "blog-posts"}}}
      sort: { fields: frontmatter___date, order: DESC }
      limit: 4
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
      sort: { fields: frontmatter___date, order: DESC }
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
      side: allMarkdownRemark(
        filter: {fields: {sourceName: {eq: "opps"}}}
        sort: { fields: frontmatter___date, order: DESC }
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
