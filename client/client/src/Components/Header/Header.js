import React,{useEffect,useState} from 'react'
import {Route, Routes, NavLink, Navigate} from 'react-router-dom'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'

//importing pages
import Home from '../Home/Home'
import SignUp from '../Signup/Signup'
import ScreenQs from '../ScreenQs/ScreenQs'
import Admin from '../Admin/Admin'

function Header() {

  return (
    <div>

      {/* Navbar */}
      <Navbar collapseOnSelect bg="info" expand="md" variant='info' sticky='top'>
          <Container>
            <Navbar.Brand href='#' className='me-auto'> Screening Evaluation</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>

      {/* Routes */}
      <Routes>
        <Route path='/success' element={<Home />}/>
        <Route path='/' element={<SignUp />}/>
        <Route path='/screeningqs' element={<ScreenQs />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </div>
  )
}

export default Header