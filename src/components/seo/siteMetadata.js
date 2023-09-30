import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          twitterUsername
          image
          siteUrl
        }
      }
    }
  `)

  return data.site.siteMetadata
}