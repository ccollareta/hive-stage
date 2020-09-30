import React from 'react';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby'; 

import Layout from '../components/layout';
import SEO from '../components/seo';
const pgVar = 'style-3';
const NotFoundPage = () => (
  <Layout pgVar={pgVar}>
    <Helmet>
  <link rel="stylesheet" href={withPrefix('../../vendor/slick/slick.css')} />
  <link rel="stylesheet" href={withPrefix('../../vendor/lity/lity.min.css')} />
    <script src={withPrefix('../../scripts/jquery.min.js')} type="text/javascript" />
    <script src={withPrefix('../../vendor/slick/slick.min.js')} type="text/javascript"/>
    <script src={withPrefix('../../vendor/lity/lity.min.js')} type="text/javascript"/>
    <script src={withPrefix('../../vendor/isotope/isotope.pkgd.min.js')} type="text/javascript"/>
    <script src={withPrefix('../../scripts/custom.js')} type="text/javascript"/>
    <script src={withPrefix('../../scripts/isotope.js')} type="text/javascript"/>
  </Helmet>
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
