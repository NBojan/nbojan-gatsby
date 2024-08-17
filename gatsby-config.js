/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `NBojan Project / Portfolio Page with Gatsby`,
    description: `Project / Portfolio Page, created using Gatsby / React, Airtable. Uploaded with Netlify.`,
    author: `@nbojan`,
    siteUrl: `https://nbojan-gatsby.netlify.app`,
    twitterUsername: `@Trojka33`,
    image: `/image.png`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Quicksand\:400,500,600,700`,
          `Cabin\:400,500,600,700`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_NEW_KEY,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE,
            tableName: `projects`,
            mapping: { images: `fileNode` },
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE,
            tableName: `testing`,
            mapping: { images: `fileNode` },
          },
        ]
      }
    },
  ],
}
