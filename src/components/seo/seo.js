import React from "react"
import { useSiteMetadata } from "./siteMetadata";

const SEO = ({ title, description, pathname, children }) => {
  const { description: defaultDescription, image, twitterUsername, siteUrl } = useSiteMetadata()

  const seo = {
    title: title ? `${title} - NBojan App` : 'NBojan App',
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <link rel="icon" href="/favicon.ico" />
      {children}
    </>
  )
}

export default SEO