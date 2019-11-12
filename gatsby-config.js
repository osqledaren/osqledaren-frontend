/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: 'Osqledaren',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    // 'gatsby-transformer-json',
    // 'gatsby-plugin-sharp',
    // 'gatsby-transformer-sharp',
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
        // icon: '/', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};
