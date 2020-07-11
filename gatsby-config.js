module.exports = {
  siteMetadata: {
    title: `VictorGom3s`,
    description: `Victor Gomes's personal website and portfolio`,
    author: `@victorgom3s`,
    keywords: [
      "fullstack",
      "victorgom3s",
      "node",
      "react",
      "developer",
      "Americana",
      "São Paulo",
      "SP",
      "Web",
      "Programador",
    ],
    siteUrl: "https://victorgom3s.github.io/",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `victorgom3s`,
        short_name: `victorgom3s`,
        start_url: `/`,
        background_color: `#2F2519`,
        theme_color: `#2F2519`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-emotion`,
  ],
};
