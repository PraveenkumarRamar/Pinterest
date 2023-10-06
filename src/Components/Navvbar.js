import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import pinterest from '../Components/pinterest.png'
import Button from 'react-bootstrap/Button';


function Navvbar() {

    return <>
        <Navbar style={{"position":"sticky"}} >
            <Container>
                <img src={pinterest} style={{"width":"3rem"}} alt=""/>
                <Navbar.Brand  className='nav-title' style={{"color":"red","fontWeight":"400"}}>Pinterest</Navbar.Brand>
                <Nav className="me-auto" style={{"paddingLeft":"34rem"}}>
                    <Nav.Link className='navlink' style={{"color":"black","paddingRight":"1rem","fontWeight":"500"}} >About</Nav.Link>
                    <Nav.Link className='navlink' style={{"color":"black","paddingRight":"1rem","fontWeight":"500"}} >Business</Nav.Link>
                    <Nav.Link className='navlink' style={{"color":"black","paddingRight":"1rem","fontWeight":"500"}} >Blog</Nav.Link>
                    <Nav.Link style={{"color":"black","backgroundColor":"red","borderRadius":"50px","fontWeight":"500"}}  >Log-in</Nav.Link>
                    <Nav.Link style={{"color":"black","backgroundColor":"whitesmoke","borderRadius":"50px","fontWeight":"500" }} >Sign-up</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>
}

export default Navvbar