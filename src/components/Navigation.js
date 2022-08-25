import { Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navigation(){
    return(
          <Navbar style={{backgroundColor:'#213642', position:'fixed', width:'100%', zIndex:'1'}} variant="dark">
              <Navbar.Brand><a to="/"><img style={{width:'150px', marginLeft:'5%'}} src='https://i.ibb.co/6b98CTG/Screenshot-20220823-012238-Canva.jpg'/></a></Navbar.Brand>
            <Nav style={{float:'right'}} className="me-auto">
              <Link className='nav-link' to="/">Home</Link>
              <Link className='nav-link' to="/work">Work</Link>
              <Link className='nav-link' to="/education">Education</Link>
              <Link className='nav-link' to="/contact">Contact </Link>
            </Nav>
        </Navbar>
    )
}

export default Navigation