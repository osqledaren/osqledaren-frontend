const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const articleQuery = await graphql(`
    {
      allSanityArticle {
        edges {
          node {
            id
            publishDate
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (articleQuery.errors) {
    throw new Error(articleQuery.errors);
  }

  articleQuery.data.allSanityArticle.edges.forEach(({ node }) => {
    createPage({
      path: node.slug.current,
      component: path.resolve('src/templates/test.jsx'),
      context: {
        slug: node.slug.current,
      },
    });
  });
};
