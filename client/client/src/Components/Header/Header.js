import React,{useEffect,useState} from 'react'
import {Route, Routes, NavLink, Navigate} from 'react-router-dom'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

//importing pages
import Home from '../Home/Home'
import Login from '../Login/Login'
import SignUp from '../Signup/Signup'
import ScreenQs from '../ScreenQs/ScreenQs'
import Admin from '../Admin/Admin'

function Header() {
  let navigate=useNavigate()

  let [status,setStatus]=useState(true)

  useEffect(()=>{
    if(localStorage.getItem('token')===null){
      setStatus(false)
    }
    else
    setStatus(true)
    console.log(status)
  },[])
  
  

  const logout=()=>{
    localStorage.clear()
    if(localStorage.getItem('token')===null){
      setStatus(false)
    }
    else
    setStatus(true)
    console.log(status)
    navigate('/')
  }

  return (
    <div>

      {/* Navbar */}
      <Navbar collapseOnSelect bg="info" expand="md" variant='info' sticky='top'>
          <Container>
            <Navbar.Brand href='#' className='me-auto'> Screening Evaluation</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                {status!==true ?
                  (
                    <>

                    <Nav.Item>
                      <Nav.Link eventKey={2} as={NavLink} to="/">
                        Login
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey={3} as={NavLink} to="/signup">
                        Signup
                      </Nav.Link>
                    </Nav.Item>
                  </>
                  ) :
                  (
                    <>
                      <Nav.Item>
                      <Nav.Link eventKey={4} as={NavLink} to="/screeningqs">
                        Questions
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link onClick={logout} >
                        Logout
                      </Nav.Link>
                    </Nav.Item>
                    </>
                  )
                }

                  

              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>

      {/* Routes */}
      <Routes>
        <Route path='/success' element={<Home />}/>
        <Route path='/' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/screeningqs' element={<ScreenQs />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </div>
  )
}

export default Header