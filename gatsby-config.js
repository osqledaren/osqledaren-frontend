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
      resolve: 'gatsby-source-podcast',
      options: {
        podcasts: ['https://anchor.fm/s/17740998/podcast/rss'],
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'ih69fm79',
        dataset: 'production',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
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
