export const getUniqueTypes = (projects) => {
    const uniqueTypes = ["all", ...new Set(projects.map(project => project.type))]
    return uniqueTypes
}