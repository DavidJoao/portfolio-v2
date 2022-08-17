import { Card, Button } from 'react-bootstrap'

function EducationCards( {institutionName, date, logo, description, location} ){
    return(
    <Card style={{ width: '18rem', marginBottom:'2%' }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>{institutionName}</Card.Title>
          <Card.Text>{date}<span style={{float:'right'}}>{location}</span></Card.Text>
          <Card.Text>{description} </Card.Text>
        </Card.Body>
      </Card> 
    )
}

export default EducationCards