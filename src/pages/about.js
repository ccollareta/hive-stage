import React from 'react';
import slugify from 'react-slugify';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HiveIdeas from '../components/hiveideas';
import Block from '../components/block';
import Team from '../../meta/authors.yml';
import { Link, withPrefix, graphql } from 'gatsby';

import { Helmet } from 'react-helmet';
import link_arrow from '../images/link-arrow.png';

import art_5 from '../images/art5.png';
import art2 from '../images/art2.png';


import art1 from '../images/new/art1.png'
import hex_2 from '../images/new/hero-hex2.png'
import hex3 from '../images/new/hex-3.svg';
import hex2 from '../images/new/hex-2.svg';
import hex1 from '../images/new/hex-1.svg';
import idea_bg from '../images/new/col-bg.jpg';
import hex4 from '../images/new/hex-4.svg';
import hex5 from '../images/new/hex-5.svg';
import hex6 from '../images/new/hex-6.svg'
import art6 from '../images/new/art6.png';
import art5 from '../images/new/art5.png';
import pophex from '../images/new/pop-hex.svg'
import pophex2 from '../images/new/pop-hex2.svg'
import popart from '../images/new/pop-art.svg'


import hovericon from '../images/hover-icon.svg'
import arrow_r from '../images/arrow-r.svg'


const AboutPage = ({data}) => {
  const { markdownRemark } = data;
  const posts = data.abouts.frontmatter;
  const news = data.news.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/news/' + node.fields.name,
  }));
  const events = data.events.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/event/' + node.fields.name,
  }));

  const test = news.concat(events);
  test.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const pgVar = 'style-1 animated-hex';
  return (
  <Layout pgVar={pgVar}>
    <SEO title="Healthcare Technology Innovation in Collaboration"
    keywords="healthcare technology innovation (MSV 260)"
    description="The HIVE brings together a synergistic group of like-minded tech pros to create healthcare technology innovative across the Federal IT landscape. " />
        <section className="hero-section-2 style-2 animated-hex" style={{
    backgroundImage: `url(${posts.top_section.hero_image})`
  }}>
            <img src={art1} className="art" />
            <div className="hero-hex">
                <img src={hex_2} />
            </div>
            <div className="container">
                <img data-depth="0.05" src={hex5} className="hex-img img-1" />
                <img data-depth="0.05" src={hex6} className="hex-img img-2" />
                <img data-depth="0.05" src={hex4} className="hex-img img-3" />
                <div className="hero-action">
                    <div className="row">
                        <div className="col-7">
                            <h1 className="hero-title text-white">{posts.top_section.title}</h1>
                            <p className="hero-subtitle text-white">
                            {posts.top_section.text_block}
                            </p>
                            <div className="hero-ctas">
                                <a className="btn rounded go-down" href={posts.top_section.button.button_link}><span>{posts.top_section.button.button_text}</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="hive-cards-section style-2" id="hive">
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
                        <p className="section-subhead">
                        {posts.four_blocks.description}
                        </p>
                    </div>
                </div>
                <div className="row cards-row">
                <Block 
                    title={posts.four_blocks.block_one.title} 
                    description= {posts.four_blocks.block_one.description}
                   
                    icon={posts.four_blocks.block_one.icon}
                    />
                    <Block 
                    title={posts.four_blocks.block_two.title} 
                    description= {posts.four_blocks.block_two.description}
                    
                    icon={posts.four_blocks.block_two.icon}
                    />
                    <Block 
                    title={posts.four_blocks.block_three.title} 
                    description= {posts.four_blocks.block_three.description}
                    
                    icon={posts.four_blocks.block_three.icon}
                    />
                    <Block 
                    title={posts.four_blocks.block_four.title} 
                    description= {posts.four_blocks.block_four.description}
                    
                    icon={posts.four_blocks.block_four.icon}
                    />
                </div>
            </div>
        </section>
        <section className="hive-partners-2">
            <div className="inner-container">
                <div className="row">
                    <div className="col col-9 text-center">
                        <div className="section-head">
                            <div className="section-title">
                                <p className="sub-title text-blue">{posts.logo_section.subtitle}</p>
                                <h2 className="title">{posts.logo_section.title}</h2>
                            </div>
                        </div>
                        <p>
                        {posts.logo_section.description}
                        </p>
                    </div>
                    <div className="col col-12">
                        <div className="img-container logos">
                            {posts.logo_section.logos.map((logo,index) => (
                                <a href={logo.link}><img src={logo.logo} /></a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="hive-members animated-hex" style={{
        backgroundImage: `url(${idea_bg})`
    }}>
            <img data-depth="0.05" src={hex1} className="hex-img img-1" />
            <img data-depth="0.05" src={hex2} className="hex-img img-2" />
            <img data-depth="0.05" src={hex3} className="hex-img img-3" />
            <div className="inner-container">
                <div className="section-head">
                    <div className="section-title">
                        <p className="sub-title text-orange">Check out the members of our hive!</p>
                        <h2 className="title text-white">Meet Our Bee Hive!</h2>
                    </div>
                </div>
                <div className="hexagonal-grid">
                <div className="hex-grid small-row">
               
                        {Team.team_member.slice(0,5).map((post,index) => (
                        <>
            
                        <div className="round-hex" data-lity-target={`#${slugify(post.name)}`} data-lity>
                            <div className="inner-round-hex">
                                <img src={post.team_image} />
                                <div className="hex-info">
                                    <h5 className="mb-0">{post.name}</h5>
                                    <span>{post.title}</span>
                                </div>
                            </div>
                        </div>
               </>
                    ))}
                        
            
                        
                    </div>
                    <div className="hex-grid medium-row">
                    {Team.team_member.slice(5,7).map((post,index) => (
                        <>
                        <div className="round-hex" data-lity-target={`#${slugify(post.name)}`} data-lity>
                            <div className="inner-round-hex">
                                <img src={post.team_image} />
                                <div className="hex-info">
                                    <h5 className="mb-0">{post.name}</h5>
                                    <span>{post.title}</span>
                                </div>
                            </div>
                        </div>
               </>
                    ))}
                        
                        <div className="round-hex empty"></div>
                        <div className="round-hex empty"></div>
                        {Team.team_member.slice(7,9).map((post,index) => (
                        <>
                        <div className="round-hex" data-lity-target={`#${slugify(post.name)}`} data-lity>
                            <div className="inner-round-hex">
                                <img src={post.team_image} />
                                <div className="hex-info">
                                    <h5 className="mb-0">{post.name}</h5>
                                    <span>{post.title}</span>
                                </div>
                            </div>
                        </div>
               </>
                    ))}
                        
                        
                    </div>
                    <div className="hex-grid large-row">
                    {Team.team_member.slice(9,11).map((post,index) => (
                        <>
                        <div className="round-hex" data-lity-target={`#${slugify(post.name)}`} data-lity>
                            <div className="inner-round-hex">
                                <img src={post.team_image} />
                                <div className="hex-info">
                                    <h5 className="mb-0">{post.name}</h5>
                                    <span>{post.title}</span>
                                </div>
                            </div>
                        </div>
               </>
                    ))}
                    <div className="round-hex empty"></div>
                    <div className="round-hex bordered" data-lity-target={`#${slugify(Team.leader.name)}`} data-lity>
                            <div className="inner-round-hex">
                                <img src={Team.leader.team_image} />
                                <div className="hex-info">
                                    <h5 className="mb-0">{Team.leader.name}</h5>
                                    <span>{Team.leader.title}</span>
                                </div>
                            </div>
                        </div>
                        <div className="round-hex empty"></div>
                        
                        {Team.team_member.slice(11,13).map((post,index) => (
                        <>
                        <div className="round-hex" data-lity-target={`#${slugify(post.name)}`} data-lity>
                            <div className="inner-round-hex">
                                <img src={post.team_image} />
                                <div className="hex-info">
                                    <h5 className="mb-0">{post.name}</h5>
                                    <span>{post.title}</span>
                                </div>
                            </div>
                        </div>
               </>
                    ))}
                        
                    </div>
                    <div className="hex-grid medium-row">
                    
                        {Team.team_member.slice(13,15).map((post,index) => (
                        <>
                        <div className="round-hex" data-lity-target={`#${slugify(post.name)}`} data-lity>
                            <div className="inner-round-hex">
                                <img src={post.team_image} />
                                <div className="hex-info">
                                    <h5 className="mb-0">{post.name}</h5>
                                    <span>{post.title}</span>
                                </div>
                            </div>
                        </div>
               </>
                    ))}
                    <div className="round-hex empty"></div>
                    <div className="round-hex empty"></div>
                        {Team.team_member.slice(15,17).map((post,index) => (
                        <>
                        <div className="round-hex" data-lity-target={`#${slugify(post.name)}`} data-lity>
                            <div className="inner-round-hex">
                                <img src={post.team_image} />
                                <div className="hex-info">
                                    <h5 className="mb-0">{post.name}</h5>
                                    <span>{post.title}</span>
                                </div>
                            </div>
                        </div>
               </>
                    ))}
                        
                        
                    </div>
                    <div className="hex-grid small-row">
                    
                        {Team.team_member.slice(17,19).map((post,index) => (
                        <>
                        <div className="round-hex" data-lity-target={`#${slugify(post.name)}`} data-lity>
                            <div className="inner-round-hex">
                                <img src={post.team_image} />
                                <div className="hex-info">
                                    <h5 className="mb-0">{post.name}</h5>
                                    <span>{post.title}</span>
                                </div>
                            </div>
                        </div>
               </>
                    ))}
                        
                        
                        <div className="round-hex empty"></div>
                        {Team.team_member.slice(19,21).map((post,index) => (
                        <>
                        <div className="round-hex" data-lity-target={`#${slugify(post.name)}`} data-lity>
                            <div className="inner-round-hex">
                                <img src={post.team_image} />
                                <div className="hex-info">
                                    <h5 className="mb-0">{post.name}</h5>
                                    <span>{post.title}</span>
                                </div>
                            </div>
                        </div>
               </>
                    ))}
                    </div>

                </div>
            </div>
        </section>
        {Team.team_member.map((post,index) => (
                        <>
                   <div className="member-profile lity-hide" id={slugify(post.name)} key={index}>
                   
                   <div className="popup-body">
                       <img src={popart} className="pop-art" />
                       <div className="row">
                           <div className="col col-4 image">
                               <div className="hexagon-img">
                                   
                                   <svg xmlns="http://www.w3.org/2000/svg" width="327.846" height="318.144"
                                       viewBox="0 0 327.846 318.144">
                                       <defs>
                                           <mask id={`msk${slugify(post.name)}`}>
                                               <path className="a" transform="translate(111.598) rotate(30)"
                                                   d="M172.871,0a28.906,28.906,0,0,1,25.009,14.412L245.805,97.1a28.906,28.906,0,0,1,0,28.989L197.88,208.784A28.906,28.906,0,0,1,172.871,223.2H76.831a28.906,28.906,0,0,1-25.009-14.412L3.9,126.092A28.906,28.906,0,0,1,3.9,97.1L51.821,14.412A28.906,28.906,0,0,1,76.831,0Z" />
                                           </mask>
                                       </defs>
                                       <image mask={`url(#msk${slugify(post.name)})`} height="100%" width="100%" xlinkHref={post.team_image}
                                           preserveAspectRatio="xMidYMin slice">
                                       </image>
                                   </svg>
                               </div>
                           </div>
                           <div className="col col-5">
                               <h2 className="mb-0">{post.name}</h2>
                               <h5 className="text-blue">{post.title}</h5>
                               <p>{post.description}</p>
                               <div className="numbers">
                                   <div className="number">
                                       <span className="num">{post.years}</span>
                                       <span className="text">Years In Governement</span>
                                   </div>
                                   <div className="number">
                                       <span className="num">{post.states}</span>
                                       <span className="text">States Visited</span>
                                   </div>
                                   <div className="number">
                                       <span className="num">{post.coffee}</span>
                                       <span className="text">Cups Of Coffee
                                           In A Day</span>
                                   </div>
                               </div>
                           </div>
                           <div className="col col-3">
                               <h5>Personal</h5>
                               <ul className="list-unstyled personal-details">
                                   <li>
                                       <span className="detail">Favorite Book:<br /></span>
                                       <span className="answer">{post.personal.book}</span>
                                   </li>
                                   <li>
                                       <span className="detail">Favorite Sports Team:<br /></span>
                                       <span className="answer">{post.personal.team}</span>
                                   </li>
                                   <li>
                                       <span className="detail">Favorite Flower/Plant:<br /></span>
                                       <span className="answer">{post.personal.plant}</span>
                                   </li>
                                   <li>
                                       <span className="detail">Favorite Food:<br /></span>
                                       <span className="answer">{post.personal.food}</span>
                                   </li>
                                   <li>
                                       <span className="detail">Favorite Movie:<br /></span>
                                       <span className="answer">{post.personal.movie}</span>
                                   </li>
                                   <li>
                                       <span className="detail">Walk Up Song:<br /></span>
                                       <span className="answer">{post.personal.song}</span>
                                   </li>
                               </ul>
                           </div>
                       </div>
                   </div>
               </div>
               </>
                    ))}
                    
                   <div className="member-profile lity-hide" id={slugify(Team.leader.name)}>
                   <img src={pophex2} className="pop-hex" />
                   <div className="popup-body">
                       <img src={popart} className="pop-art" />
                       <div className="row">
                           <div className="col col-4 image">
                               <div className="hexagon-img">
                                   <img src={pophex} className="hex-img" />
                                   <svg xmlns="http://www.w3.org/2000/svg" width="327.846" height="318.144"
                                       viewBox="0 0 327.846 318.144">
                                       <defs>
                                           <mask id={`msk${slugify(Team.leader.name)}`}>
                                               <path className="a" transform="translate(111.598) rotate(30)"
                                                   d="M172.871,0a28.906,28.906,0,0,1,25.009,14.412L245.805,97.1a28.906,28.906,0,0,1,0,28.989L197.88,208.784A28.906,28.906,0,0,1,172.871,223.2H76.831a28.906,28.906,0,0,1-25.009-14.412L3.9,126.092A28.906,28.906,0,0,1,3.9,97.1L51.821,14.412A28.906,28.906,0,0,1,76.831,0Z" />
                                           </mask>
                                       </defs>
                                       <image mask={`url(#msk${slugify(Team.leader.name)})`} height="100%" width="100%" xlinkHref={Team.leader.team_image}
                                           preserveAspectRatio="xMidYMin slice">
                                       </image>
                                   </svg>
                               </div>
                           </div>
                           <div className="col col-5">
                               <h2 className="mb-0">{Team.leader.name}</h2>
                               <h5 className="text-blue">{Team.leader.title}</h5>
                               <p>{Team.leader.description}</p>
                               <div className="numbers">
                                   <div className="number">
                                       <span className="num">{Team.leader.years}</span>
                                       <span className="text">Years In Governement</span>
                                   </div>
                                   <div className="number">
                                       <span className="num">{Team.leader.states}</span>
                                       <span className="text">States Visited</span>
                                   </div>
                                   <div className="number">
                                       <span className="num">{Team.leader.coffee}</span>
                                       <span className="text">Cups Of Coffee
                                           In A Day</span>
                                   </div>
                               </div>
                           </div>
                           <div className="col col-3">
                               <h5>Personal</h5>
                               <ul className="list-unstyled personal-details">
                                   <li>
                                       <span className="detail">Favorite Book:<br /></span>
                                       <span className="answer">{Team.leader.personal.book}</span>
                                   </li>
                                   <li>
                                       <span className="detail">Favorite Sports Team:<br /></span>
                                       <span className="answer">{Team.leader.personal.team}</span>
                                   </li>
                                   <li>
                                       <span className="detail">Favorite Flower/Plant:<br /></span>
                                       <span className="answer">{Team.leader.personal.plant}</span>
                                   </li>
                                   <li>
                                       <span className="detail">Favorite Food:<br /></span>
                                       <span className="answer">{Team.leader.personal.food}</span>
                                   </li>
                                   <li>
                                       <span className="detail">Favorite Movie:<br /></span>
                                       <span className="answer">{Team.leader.personal.movie}</span>
                                   </li>
                                   <li>
                                       <span className="detail">Walk Up Song:<br /></span>
                                       <span className="answer">{Team.leader.personal.song}</span>
                                   </li>
                               </ul>
                           </div>
                       </div>
                   </div>
               </div>
               
                    <HiveIdeas />
  </Layout>
);
    };
    export const pageQuery = graphql`
  query {
    abouts: markdownRemark(fileAbsolutePath: { regex: "./content/about.md/" }) {
      html
      frontmatter {
        top_section{
            button{
                button_text
                button_link
            }
            title
            text_block
            hero_image
        }
        four_blocks {
          description
          headline
          small_text
          block_four {
            description
            icon
            
            title
          }
          block_one {
            description
            icon
            
            title
          }
          block_three {
            description
            icon
            
            title
          }
          block_two {
            description
            icon
            title
            
          }
        }
        logo_section{
            subtitle
            title
            description
            logos{
                logo
                link
            }
        }
        }
      }
    news: allMarkdownRemark(
        filter: { fields: { sourceName: { eq: "blog-posts" } } }
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
              thumbnail
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
export default AboutPage;
