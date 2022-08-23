import ProjectCard from "./ProjectCard"
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Projects(){
    return(
            <div id="pagesan" style={{height:'auto', width:'100%', backgroundColor:'#213642', paddingBottom:'5%'}} className="projects-container d-flex flex-column">
                <div style={{marginTop:'2%'}} className="p-5 d-flex flex-column flex-lg-row">
                    <ProjectCard projectTitle={"Meet-N-Eat"} projectName={"Meet-N-Eat"} projectImage={"https://i.ibb.co/YLTzZHY/Screen-Shot-2022-08-22-at-10-53-01-AM.png"} projectLink={"https://meet-n-eat.netlify.app/home"}
                    projectDescription={"Ever found the perfect restaurant, but had no one to go with? Ever wanted to meet someone based on your love of food? Meet 'n Eat is an app that helps match people who have common tastes!"}
                    tech={"Javascript | React | Bootstrap | ExpressJS | NodeJS | MongoDB"} repo={"https://github.com/orgs/Venus-she-s-got-it/repositories"} />
                    <ProjectCard projectTitle={"MyWeather/Forecast Provider"} projectName={"MyWeather App"} projectImage={"https://i.ibb.co/CMkzmrQ/Screen-Shot-2022-08-22-at-10-54-12-AM.png"} projectLink={"https://myweather-ga.netlify.app/"}
                    projectDescription={"Get weather information based in user input. Want to check the weather for a specific city? Just enter a city and get detailed information, and a forecast for the next day!"}
                    tech={"Javascript | CSS | HTML | React "} repo={"https://github.com/DavidJoao/weather-project"} />
                    <ProjectCard projectTitle={"Rick and Morty Card Explorer"} projectName={"Rick and Morty Explorer"} projectImage={"https://i.ibb.co/DbsDWrz/Screen-Shot-2022-08-22-at-10-53-44-AM.png"} projectLink={"https://rickandmorty-explorer.netlify.app/"}
                    projectDescription={"Website developed in React and Bootstrap that displays characters' information from TV serie Rick and Morty, using the Rick and Morty API"}
                    tech={"Javascript | HTML | Bootstrap | React "} repo={"https://github.com/DavidJoao/rm-explorer"}/>
                </div>
                <div style={{height:'18rem', margin:'5%'}}>
                    <h4 style={{color:'white', textAlign:'center'}}>Technologies I have worked with during my formation as front-end developer:</h4>
                    <Card style={{height:'40%', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:'3%', boxShadow:'0px 1px 17px 0px rgba(255,255,255,0.75)', backgroundColor:'rgba(255,255,255,0.7)', border:'5px solid #E6EDF3'}}>
                    <i style={{ fontSize:'3rem' }} class="fa-brands fa-html5"></i>
                    <i style={{ fontSize:'3rem' }} class="fa-brands fa-css3-alt"></i>
                    <i style={{ fontSize:'3rem' }} class="fa-brands fa-square-js"></i>
                    <i style={{ fontSize:'3rem' }} class="fa-brands fa-react"></i>
                    <i style={{ fontSize:'3rem' }} class="fa-brands fa-node-js"></i>
                    <i class="fa-brands fa-git-alt" style={{ fontSize:'3rem' }}></i>
                    <iconify-icon style={{ fontSize:'3rem' }} icon="simple-icons:mongodb">MongoDB</iconify-icon>
                    </Card>
                </div>
            </div>
    )
}

export default Projects