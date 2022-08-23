import { Card, Button } from 'react-bootstrap'

function ProjectCard( { projectName, projectTitle, projectDescription, projectImage, projectLink, tech, repo } ){
    return(
        <Card style={{ width: '18rem', marginBottom:'6%', padding:'5%', backgroundColor:'#E6EDF3', boxShadow:'0px 1px 17px 0px rgba(255,255,255,0.75)', backgroundColor:'rgba(255,255,255,0.7)', border:'5px solid #E6EDF3' }} className="m-3">
        <Card.Img variant="top" src={projectImage} />
        <Card.Body style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
          <Card.Title>{projectTitle}</Card.Title>
          <Card.Text>
            {projectDescription}
          </Card.Text>
          <h5>Technologies used: </h5>
          <p>{tech}</p>
          <Button style={{marginBottom:'3%', backgroundColor:'#213642', border:'2px solid black'}} variant="primary"><a style={{color:'white', textDecoration:'none'}} href={projectLink} target="_blank"> Go to {projectName}</a></Button><br></br>
          <Button style={{backgroundColor:'#213642',  border:'2px solid black'}} variant="primary"><a style={{color:"white", textDecoration:'none'}} href={repo} target="_blank">Go to repository</a></Button>
        </Card.Body>
      </Card> 
    )
}

export default ProjectCard