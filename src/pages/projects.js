import * as React from "react"
import { AllProjectsWeb, ProjectsHero, SEO } from "../components";

export default function Projects() {
  return (
    <>
      <ProjectsHero />
      <AllProjectsWeb />
    </>
  );
}

export const Head = () => (
  <SEO title="Projects" />
)