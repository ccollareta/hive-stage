import React from 'react';
import { graphql, Link, withPrefix  } from 'gatsby';
import Tags from '../../meta/tags.yml'
import Collections from '../../meta/collections.yml';
import HiveIdeas2 from '../components/hiveideas2';
import { Helmet } from 'react-helmet';
import art2 from '../images/new/art2.png';
import art5 from '../images/new/art5.png';
import hovericon from '../images/hover-icon.svg';
import hex10 from '../images/new/hex-10.svg';
import hex11 from '../images/new/hex-11.svg';
import hex12 from '../images/new/hex-12.svg';
import herobg3 from '../images/new/hero-bg3.png';
import colbg from '../images/col-bg.jpg';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Blog = ({ data, pageContext }) => {
  const posts = data.posts.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/opportunity/' + node.fields.name,
  }));
  const feat = data.feat.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/opportunity/' + node.fields.name,
  }));
  const pgVar = 'style-2'
  var options = {year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }
  return (
    <Layout pgVar={pgVar}>
      <SEO title="Opportunities in Emerging Trends in Healthcare Tech"
      keywords="emerging trends in healthcare technology (MSV 70)"
      description="Partner with collaborative, like-minded industry partners to bring cutting-edge software development, UI/UX, and human-centric design to the PEO DHMS." />
      <section className="hero-section-2 style-3 animated-hex"
            style={{
              '--bg-img':`url(${herobg3})`,
               '--bg-img-mobile': `url(${colbg})`
               }}>
            <img src={art5} className="art art-1" />
            <img src={art2} className="art art-2" />
            {feat.slice(0,1).map((feat_post,index) => (
                          <>
            <div className="hero-hex">
                <img data-depth="0.05" src={hex10} className="hex-img img-1" />
                <img data-depth="0.05" src={hex11} className="hex-img img-2" />
                <img data-depth="0.05" src={hex12} className="hex-img img-3" />
                
				<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1043.739" height="964.99" viewBox="0 0 1043.739 964.99">
					<defs>
						
						<linearGradient id="linear-gradient" y1="1" x2="1" y2="1" gradientUnits="objectBoundingBox">
							<stop offset="0" stopColor="#f15a29"></stop>
							<stop offset="1" stopColor="#f7941d"></stop>
						</linearGradient>
						<clipPath id="clip-path">
							<path className="clso-1" d="M612.315,651.091,766.79,384.59a76.676,76.676,0,0,0-.038-76.866L609.873,39.848A77.293,77.293,0,0,0,542.984,1.386L231.635,0a77.3,77.3,0,0,0-66.856,38.406L10.308,304.9a76.662,76.662,0,0,0,.041,76.862L167.228,649.648a77.3,77.3,0,0,0,66.891,38.467l311.35,1.378A77.3,77.3,0,0,0,612.315,651.091Z" transform="matrix(0.966, 0.259, -0.259, 0.966, 178.454, 0)"></path>
						</clipPath>
						<clipPath id="clip-path-2">
							<path className="clso-1" d="M491.718,522.857,615.769,308.844a61.574,61.574,0,0,0-.03-61.727L489.757,32A62.07,62.07,0,0,0,436.042,1.113L186.014,0a62.072,62.072,0,0,0-53.689,30.842L8.278,244.849a61.563,61.563,0,0,0,.033,61.724L134.292,521.7a62.076,62.076,0,0,0,53.717,30.891L438.038,553.7A62.073,62.073,0,0,0,491.718,522.857Z" transform="matrix(0.966, 0.259, -0.259, 0.966, 143.307, 0)"></path>
						</clipPath>
						<image id="imageOpp" width="1584.46" height="753.059" xlinkHref={feat_post.thumbnail}></image>
					</defs>
					<g transform="translate(57.332 48.932)">
						<path className="clso-2" d="M690.042,721.8,864.127,426.359a83.808,83.808,0,0,0-.043-85.214L687.29,44.176A87.384,87.384,0,0,0,611.911,1.537L261.039,0A87.389,87.389,0,0,0,185.7,42.577L11.617,338.015a83.793,83.793,0,0,0,.046,85.21L188.456,720.2a87.392,87.392,0,0,0,75.382,42.644l350.872,1.528A87.391,87.391,0,0,0,690.042,721.8Z" transform="matrix(0.966, 0.259, -0.259, 0.966, 140.503, -48.932)"></path>
						<path className="clso-3" d="M612.315,651.091,766.79,384.59a76.676,76.676,0,0,0-.038-76.866L609.873,39.848A77.293,77.293,0,0,0,542.984,1.386L231.635,0a77.3,77.3,0,0,0-66.856,38.406L10.308,304.9a76.662,76.662,0,0,0,.041,76.862L167.228,649.648a77.3,77.3,0,0,0,66.891,38.467l311.35,1.378A77.3,77.3,0,0,0,612.315,651.091Z" transform="matrix(0.966, 0.259, -0.259, 0.966, 178.454, 0)"></path>
						<g className="clso-4" transform="translate(0.001 0)">
							<use transform="translate(-365.03 56.54)" xlinkHref="#imageOpp"></use>
						</g>
						<g className="clso-5" transform="translate(91.493 85.392)">
							<use transform="translate(-456.522 -28.851)" xlinkHref="#imageOpp"></use>
						</g>
					</g>
				</svg>
            </div>
            <div className="container">
                <div className="hero-action">
                    <div className="row">
                        <div className="col-5">
                            <div className="featured-item">
                                <div className="section-head">
                                    <div className="section-title">
                                        <p className="sub-title text-blue">Featured Opportunity</p>
                                        <h2 className="title">{feat_post.title}</h2>
                                    </div>
                                </div>
                                <p className="item-content">
                                {feat_post.excerpt}
                                </p>
                                <div className="post-details">
                                    <span href="#" className="author">Submitted by {feat_post.author}</span>
                                    <span className="date">{feat_post.date ? new Date(feat_post.date).toLocaleDateString('en-US',options) : ''}</span>
                                </div>
                                <a className="btn rounded" href={feat_post.path}><span>Read More</span></a>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            </>
                ))}
        </section>
      <section className="all-news">
            <div className="inner-container">
                <h1>All Opportunites</h1>
                <div className="filter-form">
                    <div className="filters">
                        <select className="filter" data-filter-group="0">
                            <option value="title">Category</option>
                            {Tags.tags.map((tag,index) => (
                              <option value={`.${tag.slug}`} key={tag.slug}>{tag.name}</option>
                              ))}
                        </select>
                        <select className="filter" data-filter-group="1">
                            <option value="title">Collection</option>
                            {Collections.collections.map((tag,index) => (
                              <option value={`.${tag.slug}`} key={tag.slug}>{tag.name}</option>
                              ))}
                        </select>
                        <a href="javascript: void(0);" className="btn rounded outline btn-filter">
                            <span>Sort & Filter</span>
                        </a>
                    </div>
                    <div className="selected-filters"></div>
                </div>

      
            
                <div className="row filter-container">
                {posts.map((post,index) => (
                <div
                  key={`news${index}`}
                  className={`col col-4 filter-item ${post.tags ? post.tags.join(' ') : ''} ${post.collections ? post.collections.join(' '): ''}`}
                >
                  <div className="card">
                            <div className="card-img">
                            <a href={post.path}> <img src={post.thumbnail} className="img-fluid" alt="item1" />
                            </a>
                            </div>
                            <div className="card-body">
                                <a href={post.path}>
                                    <h4>{post.title}</h4>
                                </a>
                                <p>
                                    {post.excerpt}
                                </p>
                                <div className="post-details">
                                    <span className="author">Submitted by {post.author}</span>
                                    <span className="date">{post.date ? new Date(post.date).toLocaleDateString('en-US',options) : ''}</span>
                                </div>
                            </div>
                        </div>
                    </div>
              ))}
                    
                    
                </div>
                <nav className="paged">
                { /* Pagination added here */ }
                </nav>
            </div>
        </section>
        <HiveIdeas2 />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
      posts: allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "opps" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            author
            date
            title
            tags
            collections
            excerpt
            featured_image
            thumbnail
          }
          fields {
            name
          }
        }
      }
    }
    feat: allMarkdownRemark(
      filter: {fields: {sourceName: {eq: "opps"}}, frontmatter: {featured: {eq: "Yes"}}}
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
            thumbnail
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
