import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, withPrefix, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Block from '../components/block';
import Tagline from '../components/tagline';
import Highlights from '../components/highlights';
import MultiList from '../components/multilist';
import Slider from '../components/slider'
import FeatOpp from '../components/opp'
import logo from '../images/new/logo.svg'

import link_arrow from '../images/new/link-arrow.png';
import arrow_r from '../images/new/arrow-r.svg';

import colbg from '../images/col-bg.jpg';
import hex1 from '../images/new/hex-1.svg'
import hex2 from '../images/new/hex-2.svg'
import hex3 from '../images/new/hex-3.svg'
import art2 from '../images/art2.png'
import art3 from '../images/art3.png'
import art6 from '../images/new/art6.png'
import art5 from '../images/new/art5.png'
import art7 from '../images/new/art7.png'
import art4 from '../images/new/art4.png'

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
  const exchangesf = data.exchangesF.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/event/' + node.fields.name,
  }));
  const resf = data.resF.edges.map(({ node }) => ({
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
  test.sort();
  const testf = exchangesf.concat(resf);
  testf.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  console.log(test);
  const pgVar = 'style-1 animated-hex';
  var options = {year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
  return (
  <Layout pgVar={pgVar}>
    
    <SEO title="Health Information Vision Exchange"
    keywords="healthcare technology (MSV 4,400)"
    image={logo}
    description="Join in the conversation – PEO DHMS wants like-minded innovators and potential business collaborators in healthcare technology to join in the community." />
    <Hero />
    <section className="hive-cards-section">
            <img src={art6} className="art art-1" />
            <img src={art5} className="art art-2" />
            <div className="container">
                <div className="row">
                    <div className="col col-5">
                        <div className="section-head">
                            <div className="section-title">
                                <p className="sub-title text-blue">{posts.four_blocks.small_text}</p>
                                <h2 className="title">{posts.four_blocks.headline}</h2>
                            </div>
                        </div>
                        <p className="section-subhead">{posts.four_blocks.description}</p>
                    </div>
                </div>
                <div className="row cards-row">
                    <Block 
                    title={posts.four_blocks.block_one.title} 
                    description= {posts.four_blocks.block_one.description}
                    link_text= {posts.four_blocks.block_one.link}
                    icon={posts.four_blocks.block_one.icon}
                    />
                    <Block 
                    title={posts.four_blocks.block_two.title} 
                    description= {posts.four_blocks.block_two.description}
                    link_text= {posts.four_blocks.block_two.link}
                    icon={posts.four_blocks.block_two.icon}
                    />
                    <Block 
                    title={posts.four_blocks.block_three.title} 
                    description= {posts.four_blocks.block_three.description}
                    link_text= {posts.four_blocks.block_three.link}
                    icon={posts.four_blocks.block_three.icon}
                    />
                    <Block 
                    title={posts.four_blocks.block_four.title} 
                    description= {posts.four_blocks.block_four.description}
                    link_text= {posts.four_blocks.block_four.link}
                    icon={posts.four_blocks.block_four.icon}
                    />
                </div>
            </div>
        </section>
        <section className="hive-video-section">
            <img src={art7} className="art art-1" />
            <img src={art4} className="art art-2" />
            <div className="inner-container">
                <div className="row">
                    <div className="col col-10">
                        <div className="section-head">
                            <div className="section-title">
                                <h2 className="title">{posts.video_block.title}</h2>
                            </div>
                        </div>
                        <p className="section-subhead">
                            {posts.video_block.description}
                        </p>
                    </div>
                </div>
                <div className="video">
                    <iframe title="vimeo-player" src={posts.video_block.video} frameBorder="0"
                        allowFullScreen></iframe>
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
                        <h2 className="title text-white">HIVE Opportunity Buzz</h2>
                    </div>
                    <div className="link d-link" style={{
                      '--width':'260.25px',
                    }}>
                        <a href="/opportunities" className="font-exo text-white"><span>See all opportunities</span> <img
                                src={link_arrow} /></a>
                    </div>
                </div>
                <div className="row">
                {opps.slice(0,3).map(feat => (
      <div key={feat.title} className="col col-4">
        <FeatOpp title={feat.title}
        description = {feat.excerpt}
        author = {feat.author}
        date = {feat.date}
        thumbnail = {feat.thumbnail}
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
        <section className="hive-news-events-2">
            <img src={art2} className="art" />
            <div className="container">
                <div className="section-head">
                    <div className="section-title">
                        <p className="sub-title text-blue">Whats the buzz?</p>
                        <h2 className="title">News & Events</h2>
                    </div>
                    <div className="link d-link" style={{
                      '--width':'134px',
                    }}>
                        <a href="/news-events" className="font-exo text-dark"><span>View all</span> <img src={link_arrow} /></a>
                    </div>
                </div>
                <div className="row">
                    {test.slice(0,1).map((post,index) => (
                    <div className={`col col-6 ${index}`} key={`First${index}`}>
                        <div className="ne-card main" style={{
                            backgroundImage: `url(${post.thumbnail})`
                            }}>
                            <h3 className="text-white"><a href={post.path}>{post.title} <img src={arrow_r} /></a></h3>
                            <div className="details">
                                <p className="mb-0">{post.excerpt}</p>
                                <span className="by">Submitted by {post.author}</span>
                                <span className="date">{post.date ? new Date(post.date).toLocaleDateString('en-US',options) : ''}</span>
                            </div>
                            <a href={post.path} className="ne-overlay stretched-link"></a>
                        </div>
                      </div>
))}
                    <div className="col col-6">
                <div className="row">
                {test.slice(1,4).map((post,index) => (
                    <>
             {index == 0 &&
             <>
             <div className={`col col-12 ${post.order}`} key={`Second${index}`}>
             <div className="ne-card fixed-h" style={{
                 backgroundImage: `url(${post.thumbnail})`
                 }}>
                 <h3 className="text-white"><a href={post.path}>{post.title} <img src={arrow_r} /></a></h3>
                 <div className="details">
                                <p className="mb-0">{post.excerpt}</p>
                                <span className="by">Submitted by {post.author}</span>
                                <span className="date">{post.date ? new Date(post.date).toLocaleDateString('en-US',options) : ''}</span>
                            </div>
                 <a href={post.path} className="ne-overlay stretched-link">
                 </a>
             </div>
             </div>
            </>
             }
             {index == 1 &&
                <div className={`col col-6  ${post.order}`} key={`Third${index}`}>
                                <div className="ne-card fixed-h" style={{
                 backgroundImage: `url(${post.thumbnail})`
                 }}>
                                    <h3 className="text-white"><a href={post.path}>{post.title} <img src={arrow_r} /></a></h3>
                                    <div className="details">
                                <p className="mb-0">{post.excerpt}</p>
                                <span className="by">Submitted by {post.author}</span>
                                <span className="date">{post.date ? new Date(post.date).toLocaleDateString('en-US',options) : ''}</span>
                            </div>
                                    <a href={post.path} className="ne-overlay stretched-link">
                                        
                                    </a>
                                </div>
                            </div>

             } 
             {index == 2 &&
                <div className={`col col-6  ${post.order}`} key={`Fourth${index}`}>
                                <div className="ne-card fixed-h" style={{
                 backgroundImage: `url(${post.thumbnail})`
                 }}>
                                    <h3 className="text-white"><a href={post.path}>{post.title} <img src={arrow_r} /></a></h3>
                                    <div className="details">
                                <p className="mb-0">{post.excerpt}</p>
                                <span className="by">Submitted by {post.author}</span>
                                <span className="date">{post.date ? new Date(post.date).toLocaleDateString('en-US',options) : ''}</span>
                            </div>
                                    <a href={post.path} className="ne-overlay stretched-link">
                                        
                                    </a>
                                </div>
                            </div>

             }
             
            </>
                ))} 
                            
                        </div>
                    </div>
                </div>
                <div className="link m-link">
                    <a href="/news-events" className="font-exo text-dark">View all <img src={link_arrow} /></a>
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
        video_block {
          description
          title
          video
        }
        four_blocks {
          description
          headline
          small_text
          block_four {
            description
            icon
            link
            title
          }
          block_one {
            description
            icon
            link
            title
          }
          block_three {
            description
            icon
            link
            title
          }
          block_two {
            description
            icon
            title
            link
          }
        }
      }
    }
    exchanges: allMarkdownRemark(
      filter: {fields: {sourceName: {eq: "events"}}, frontmatter: {featured: {eq: "Yes"}}}
      sort: {fields: frontmatter___date, order: ASC}
      limit: 4
    ) {
      edges {
        node {
          html
          frontmatter {
           author
            date
            title
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
    res: allMarkdownRemark(
      filter: {fields: {sourceName: {eq: "blog-posts"}}, frontmatter: {featured: {eq: "Yes"}}}
      sort: {fields: frontmatter___order, order: ASC}
      limit: 4
    ) {
      edges {
        node {
          html
          frontmatter {
            order
            author
            date
            title
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
    exchangesF: allMarkdownRemark(
      filter: {fields: {sourceName: {eq: "events"}}, frontmatter: {featured: {eq: "Yes"}}}
      sort: {fields: frontmatter___date, order: ASC}
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
            thumbnail
            excerpt
          }
          fields {
            name
          }
        }
      }
    }
    resF: allMarkdownRemark(
      filter: {fields: {sourceName: {eq: "blog-posts"}}, frontmatter: {featured: {eq: "Yes"}}}
      sort: {fields: frontmatter___order, order: ASC}
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
            thumbnail
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
      sort: { fields: frontmatter___order, order: ASC }
      limit: 5
    ) {
      edges {
        node {
          html
          frontmatter {
            author
            order
            date
            title
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
  }`
export default IndexPage;
