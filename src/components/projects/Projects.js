import React from "react";
import { Card } from "..";

const Projects = ({ selectedProjects, isQa }) => {
    if(selectedProjects.length < 1) return <h3 className="text-center capitalize">No projects found...</h3>
    
    return (  
        <div className="flex justify-between flex-wrap">
            {selectedProjects.map(project => {
                return <Card key={project.id} {...project.data} isQa={isQa} />
            })}
        </div>
    )
}
export default Projects;