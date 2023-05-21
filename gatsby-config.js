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
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locale`,
        path: `${__dirname}/src/locales`,
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
        display: `standalone`,
        icon: `static/images/logo-icon-1.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-pnpm`,
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en`, `es`, `pt`],
        defaultLanguage: `en`,
        siteUrl: `https://victorgom3s.github.io/`,
        // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
        trailingSlash: "always",
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: "/:lang",
            getLanguageFromPath: true,
          },
        ],
      },
    },
  ],
};
