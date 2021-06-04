/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const { paginate } = require('gatsby-awesome-pagination');

// Adds the source "name" from the filesystem plugin to the markdown remark nodes
// so we can filter by it.
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  // We only care about MarkdownRemark content.
  if (node.internal.type !== 'MarkdownRemark') {
    return;
  }

  const fileNode = getNode(node.parent);

  createNodeField({
    node,
    name: 'sourceName',
    value: fileNode.sourceInstanceName,
  });
  
  createNodeField({
    node,
    name: 'name',
    value: fileNode.name,
  });
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  await createBlogPages(createPage, graphql);
  //await createEventPages(createPage, graphql);
  await createOppPages(createPage, graphql);
 
};

async function createBlogPages(createPage, graphql) {
  const blogTemplate = path.resolve('./src/templates/blog.js');
  const postTemplate = path.resolve('./src/templates/blog-post.js');
  const posts = await markdownQuery(graphql, 'blog-posts');


  // Create individual pages
  posts.forEach(({ node }) => {
    createPage({
      path: 'news/' + node.fields.name,
      component: postTemplate,
      context: {
        name: node.fields.name
      },
    });
  });
}


async function createEventPages(createPage, graphql) {
  const eventsTemplate = path.resolve('./src/templates/events.js');
  const eventTemplate = path.resolve('./src/templates/event.js');
  const events = await markdownQuery(graphql, 'events');



  // Create individual pages
  events.forEach(({ node }) => {
    createPage({
      path: 'event/' + node.fields.name,
      component: eventTemplate,
      context: {
        name: node.fields.name
      },
    });
  });
}


async function createOppPages(createPage, graphql) {
  const oppsTemplate = path.resolve('./src/templates/opps.js');
  const oppTemplate = path.resolve('./src/templates/opp.js');
  const opps = await markdownQuery(graphql, 'opps');

  // Create individual pages
  opps.forEach(({ node }) => {
    createPage({
      path: 'opportunity/' + node.fields.name,
      component: oppTemplate,
      context: {
        name: node.fields.name
      },
    });
  });
}


async function markdownQuery(graphql, source) {
  const result = await graphql(`
    {
      allMarkdownRemark(filter: { fields: { sourceName: { eq: "${source}" } } }) {
        edges {
          node {
            fields {
              name
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
  }

  return result.data.allMarkdownRemark.edges;
}


