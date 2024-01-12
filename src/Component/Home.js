import React from 'react'
import About from './About'
import Project from './Project'
import Resume from './Resume'
import Footer from './Footer'
import Services from './Services'
import Contact from './Contact'
const Home = () => {
  return (
    <div>
     <div>
      <About/>
     </div>
    <div>
      <Project/>
    </div>
    <br/>
    <br/>   
    <div>
      <Resume/>
    </div> 
    <br/>
    <br/> 
    <div>
      <Services/>
    </div>   
    <br/>
    <br/> 
    <div>
      <Contact/>
    </div>   
    <br/>
    <br/> 
    <div>
      <Footer/>
    </div>   
      </div>
      
  )
}

export default Home