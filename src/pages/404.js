import React from 'react';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby'; 
import art2 from '../images/art2.png';
import art5 from '../images/art5.png';


import Layout from '../components/layout';
import SEO from '../components/seo';
const pgVar = 'style-3';
const NotFoundPage = () => (
  <Layout pgVar={pgVar}>
    <SEO title="404: Not found" />
    <section className="pp-section">
            <img src={art2} className="art art-1"/>
            <img src={art5} className="art art-2"/>
            <img src={art5} className="art art-3"/>
            <div className="pp-container">
    <h2>NOT FOUND</h2>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
    </section>
  </Layout>
);

export default NotFoundPage;
