import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby"
import { ProjectsContainer } from "../../components";

const query = graphql`
  query {
    allAirtable(filter: {data: {featured: {eq: true}}}, limit: 3) {
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
              id
            }
          }
        }
        id
      }
    }
  }
`

const Featured = () => {
    const { allAirtable: {nodes:featuredProjects} } = useStaticQuery(query);

    return (  
        <Wrapper className="section">
            <ProjectsContainer title="featured" projects={featuredProjects} />
        </Wrapper>
    );
}
 
const Wrapper = styled.section`
    background-color: var(--clr-primary-4);
`
export default Featured;