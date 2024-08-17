import React, { useState } from "react";
import styled from "styled-components";
import { Projects, Filters } from "../../components";

const ProjectsContainer = ({ title="default", projects=[], showFilters, isQa }) => {
    const [displayedProjects, setDisplayedProjects] = useState([...projects]);

    const filterProjects = (type) => {
        if(type === "all") setDisplayedProjects([...projects]);
        else {
            const tmpFiltered = projects.filter(project => {
                return project.data.type === type;
            })
            setDisplayedProjects(tmpFiltered);
        }
    }


    return (  
        <Wrapper className="containerBoot mx-auto">
            <div className="text-center mb-10">
                <h2 className="mb-4 text-white capitalize font-semibold tracking-normal">{title}</h2>
                <div className="underline-nb mx-auto !bg-white"></div>
            </div>

            {showFilters && <Filters filterProjects={filterProjects} />}

            <Projects selectedProjects={displayedProjects} isQa={isQa} />
        </Wrapper>
    );
}
 
const Wrapper = styled.article`

`
export default ProjectsContainer;