import React from "react";
import styled from "styled-components";
import { ProjectsContainer } from "../../components";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    allAirtable {
      nodes {
        data {
          name
          type
          descr
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

const AllProjects = () => {
    const { allAirtable: {nodes:projects} } = useStaticQuery(query);

    return (  
        <Wrapper className="section">
            <ProjectsContainer title="NB Projects" projects={projects} showFilters={true} />
        </Wrapper>
    );
}

const Wrapper = styled.section`
  background-color: #2a5078;
    /* background: linear-gradient(5deg, rgba(81,81,93,1) 50%, var(--clr-darkmode2) 50%); */
`
export default AllProjects;