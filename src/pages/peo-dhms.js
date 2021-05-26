import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, withPrefix } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import art1 from '../images/new/art1.png';
import art5 from '../images/art5.png';
import hex5 from '../images/new/hex-5.svg'
import hex6 from '../images/new/hex-6.svg'
import hex4 from '../images/new/hex-4.svg'
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
                                <a className="btn rounded" href={posts.top_section.button.button_link}><span>{posts.top_section.button.button_text}</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="hive-text-hex">
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <div className="section-head">
                            <div className="section-title">
                                <p className="sub-title text-blue">A FORCE TO BE RECKONED with</p>
                                <h2 className="title">Transforming The Delivery Of Healthcare</h2>
                            </div>
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
        
        }
      }
  }`
export default PeoPage;
