import React from 'react';
import './App.css';
import Home from './Component/Home'
import About from './Component/About'
import Project from './Component/Project'
import Resume from './Component/Resume'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import { Navbar,Nav,Container,Image,Button,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Component/Contact';

function App() {
  

 
  return (
    <div >
      <Router>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <Navbar.Brand className=" justify-content-between" href="/"> 
          <Image src="/image/IMG_7468.PNG " roundedCircle style={{height:"5%", width:"5%"}} ></Image> Dounamba
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" nav-menu me-auto my-2 my-lg-0 ms-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" 
              className=' Nav-link p-3'>Home</Nav.Link>
            <Nav.Link href="/about" 
              className=' Nav-link p-3' >About</Nav.Link>
            <Nav.Link href="/project" 
               className=' Nav-link p-3' >Project</Nav.Link>
            <Nav.Link href="/resume"  
               className='Nav-link p-3' >Resume</Nav.Link> 
               <Nav.Link href="/contact"  
               className='Nav-link p-3' >Contact</Nav.Link> 
          </Nav>
          
        </Navbar.Collapse>
      </Container>
</Navbar>
        <Routes>
        <Route exact path="/" element={<Home />}/> 
        <Route exact path="/about" element={<About/>}/>
        <Route path="/project" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
