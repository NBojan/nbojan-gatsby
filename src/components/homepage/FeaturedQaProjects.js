import React from "react";
import { ProjectsContainer } from "..";
import { useStaticQuery, graphql, Link } from "gatsby"

const query = graphql`
  {
    allAirtable(filter: {table: {eq: "testing"}, data: {featured: {eq: true}}}) {
      nodes {
        data {
          descr
          featured
          name
          gitUrl
          type
          images {
            localFiles {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        id
      }
    }
  }
`

const FeaturedProjects = () => {
    const { allAirtable: {nodes:featuredQaProjects} } = useStaticQuery(query);

    return (  
        <section className="section bg-indigo-900">
            <ProjectsContainer title="featured QA projects" projects={featuredQaProjects} isQa={true} />

            <div className="flex justify-center">
              <Link to="/qaprojects" className="capitalize btn btn-m btn-prim">See all projects</Link>
            </div>
        </section>
    );
}

export default FeaturedProjects;