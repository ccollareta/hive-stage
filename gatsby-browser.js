/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import './src/styles/style.css';
import './src/styles/style2.css';
import './src/styles/style4.css';
import './src/styles/comb.scss';
import './src/styles/svg.scss';
//import './static/vendor/lity/lity.min.css';
import './static/vendor/slick/slick.css';
import './static/vendor/collapse/css/collapse.min.css';
import 'uswds';
import React from 'react';



import MailWidgetWrapper from './src/components/mailwidgetwrapper';

import { siteMetadata } from './gatsby-config';

let loaded = false;

const digitalAnalytics = pathname => {
  window.gas && window.gas('send', 'pageview', pathname);
};

const googleAnalytics = pathname => {
  window.ga && window.ga('send', 'pageview', pathname);
};

const loadScript = (src, onLoad, attrs = {}) => new Promise(resolve => {
  const script = document.createElement('script');
  script.src = src;
  Object.assign(script, attrs);
  script.onload = () => {
    onLoad();
    resolve();
  };
  document.body.appendChild(script);
});
const loadScripts = (src, onLoad, attrs = {}) => new Promise(resolve => {
  const script = document.createElement('script');
  script.src = src;
  Object.assign(script, attrs);
  document.body.appendChild(script);
  script.onload = () => {
    resolve();
  };
});

export const onInitialClientRender = () => {
  const { dap, ga } = siteMetadata;
  const { pathname } = window.location;

  const scripts = [];

  if (dap && dap.agency) {
    let src = `https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js?agency=${dap.agency}`;
    if (dap.subagency) {
      src += `&subagency=${dap.subagency}`;
    }
    const onLoad = () => digitalAnalytics(pathname);
    scripts.push(loadScript(src, onLoad, { id: '_fed_an_ua_tag'}));
  }

  if (ga && ga.ua) {
    const src = `https://www.googletagmanager.com/gtag/js?id=${ga.ua}`;
    const onLoad = () => googleAnalytics(pathname);
    scripts.push(loadScript(src, onLoad));

    /**
     * `forceSSL` was used for analytics.js (the older Google Analytics script).
     * It isn't documented for gtag.js, but the term occurs in the gtag.js code;
     * figure it doesn't hurt to leave it in. -@afeld, 5/29/19
     */
    const gtag = document.createElement('script');
    gtag.text = `
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', '${ga.ua}', { 'anonymize_ip': true, 'forceSSL': true });
    `;
    document.body.appendChild(gtag);
  }

  const jq = '/scripts/jquery.js';
  const lity = '/vendor/lity/lity.js';
  const slick = '/vendor/slick/slick.min.js';
  const isoptope ='/vendor/isotope/isotope.js';
  const isotope2 = '/scripts/isotope.js';
  const isotope3 = '/scripts/isotope-new.js';
  const isotope4 = '/vendor/isotope/imagesloaded.pkgd.min.js';
  const cust = '/scripts/custom.js';
  const collapse = '/vendor/collapse/js/collapse.min.js'
  //const tabs = '/vendor/tabs/tab.js'

  scripts.push(loadScripts(lity));
  scripts.push(loadScripts(slick));
 
  scripts.push(loadScripts(collapse));
  //scripts.push(loadScripts(tabs));
 
  scripts.push(loadScripts(cust));
  //scripts.push(loadScripts(cust2));
  



  Promise.all(scripts)
    .then(() => { loaded = true });
};

export const onRouteUpdate = ({ location }) => {
  window.scrollTo(0,0);
  if (loaded) {
    digitalAnalytics(location.pathname);
    googleAnalytics(location.pathname);
  }
};


