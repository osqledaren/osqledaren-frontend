/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: 'Osqledaren',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'ih69fm79',
        dataset: 'production',
        // a token with read permissions is required
        // // if you have a private dataset
        // token: process.env.MY_SANITY_TOKEN,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    // 'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Osqledaren',
        short_name: 'OL',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'minimal-ui',
        icon: './src/images/logo-small.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};
