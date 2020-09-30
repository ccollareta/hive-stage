import React from 'react';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby'; 

import Layout from '../components/layout';
import SEO from '../components/seo';
const pgVar = 'style-3';
const NotFoundPage = () => (
  <Layout pgVar={pgVar}>
    <SEO title="404: Not found" />
    <section className="hive-privacy-policy">
            <div className="inner-container">
    <h2>NOT FOUND</h2>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
    </section>
  </Layout>
);

export default NotFoundPage;
