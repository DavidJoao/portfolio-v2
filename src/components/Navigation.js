import { Navbar, Container, Nav} from 'react-bootstrap'

function Navigation(){
    return(
        <Navbar style={{backgroundColor:'#213642', position:'fixed', width:'100%', zIndex:'1'}} variant="dark">
        <Container>
          <Navbar.Brand href="#home">David Sandoval</Navbar.Brand>
          <Nav style={{float:'right'}} className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default Navigation