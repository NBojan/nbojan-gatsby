import React from "react";
import styled from "styled-components";
import { ProjectsContainer } from "..";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  {
    allAirtable(filter: {data: {}, table: {eq: "projects"}}) {
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

const AllProjectsWeb = () => {
    const { allAirtable: {nodes:projects} } = useStaticQuery(query);

    return (  
        <Wrapper className="section">
            <ProjectsContainer title="NB Web Projects" projects={projects} showFilters={true} isQa={false} />
        </Wrapper>
    );
}

const Wrapper = styled.section`
  background-color: #2a5078;
`
export default AllProjectsWeb;