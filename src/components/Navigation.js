import { Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navigation(){
    return(
          <Navbar style={{backgroundColor:'#213642', position:'fixed', width:'100%', zIndex:'1'}} variant="dark">
              <Navbar.Brand><Link to="/" style={{color:'white', textDecoration:'none', marginLeft:'5%'}}>David Sandoval</Link></Navbar.Brand>
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