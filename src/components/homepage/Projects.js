import React from "react";
import styled from "styled-components";
import { Card } from "../../components";

const Projects = ({ selectedProjects }) => {
    if(selectedProjects.length < 1) return <h3 className="text-center capitalize">No projects found...</h3>
    return (  
        <Wrapper>
            {selectedProjects.map(project => {
                return <Card key={project.id} {...project.data} />
            })}
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
export default Projects;