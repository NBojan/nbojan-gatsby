import * as React from "react"
import { HomeHero, FeaturedProjects, FeaturedQaProjects, SEO } from "../components";

export default function Home() {
  return (
    <>
      <HomeHero />
      <FeaturedProjects />
      <FeaturedQaProjects />
    </>
  );
}

export const Head = () => (
  <SEO title="Homepage" />
)