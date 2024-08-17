import React from "react";
import { ProjectsContainer } from "..";
import { useStaticQuery, graphql, Link } from "gatsby"

const query = graphql`
  {
    allAirtable(
      limit: 3
      filter: {data: {featured: {eq: true}}, table: {eq: "projects"}}
    ) {
      nodes {
        data {
          descr
          name
          gitUrl
          url
          featured
          images {
            localFiles {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
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
    const { allAirtable: {nodes:featuredProjects} } = useStaticQuery(query);

    return (  
        <section className="section bg-indigo-500">
            <ProjectsContainer title="featured projects" projects={featuredProjects} isQa={false} />

            <div className="flex justify-center">
              <Link to="/projects" className="capitalize btn btn-m btn-primDark">See all projects</Link>
            </div>
        </section>
    );
}

export default FeaturedProjects;