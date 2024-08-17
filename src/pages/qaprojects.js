import * as React from "react"
import { AllProjectsQa, QaHero, SEO } from "../components";

export default function Projects() {
  return (
    <>
      <QaHero />
      <AllProjectsQa />
    </>
  );
}

export const Head = () => (
  <SEO title="QA Projects" />
)