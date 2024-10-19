import {  NavLink } from 'react-router-dom';



import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { PiRobotBold } from "react-icons/pi";

function HeaderComponent() {

  return (
  <>
   <Navbar    data-bs-theme="dark" fixed="top" className='header-nav-bar'>
      <Container>
        <NavLink to="/"
        className="header-title">
          <PiRobotBold />
          <span>LSEG Chatbot
          </span>
          </NavLink>
     
        <Navbar.Toggle />
        
      </Container>
    </Navbar>
  </>
  );
}

export default HeaderComponent;