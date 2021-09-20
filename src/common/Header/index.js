import React, { useState } from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import  { Link } from 'react-router-dom'
import classes from './Header.Module.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
function Header({user}) {
  return (
        <>
            {/* <div className="appname"><img src="/assets/images/colorSeal.png" className="navbar-logo"/>CDIAC</div> */}
            <Navbar className={classes.header} variant="dark" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="/dashboard"><img src="/assets/images/colorSeal.png" className="navbar-logo"/><span className={classes.appname}>CDIAC</span></Navbar.Brand>
                    {user && <>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className={classes.rightside}>
                        <Nav className="mr-right">
                        {/* <NavDropdown title={`Welcome ${user}`} id="basic-nav-dropdown"> */}
                        <span><p>{`Welcome ${user.username}`}</p><p>Issuer Name: {user.issuerName ? `${user.issuerName}` : "City of Sacramento"}</p></span>
                        <NavDropdown title="" id="basic-nav-dropdown" style={{right: 0}}>
                            {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> 
                            <NavDropdown.Divider />*/}
                            <NavDropdown.Item as={Link} to="/">Logout</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                    </Navbar.Collapse></>
                    }
                </Container>
            </Navbar>
            
        </> 
        
  );
}

export default Header;