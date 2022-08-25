import { Card, Button } from 'react-bootstrap'

function EducationCards( {institutionName, date, logo, description, location} ){
    return(
    <Card style={{ width: '22rem', marginBottom:'2%', border:'5px solid #E6EDF3', boxShadow:'0px 1px 17px 0px rgba(255,255,255,0.75)', height:'35rem'}} className="m-3 mt-4">
        <Card.Img variant="top" src={logo} style={{width:'70%', alignSelf:'center'}} />
        <Card.Body>
          <Card.Title>{institutionName}</Card.Title>
          <Card.Text>{date}<span style={{float:'right'}}>{location}</span></Card.Text>
          <Card.Text>{description} </Card.Text>
        </Card.Body>
      </Card> 
    )
}

export default EducationCards