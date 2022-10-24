import React, { useContext } from 'react';
import { Button, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Image from 'react-bootstrap/Image'
import {FaUser} from 'react-icons/fa'

const Header = () => {

  const {user, logOut} = useContext(AuthContext)


  const handleSignOut = () =>{
    logOut()
    .then(()=>{
      console.log("logged out")
    })
    .catch(error => console.error(error))
  }
    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand ><Link to='/'>Dragon News</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">All News</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <>
                {
                  user ?
                  <>
                  <span >{user.displayName}</span>
                  <Button onClick={handleSignOut} variant='light'>Log out</Button>
                  </>
                  :
                  <>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                  </>
                }
                
                </>


              <Link  to="/profile">
                {user?.photoURL ?
                <Image roundedCircle
                src={user.photoURL} style ={{height: "30px"}}></Image>
                : 
                <FaUser style={{fontSize: "30px"}}></FaUser>

                }
              </Link>
            </Nav>
            <div className='d-lg-none '>
                <LeftSideNav></LeftSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;