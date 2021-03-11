import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, withPrefix, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Tagline from '../components/tagline';
import Highlights from '../components/highlights';
import MultiList from '../components/multilist';
import Slider from '../components/slider'
import FeatOpp from '../components/opp'
import st1 from '../images/st1.jpg';
import st2 from '../images/idea4.jpg';
import st3 from '../images/idea-mobile.jpg';
import st4 from '../images/st4.jpg';
import sect_1 from '../images/section-art-1.png';
import sect_2 from'../images/section-art-2.png';
import section_3 from '../images/Hexagon-Patter-On-White-Top.png';
import section_4 from '../images/Hexagon-Patter-On-White-Bottom.png';
import link_arrow from '../images/link-arrow.png';
import link_arrow_2 from '../images/link-arrow-2.png';
import subhex from '../images/sub-hex.svg';
import art5 from '../images/art5.png'
import colbg from '../images/col-bg.jpg';
import hex1 from '../images/hex-1.svg'
import hex2 from '../images/hex-2.svg'
import hex3 from '../images/hex-3.svg'
import art2 from '../images/art2.png'
import art3 from '../images/art3.png'
import { post } from 'jquery';


const IndexPage = ({data}) => {
  const { markdownRemark } = data;

  const posts = data.index.frontmatter;

  const exchanges = data.exchanges.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/event/' + node.fields.name,
  }));
  const res = data.res.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/news/' + node.fields.name,
  }));

  const opps = data.opps.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/opportunity/' + node.fields.name,
  }));
  const test = exchanges.concat(res);
  test.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  console.log(test);
  const pgVar = 'style-1 animated-hex';
  var options = {year: 'numeric', month: 'long', day: 'numeric' };
  return (
  <Layout pgVar={pgVar}>
    
    <SEO title="Home" />
    <Hero />
    <section className="hive-scroller-v-2 animated-hex">
            <img src={art5} className="art" />
            <div className="inner-container">
                <div className="step-container">
                    <div className="step-hexes">
                        <div className="step-hexes-inner">
                            {posts.slider.map((slide,index) => (
                                <div className="step-hex hex-img step-link" data-step={index + 1} key={`part${index}`}>
                                <svg width="327.846" height="318.144" className="sub-hex" data-depth="0.05">
                                <defs>
                                    <linearGradient id="grad2" x1="0%" y1="100%" x2="110%" y2="0%">
                                        <stop offset="0%" style={{
                                            stopColor: 'rgb(226,210,198)',
                                            stopOpacity:1}} />
                                        <stop offset="70%" style={{
                                        stopColor:'rgb(255,255,254)',
                                        stopOpacity:1}} />
                                    </linearGradient>
                                </defs>
                                
                                <path class="st10"
                                    d="M152.2,37.7c6.5,3.7,10.5,10.7,10.5,18.2l0.1,69.5c0,7.5-4,14.5-10.5,18.2l-60.2,34.6c-6.5,3.7-14.5,3.7-21,0
									l-60.5-34.9c-6.5-3.7-10.5-10.7-10.5-18.2L0,55.7c0-7.5,4-14.5,10.5-18.2L70.8,2.8c6.5-3.7,14.5-3.7,21,0L152.2,37.7z" />
                            </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="327.846" height="318.144"
                                    viewBox="0 0 327.846 318.144">
                                    <defs>
                                        <mask id="msk">
                                            <path className="a" transform="translate(50 50) rotate(15 130.5 20.5)"
                                                d="M172.871,0a28.906,28.906,0,0,1,25.009,14.412L245.805,97.1a28.906,28.906,0,0,1,0,28.989L197.88,208.784A28.906,28.906,0,0,1,172.871,223.2H76.831a28.906,28.906,0,0,1-25.009-14.412L3.9,126.092A28.906,28.906,0,0,1,3.9,97.1L51.821,14.412A28.906,28.906,0,0,1,76.831,0Z" />
                                        </mask>
                                    </defs>
                                    <image mask="url(#msk)" height="100%" width="100%" xlinkHref={slide.thumbnail}
                                        preserveAspectRatio="xMidYMin slice">
                                    </image>
                                </svg>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="step-items">
                    {posts.slider.map((slide,index) => (
                        <div className="step-item step-highlight" data-step={index + 1} key={`part2${index}`}>
                            <div className="step-text">
                                <div className="step-hex-mobile hex-img">
                                    <img data-depth="0.05" src={subhex} className="sub-hex" />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="327.846" height="318.144"
                                        viewBox="0 0 327.846 318.144">
                                        <defs>
                                            <mask id="msk11">
                                                <path className="a" transform="translate(50 50) rotate(15 130.5 20.5)"
                                                    d="M172.871,0a28.906,28.906,0,0,1,25.009,14.412L245.805,97.1a28.906,28.906,0,0,1,0,28.989L197.88,208.784A28.906,28.906,0,0,1,172.871,223.2H76.831a28.906,28.906,0,0,1-25.009-14.412L3.9,126.092A28.906,28.906,0,0,1,3.9,97.1L51.821,14.412A28.906,28.906,0,0,1,76.831,0Z" />
                                            </mask>
                                        </defs>
                                        <image mask="url(#msk11)" height="100%" width="100%"
                                            xlinkHref={slide.thumbnail} preserveAspectRatio="xMidYMin slice">
                                        </image>
                                    </svg>
                                </div>
                                <h4>{slide.name}</h4>
                                <p>
                                    {slide.description}
                                </p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </section>
        <section className="hive-3-col-section-2 animated-hex" style={{
          backgroundImage: `url(${colbg})`
          }}>
            <img data-depth="0.05" src={hex1} className="hex-img img-1" />
            <img data-depth="0.05" src={hex2} className="hex-img img-2" />
            <img data-depth="0.05" src={hex3} className="hex-img img-3" />
            <div className="inner-container">
                <div className="section-head">
                    <div className="section-title">
                        <p className="sub-title text-orange">The pollination platform</p>
                        <h2 className="title text-white">HIVE opportunity buzz.</h2>
                    </div>
                    <div className="link d-link">
                        <a href="/opportunities" className="font-exo text-white">See all opportunities <img
                                src={link_arrow} /></a>
                    </div>
                </div>
                <div className="row ">
                {opps.slice(0,3).map(feat => (
      <div key={feat.title} className="col col-4">
        <FeatOpp title={feat.title}
        description = {feat.excerpt}
        author = {feat.author}
        date = {feat.date}
        thumbnail = {feat.featured_image}
        link = {feat.path}/>
      </div>
    )) }
                    
                </div>
                <div className="link m-link">
                    <a href="/opportunities" className="font-exo text-white">See all opportunities <img
                            src={link_arrow} /></a>
                </div>
            </div>
        </section>
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
                    <div className="col col-8">
                        <div className="card-exchanges">
                        {test.map(exchange =>(
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
                      <a href="#" className="author">Submitted by {exchange.author}</a>
                      <span className="date">{exchange.date ? new Date(exchange.date).toLocaleDateString('en-US',options) : ''}</span>
                  </div>
              </div>
          </div>
      </div>
  </div>
  ))}
                            
                          
                        </div>
                        <div className="link">
                            <a href="/news-events" className="font-exo text-dark">
                                See all news posts <img src={link_arrow} />
                            </a>
                        </div>
                    </div>
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
                </div>
            </div>
        </section>
     <Highlights />
    
  </Layout>
  
);
    };
    export const pageQuery = graphql`
  query  {
    index: markdownRemark(fileAbsolutePath: { regex: "./content/home.md/" }) {
      html
      frontmatter {
        slider{
          name
          description
          thumbnail
        }
      }
    }
    exchanges: allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "events" } } }
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
    res: allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "blog-posts" } } }
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
    opps: allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "opps" } } }
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
            featured_image
            excerpt
          }
          fields {
            name
          }
        }
      }
    }
  }`
export default IndexPage;
