module.exports = {
  siteMetadata: {
    author: 'PEO DHMS',
    title: `HIVE`,
    description: `HIVE PEO DHMS`,
    siteUrl: `https://www.hive.gov`,
    navigation: [
      {
        items: [{ text: 'PEO DHMS', link: '/peo-dhms/' }],
      },
      {
        items: [{ text: 'Our Community', link: '/our-community/' }],
      },
      
      {
        items: [{ text: 'Opportunities', link: '/opportunities/' }],
      },
      {
        items: [{ text: 'News & Events', link: '/news-events/' }],
      },
      {
        items: [{ text: 'About', link: '/about/' }],
      },
      
      
    ],
    secondaryLinks: [
      { text: 'Enter The Hive', link: 'https://hivegov.mobilize.io' },
    ],

    /**
     * Search.gov configuration
     * 
     * 1. Create an account with Search.gov https://search.usa.gov/signup
     * 2. Add a new site.
     * 3. Add your site/affiliate name here.
     */
    searchgov: {
      
      // You should not change this.
      endpoint: 'https://search.usa.gov',
      
      // replace this with your search.gov account
      affiliate: 'hive',
      
      // replace with your access key
      access_key: 'EUeb0RfUzMmiGl7uZEDIE8jiA9XBgeqsnI6EVf0oRjc=',
      
      // this renders the results within the page instead of sending to user to search.gov
      inline: true, 
    },

    /**
     * Digital Analytics Program (DAP) configuration
     * 
     * USAID   - Agency for International Development
     * USDA    - Department of Agriculture
     * DOC     - Department of Commerce
     * DOD     - Department of Defense
     * ED      - Department of Education
     * DOE     - Department of Energy
     * HHS     - Department of Health and Human Services
     * DHS     - Department of Homeland Security
     * HUD     - Department of Housing and Urban Development
     * DOJ     - Department of Justice
     * DOL     - Department of Labor
     * DOS     - Department of State
     * DOI     - Department of the Interior
     * TREAS   - Department of the Treasury
     * DOT     - Department of Transportation
     * VA      - Department of Veterans Affairs
     * EPA     - Environmental Protection Agency
     * EOP     - Executive Office of the President
     * GSA     - General Services Administration
     * NASA    - National Aeronautics and Space Administration
     * NARA    - National Archives and Records Administration
     * NSF     - National Science Foundation
     * NRC     - Nuclear Regulatory Commission
     * OPM     - Office of Personnel Management
     * USPS    - Postal Service
     * SBA     - Small Business Administration
     * SSA     - Social Security Administration
     */
    dap: {
       //agency: 'DOD',

      // Optional
       //subagency: 'PEO DHMS',
    },

    /**
     * Google Analytics configuration
     */
    ga: {
      // ua: 'your-ua',
    },
  },
  pathPrefix: process.env.BASEURL || '/',
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        createLinkInHead: true,
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `exo\:300;400;600;700;800;900`,
          `open sans\:300;400;500;600;700;800` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: `${__dirname}/src/blog-posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/content`,
      },
    },
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `opps`,
        path: `${__dirname}/src/exchange-opps`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        /**
         * One convention is to place your Netlify CMS customization code in a
         * `src/cms` directory.
         */
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
