import { Card, Button } from 'react-bootstrap'

function ProjectCard( { projectName, projectTitle, projectDescription, projectImage } ){
    return(
        <Card style={{ width: '18rem', marginBottom:'2%' }}>
        <Card.Img variant="top" src={projectImage} />
        <Card.Body>
          <Card.Title>{projectTitle}</Card.Title>
          <Card.Text>
            {projectDescription}
          </Card.Text>
          <Button style={{marginBottom:'3%'}} variant="primary">Go to {projectName}</Button><br></br>
          <Button variant="primary">Go to repository</Button>
        </Card.Body>
      </Card> 
    )
}

export default ProjectCard