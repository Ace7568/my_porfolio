import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
// import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavBar = () => {

    const [activelink,setactivelink] = useState('home');
    const [scroll, setscroll] = useState(false);

    useEffect(() => {
        const Scroll = () => {
            if(window.scrollX > 50){
                setscroll(true);
            } else {
                setscroll(false);
            }

            window.addEventListener("scroll", Scroll);

            window.removeEventListener("scroll", Scroll)
        }
    },[])

    const onupdate  = (link) => {
        setactivelink(link);
    }
  return (
    <Navbar expand="lg" className={scroll ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">JAI SHREE RAM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activelink==='Home' ? "active navbar-link" : "navbar-link"} onClick={() => onupdate('Home')}>Home</Nav.Link>
            <Nav.Link href="#skill" className={activelink==='Skills' ? "active navbar-link" : "navbar-link"} onClick={() => onupdate('Skills')}>Skills</Nav.Link>
            <Nav.Link href="#project" className={activelink==='Projects' ? "active navbar-link" : "navbar-link"} onClick={() => onupdate('Projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icons'>
                <a href='#'><img src={navIcon1} alt=''/></a>
                <a href='#'><img src={navIcon2} alt=''/></a>
                <a href='#'><img src={navIcon3} alt=''/></a>
            </div>
            <button className='vvd' onClick={() => {console.log("connect")}}>Contact us</button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
