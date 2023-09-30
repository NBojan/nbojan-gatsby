import * as React from "react"
import { Hero, Featured, AllProjects, SEO } from "../components";

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <AllProjects />
    </>
  );
}

export const Head = () => (
  <SEO title="Homepage" />
)