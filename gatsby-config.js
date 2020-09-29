module.exports = {
  siteMetadata: {
    title: `Korina Pluss`,
    description: `The portfolio website for Korina Pluss.`,
    author: `Korina Pluss`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
