import ProjectCard from "./ProjectCard"

function Projects(){
    return(
        <div id="projects" style={{height:'95vh', width:'100%', backgroundColor:'#E6EDF3'}} className="projects-container">
            <ProjectCard projectTitle={"Meet-N-Eat"} projectName={"Meet-N-Eat"}/>
            <ProjectCard projectTitle={"MyWeather/Forecast Provider"} projectName={"MyWeather App"} />
            <ProjectCard projectTitle={"Rick and Morty Card Explorer"} projectName={"Rick and Morty Explorer"}/>
        </div>
    )
}

export default Projects