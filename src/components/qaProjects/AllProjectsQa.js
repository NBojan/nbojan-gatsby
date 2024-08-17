import React from "react";
import styled from "styled-components";
import { ProjectsContainer } from "..";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  {
    allAirtable(filter: {data: {}, table: {eq: "testing"}}) {
      nodes {
        data {
          name
          type
          descr
          gitUrl
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

const AllProjectsWeb = () => {
    const { allAirtable: {nodes:projects} } = useStaticQuery(query);

    return (  
        <Wrapper className="section">
            <ProjectsContainer title="NB Testing Projects" projects={projects} showFilters={false} isQa={true} />
        </Wrapper>
    );
}

const Wrapper = styled.section`
  background-color: #2a5078;
`
export default AllProjectsWeb;