import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, withPrefix } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Tagline from '../components/tagline';
import Highlights from '../components/highlights';
import MultiList from '../components/multilist';
import Slider from '../components/slider'
import FeatOpp from '../components/opp'
import st1 from '../images/st1.jpg';
import st2 from '../images/st2.jpg';
import st3 from '../images/st3.jpg';
import st4 from '../images/st4.jpg';
import sect_1 from '../images/section-art-1.png';
import sect_2 from'../images/section-art-2.png';
import sect_3 from '../images/section-art-3.png';
import link_arrow from '../images/link-arrow.png';
import link_arrow_2 from '../images/link-arrow-2.png';


const IndexPage = ({data}) => {
  const { markdownRemark } = data;

  const posts = data.index.frontmatter;

  const exchanges = data.exchanges.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/exchange/' + node.fields.name,
  }));

  const opps = data.opps.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/opportunity/' + node.fields.name,
  }));

  const pgVar = 'style-1';
  return (
  <Layout pgVar={pgVar}>
    
    <SEO title="Home" />
    <Hero />
    <section className="hive-scroller-section">
            <div className="inner-container">
                <div className="row">
                    <div className="col col-6">
                        <div className="steps">
                            <p className="step-intro font-exo">HIVE Is An Information Exchange Platform</p>
                            <div className="step-nav">
                              {posts.slider.map((slide,index) =>(
                                <h1 className={`step-title ${index === 0 ? 'active' : '' }`} key={index}>{slide.name}</h1>
                              ))}
                            </div>
                        </div>
                    </div>
                    <div className="col col-6">
                        <div className="step-items">
                        {posts.slider.map((slide) =>(
                          <div className="step-item" key={slide.name}>
                          <img src={slide.thumbnail} className="img-fluid" alt="step-item1" />
                          <h4>{slide.name}</h4>
                          <p>
                              {slide.description}
                          </p>
                      </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="hive-3-col-section style-1">
            <img className="section-art art-1" src={sect_1} />
            <img className="section-art art-2" src={sect_2} />
            <div className="inner-container">
                <div className="section-head">
                    <div className="section-title">
                        <p className="sub-title text-orange">The pollination platform</p>
                        <h2 className="title text-white">HIVE opportunity buzz.</h2>
                    </div>
                    <div className="link d-link">
                        <Link to="/" className="font-exo text-white">See all opportunities <img
                                src={link_arrow} /></Link>
                    </div>
                </div>
                <div className="row ">
                {opps.map(feat => (
      <div key={feat.title} className="col col-4">
        <FeatOpp title={feat.title}
        description = {feat.description}
        author = {feat.author}
        date = {feat.date}
        thumbnail = {feat.event_image}
        link = {feat.path}/>
      </div>
    )) }
                </div>
                <div className="link m-link">
                    <a href="#" className="font-exo text-white">See all opportunities <img
                            src={link_arrow} /></a>
                </div>
            </div>
        </section>
        <section className="hive-multi-lists-section">
    <img className="section-art art-3" src={sect_3} />
    <div className="inner-container">
        <div className="section-head">
            <div className="section-title">
                <p className="sub-title text-orange-alt">NOW WITH A FULL DOSE OF VITAMIN BEE!</p>
                <h2 className="title">Popular innovation exchanges.</h2>
            </div>
        </div>
        <div className="row primary-row">
            <div className="col col-8">
                <div className="card-exchanges">
                  {exchanges.map(exchange =>(
                  <div className="card" key={exchange.title}>
                        <div className="row secondary-row">
                            <div className="col col-3">
                                <img src={exchange.event_image} alt="item1" />
                            </div>
                            <div className="col col-9">
                                <div className="card-body">
                                    <Link to={exchange.path}><h4>{exchange.title}</h4></Link>
                                    <p>
                                        {exchange.description}
                                    </p>
                                    <div className="post-details">
                                        <span className="author">Submitted by {exchange.author}</span>
                                        <span className="date">{exchange.date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="link">
                    <a href="#" className="font-exo text-dark">
                        See all exchanges <img src={link_arrow} />
                    </a>
                </div>
            </div>
            <div className="col col-4">
                <h4>Contracting opportunities.</h4>
                <div className="oppn-container">
                    <div className="oppn-item">
                        <a href="#"><h6>Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor</h6></a>
                        <div className="post-details">
                            <span className="author">Submitted by Organization</span>
                            <span className="date">June 26, 2020</span>
                        </div>
                    </div>
                    <div className="oppn-item">
                        <a href="#"><h6>Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor</h6></a>
                        <div className="post-details">
                            <span className="author">Submitted by Organization</span>
                            <span className="date">June 26, 2020</span>
                        </div>
                    </div>
                    <div className="oppn-item">
                        <a href="#"><h6>Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor</h6></a>
                        <div className="post-details">
                            <span className="author">Submitted by Organization</span>
                            <span className="date">June 26, 2020</span>
                        </div>
                    </div>
                    <div className="oppn-item">
                        <a href="#"><h6>Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor</h6></a>
                        <div className="post-details">
                            <span className="author">Submitted by Organization</span>
                            <span className="date">June 26, 2020</span>
                        </div>
                    </div>
                    <div className="oppn-item">
                        <a href="#"><h6>Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor</h6></a>
                        <div className="post-details">
                            <span className="author">Submitted by Organization</span>
                            <span className="date">June 26, 2020</span>
                        </div>
                    </div>
                    <div className="oppn-item">
                        <a href="#"><h6>Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor</h6></a>
                        <div className="post-details">
                            <span className="author">Submitted by Organization</span>
                            <span className="date">June 26, 2020</span>
                        </div>
                    </div>
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
      {/*<MultiList /> */}
     <Highlights />
    <Tagline />
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
        featured_opportunity{
          opportunity{
            title
            description
            resource_thumb
            link
          }
        }
      }
    }
    exchanges: allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "exchanges" } } }
      sort: { fields: frontmatter___event_date, order: ASC }
      limit: 5
    ) {
      edges {
        node {
          html
          frontmatter {
            author
            date
            event_date
            description
            event_image
            title
            tags
          }
          fields {
            name
          }
        }
      }
    }
    opps: allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "opps" } } }
      sort: { fields: frontmatter___date, order: ASC }
      limit: 3
    ) {
      edges {
        node {
          html
          frontmatter {
            author
            date
            title
            event_image
            description
          }
          fields {
            name
          }
        }
      }
    }
  }`
export default IndexPage;
