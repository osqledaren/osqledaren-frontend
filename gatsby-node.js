const path = require('path');
const { getArticleSlug } = require('./src/utils/slug');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const articleQuery = await graphql(`
    {
      allSanityArticle {
        edges {
          node {
            id
            category {
              slug {
                current
              }
            }
            publishDate
            slug {
              current
            }
          }
        }
      }
    }
  `);

  const categoryQuery = await graphql(`
    {
      allSanityCategory {
        edges {
          node {
            title
            id
            description
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

  if (categoryQuery.errors) {
    throw new Error(categoryQuery.errors);
  }

  categoryQuery.data.allSanityCategory.edges.forEach(({ node }) => {
    createPage({
      path: node.slug.current,
      component: path.resolve('./src/templates/Category.tsx'),
      context: {
        slug: node.slug.current,
      },
    });
  });

  articleQuery.data.allSanityArticle.edges.forEach(({ node }) => {
    createPage({
      path: getArticleSlug(node.category.slug.current, node.slug.current),
      component: path.resolve('src/templates/test.tsx'),
      context: {
        slug: node.slug.current,
      },
    });
  });
};
