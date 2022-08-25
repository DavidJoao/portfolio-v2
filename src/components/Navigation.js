import { Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navigation(){
    return(
          <Navbar style={{backgroundColor:'#213642', position:'fixed', width:'100%', zIndex:'1'}} variant="dark">
              <Navbar.Brand><a to="/"><img style={{width:'150px', marginLeft:'5%'}} src='https://i.ibb.co/6b98CTG/Screenshot-20220823-012238-Canva.jpg'/></a></Navbar.Brand>
            <Nav style={{float:'right'}} className="me-auto">
              <a className='nav-link' href='#home'>Home</a>
              <a className='nav-link' href="#work">Work</a>
              <a className='nav-link' href="#education">Education</a>
              <a className='nav-link' href="#contact">Contact </a>
            </Nav>
        </Navbar>
    )
}

export default Navigation