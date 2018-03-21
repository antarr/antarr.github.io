module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
    resolve: `gatsby-source-medium`,
    options: {
      username: `@antarr`,
    },
  },
    'gatsby-plugin-react-helmet'

  ],
  pathPrefix: "/antarr.github.io"
};
