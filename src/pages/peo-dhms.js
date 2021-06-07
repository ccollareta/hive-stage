import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, withPrefix } from 'gatsby';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Block from '../components/block';
import art1 from '../images/new/art1.png';
import colbg from '../images/col-bg.jpg';
import art5 from '../images/new/art5.png';
import art3 from '../images/new/art3.png';
import art7 from '../images/new/art7.png';
import hex5 from '../images/new/hex-5.svg'
import hex6 from '../images/new/hex-6.svg'
import hex4 from '../images/new/hex-4.svg'
import hex1 from '../images/new/hex-1.svg'
import hex2 from '../images/new/hex-2.svg'
import hex3 from '../images/new/hex-3.svg'
import f_open from '../images/new/f-open.svg'
import f_close from '../images/new/f-close.svg'
import hero_hex from '../images/new/hero-hex6.png';

const PeoPage = ({data}) => {
  const { markdownRemark } = data;
  const posts = data.abouts.frontmatter;
  const pgVar = 'style-1 animated-hex';
  return (
  <Layout pgVar={pgVar}>
    <SEO title="Healthcare Technology Trends & Opportunities 2021"
    keywords="healthcare technology trends (MSV 480)"
    description="In partnership with the PEO DHMS, the HIVE was created to facilitate community and potential collaboration in the healthcare technology trends arena. " />
    <section className="hero-section-2 style-2 animated-hex" style={{
                backgroundImage: `url(${posts.top_section.hero_image})`
              }}>
            <img src={art1} className="art" />
            <div className="hero-hex">
                <img src={hero_hex} />
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
        <section className="hive-text-hex" id="hive">
            <img src={art5} className="art" />
            <div className="container">
                <div className="row">
                    <div className="col col-7 text-container">
                        <div className="section-head">
                            <div className="section-title">
                                <p className="sub-title text-blue">{posts.text_section.subtitle}</p>
                                <h2 className="title">{posts.text_section.title}</h2>
                            </div>
                        </div>
                        <p>{posts.text_section.text_block}
                        </p>
                        <div className="icon-text">
                            {posts.text_section.icons.map((icon,index)=>(
                            <div className="it" key={index}>
                            <div className="icon">
                                <img src={icon.icon} />
                            </div>
                            <div className="text font-exo">
                               {icon.text}
                            </div>
                        </div>
                            ))}
                            
                            
                        </div>
                    </div>
                    <div className="col col-5 image">
                        <div className="hex-img">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="1043.739" height="964.99" viewBox="0 0 1043.739 964.99">
                                <defs>
                                    <linearGradient id="linear-gradient" y1="1" x2="1" y2="1"
                                        gradientUnits="objectBoundingBox">
                                        <stop offset="0" stop-color="#f15a29" />
                                        <stop offset="1" stop-color="#f7941d" />
                                    </linearGradient>
                                    <clipPath id="clip-path">
                                        <path className="clsp-1"
                                            d="M612.315,651.091,766.79,384.59a76.676,76.676,0,0,0-.038-76.866L609.873,39.848A77.293,77.293,0,0,0,542.984,1.386L231.635,0a77.3,77.3,0,0,0-66.856,38.406L10.308,304.9a76.662,76.662,0,0,0,.041,76.862L167.228,649.648a77.3,77.3,0,0,0,66.891,38.467l311.35,1.378A77.3,77.3,0,0,0,612.315,651.091Z"
                                            transform="matrix(0.966, 0.259, -0.259, 0.966, 178.454, 0)" />
                                    </clipPath>
                                    <clipPath id="clip-path-2">
                                        <path className="clsp-1"
                                            d="M491.718,522.857,615.769,308.844a61.574,61.574,0,0,0-.03-61.727L489.757,32A62.07,62.07,0,0,0,436.042,1.113L186.014,0a62.072,62.072,0,0,0-53.689,30.842L8.278,244.849a61.563,61.563,0,0,0,.033,61.724L134.292,521.7a62.076,62.076,0,0,0,53.717,30.891L438.038,553.7A62.073,62.073,0,0,0,491.718,522.857Z"
                                            transform="matrix(0.966, 0.259, -0.259, 0.966, 143.307, 0)" />
                                    </clipPath>
                                    <image id="image" width="1584.46" height="753.059"
                                        xlinkHref={posts.text_section.image} />
                                </defs>
                                <g transform="translate(57.332 48.932)">
                                    <path className="clsp-2"
                                        d="M690.042,721.8,864.127,426.359a83.808,83.808,0,0,0-.043-85.214L687.29,44.176A87.384,87.384,0,0,0,611.911,1.537L261.039,0A87.389,87.389,0,0,0,185.7,42.577L11.617,338.015a83.793,83.793,0,0,0,.046,85.21L188.456,720.2a87.392,87.392,0,0,0,75.382,42.644l350.872,1.528A87.391,87.391,0,0,0,690.042,721.8Z"
                                        transform="matrix(0.966, 0.259, -0.259, 0.966, 140.503, -48.932)" />
                                    <path className="clsp-3"
                                        d="M612.315,651.091,766.79,384.59a76.676,76.676,0,0,0-.038-76.866L609.873,39.848A77.293,77.293,0,0,0,542.984,1.386L231.635,0a77.3,77.3,0,0,0-66.856,38.406L10.308,304.9a76.662,76.662,0,0,0,.041,76.862L167.228,649.648a77.3,77.3,0,0,0,66.891,38.467l311.35,1.378A77.3,77.3,0,0,0,612.315,651.091Z"
                                        transform="matrix(0.966, 0.259, -0.259, 0.966, 178.454, 0)" />
                                    <g className="clsp-4" transform="translate(0.001 0)">
                                        <use transform="translate(-365.03 56.54)" xlinkHref="#image" />
                                    </g>
                                    <g className="clsp-5" transform="translate(91.493 85.392)">
                                        <use transform="translate(-456.522 -28.851)" xlinkHref="#image" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="hive-faqs animated-hex" style={{
          backgroundImage: `url(${colbg})`
          }}>
            <img data-depth="0.05" src={hex1} className="hex-img img-1" />
            <img data-depth="0.05" src={hex2} className="hex-img img-2" />
            <img data-depth="0.05" src={hex3} className="hex-img img-3" />
            <div className="container">
                <div className="row">
                    <div className="col col-6">
                        <div className="section-head">
                            <div className="section-title">
                                <p className="sub-title text-orange">{posts.accordion_section.subtitle}</p>
                                <h2 className="title text-white">{posts.accordion_section.title}</h2>
                            </div>
                        </div>
                        <div className="hexagon-img">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="1043.739" height="964.99" viewBox="0 0 1043.739 964.99">
                                <defs>
                                    
                                    <linearGradient id="linear-gradient1" y1="1" x2="1" y2="1"
                                        gradientUnits="objectBoundingBox">
                                        <stop offset="0" stop-color="#f15a29" />
                                        <stop offset="1" stop-color="#f7941d" />
                                    </linearGradient>
                                    <clipPath id="clip-path1">
                                        <path className="clsg-1"
                                            d="M612.315,651.091,766.79,384.59a76.676,76.676,0,0,0-.038-76.866L609.873,39.848A77.293,77.293,0,0,0,542.984,1.386L231.635,0a77.3,77.3,0,0,0-66.856,38.406L10.308,304.9a76.662,76.662,0,0,0,.041,76.862L167.228,649.648a77.3,77.3,0,0,0,66.891,38.467l311.35,1.378A77.3,77.3,0,0,0,612.315,651.091Z"
                                            transform="matrix(0.966, 0.259, -0.259, 0.966, 178.454, 0)" />
                                    </clipPath>
                                    <clipPath id="clip-path-21">
                                        <path className="clsg-1"
                                            d="M491.718,522.857,615.769,308.844a61.574,61.574,0,0,0-.03-61.727L489.757,32A62.07,62.07,0,0,0,436.042,1.113L186.014,0a62.072,62.072,0,0,0-53.689,30.842L8.278,244.849a61.563,61.563,0,0,0,.033,61.724L134.292,521.7a62.076,62.076,0,0,0,53.717,30.891L438.038,553.7A62.073,62.073,0,0,0,491.718,522.857Z"
                                            transform="matrix(0.966, 0.259, -0.259, 0.966, 143.307, 0)" />
                                    </clipPath>
                                    <image id="imageguy" width="1584.46" height="753.059"
                                        xlinkHref={posts.accordion_section.image} />
                                </defs>
                                <g transform="translate(57.332 48.932)">
                                    <path className="clsg-2"
                                        d="M690.042,721.8,864.127,426.359a83.808,83.808,0,0,0-.043-85.214L687.29,44.176A87.384,87.384,0,0,0,611.911,1.537L261.039,0A87.389,87.389,0,0,0,185.7,42.577L11.617,338.015a83.793,83.793,0,0,0,.046,85.21L188.456,720.2a87.392,87.392,0,0,0,75.382,42.644l350.872,1.528A87.391,87.391,0,0,0,690.042,721.8Z"
                                        transform="matrix(0.966, 0.259, -0.259, 0.966, 140.503, -48.932)" />
                                    <path className="clsg-3"
                                        d="M612.315,651.091,766.79,384.59a76.676,76.676,0,0,0-.038-76.866L609.873,39.848A77.293,77.293,0,0,0,542.984,1.386L231.635,0a77.3,77.3,0,0,0-66.856,38.406L10.308,304.9a76.662,76.662,0,0,0,.041,76.862L167.228,649.648a77.3,77.3,0,0,0,66.891,38.467l311.35,1.378A77.3,77.3,0,0,0,612.315,651.091Z"
                                        transform="matrix(0.966, 0.259, -0.259, 0.966, 178.454, 0)" />
                                    <g className="clsg-4" transform="translate(0.001 0)">
                                        <use transform="translate(-365.03 56.54)" xlinkHref="#imageguy" />
                                    </g>
                                    <g className="clsg-5" transform="translate(91.493 85.392)">
                                        <use transform="translate(-456.522 -28.851)" xlinkHref="#imageguy" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="col col-6">
                        <div className="accordion faq-accordion" id="faq-accordion">
                        {posts.accordion_section.accordion.map((accordion,index)=>(
                        <div className={`acc-body ${index == 0 ? 'active' : ''}`} key={index}>
                        <div className="acc-title" id="heading1" data-toggle="collapse" data-target={`#collapse${index}`}>
                            <p>{accordion.title}</p>
                            <span className="icon">
                                <img src={f_close} className="close" />
                                <img src={f_open} className="open" />
                            </span>
                        </div>
                        <div id={`collapse${index}`} className={`collapse ${index == 0 ? 'show' : ''}`} aria-labelledby="heading1"
                            data-parent="#faq-accordion">
                            <div className="acc-content">
                                <p>
                                    {accordion.text}
                                </p>
                            </div>
                        </div>
                    </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="hive-cards-section style-4">
            <img src={art7} className="art art-1" />
            <img src={art3} className="art art-2" />
            <div className="container">
                <div className="row">
                    <div className="col col-7">
                        <div className="section-head">
                            <div className="section-title">
                                <h2 className="title">{posts.four_blocks.headline}</h2>
                            </div>
                        </div>
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
        <section className="hive-products">
            <div className="container">
                <div className="row">
                    <div className="col col-8">
                        <div className="section-head">
                            <div className="section-title">
                                <h2 className="title text-center">{posts.tab_section.title}</h2>
                            </div>
                        </div>
                        <p className="section-subhead">{posts.tab_section.text}</p>
                    </div>
                </div>
                <div className="pro-img">
                    <img src={posts.tab_section.image} />
                </div>
                <Tabs >
                <TabList className="nav nav-tabs pro-tabs" id="pro-tabs" >
                    {posts.tab_section.tabs.map((tab,index)=>(
                    <Tab className={`nav-item ${tab.title}-tab`} selectedClassName="active">
                        <span>{tab.title}</span>
                    </Tab>
                    ))}
                    
                    

                </TabList>
                <div className="tab-content" id="pro-tabs-content">
                {posts.tab_section.tabs.map((tab,index)=>(
                    <TabPanel className={`tab-pane fade  ${tab.title}`} selectedClassName="show active" >
                        <div className="pro-type">
                            <h3 className="title">{tab.content.col_1_title}</h3>
                            <ul>
                                {tab.content.col_1_list && tab.content.col_1_list.map((list)=>(
                                <li>{list.list_item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="pro-type">
                            <h3 className="title">{tab.content.col_2_title}</h3>
                            <ul>
                            {tab.content.col_2_list && tab.content.col_2_list.map((list)=>(
                                <li>{list.list_item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="pro-type">
                            <h3 className="title">{tab.content.col_3_title}</h3>
                            <ul>
                            {tab.content.col_3_list && tab.content.col_3_list.map((list)=>(
                                <li>{list.list_item}</li>
                                ))}
                            </ul>
                        </div>
                    </TabPanel>
                     ))}
                </div>
                </Tabs>
            </div>
        </section>
        <section className="hive-cta" style={{
          backgroundImage: `url(${colbg})`
          }}>
            <div className="inner-container">
                <div className="row">
                    <div className="col col-11">
                        <div className="section-head text-center">
                            <div className="section-title">
                                <h2 className="title text-white">{posts.social_section.title}</h2>
                            </div>
                        </div>
                        <ul className="social-icons">
                        {posts.social_section.social.map((post)=>(
                        <li>
                        <a href={post.link}>
                            <img src={post.icon} />
                        </a>
                        </li>
                        ))}
                            
                            
                        </ul>
                    </div>
                </div>
            </div>
        </section>
  </Layout>
);
    };

    export const pageQuery = graphql`
  query {
    abouts: markdownRemark(fileAbsolutePath: { regex: "./content/peo-dhms.md/" }) {
      html
      frontmatter {
        top_section{
            title
            hero_image
            text_block
            button{
                button_text
                button_link
            }
        }
        text_section{
              subtitle
              title
              image
              text_block
              icons{
                icon
                text
              }
        }
        accordion_section{
              subtitle
              title
              image
              
              accordion{
                title
                text
              }
        }
        four_blocks {
          
          headline
         
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
        tab_section{
            title
            text
            image
            tabs{
              title
              content{
                  col_1_title
                  col_1_list{
                    list_item
                  } 
                  col_2_title
                  col_2_list{
                    list_item
                  } 
                  col_3_title
                  col_3_list{
                    list_item
                  }                

              } 
            }
        }
        social_section{
            title
            social{
              icon
              link
            }
        }
        
        }
      }
  }`
export default PeoPage;
