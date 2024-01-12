import React from 'react'
import { Container, Form ,Button,Image, Row} from 'react-bootstrap'

const Contact = () => {
  return (
    <div>
      <h1  style={{color:'blue',textAlign:'center'}}>Contacts</h1>
        <Container fluid className="contact " >
        <p className='mt-4'>For any request contact-me or send me a message.</p>
       <Row className='contact' style={{display:'inline',justifyContent:'space-between'}}>
      
          <a className='mt-4' href=" mailto:dounambatraore@gmail.com" target="_blank"> 
            <Image src="image/IMG_7454.JPG"
            style={{width: "70px",height: "70px" }}   
            alt="E-mail_image"> 
             </Image>  </a>
        <a href="tel:+223 91 67 80 49" target="_blank"> 
        < Image src='image/IMG_7458.PNG' 
        style={{width: "70px",height: "70px" }}   
            alt="number_image"> 
            </Image></a>
            </Row>
            <Form className='form_control mt-4'>
                <input input type="text" className="form-control form-control-lg" placeholder="FullName"></input>
                <input type="email" className="form-control mt-3" placeholder="Email"></input>
                        <input type="text" className="form-control mt-3" placeholder="Subject"></input>
            </Form>
        <Button type="button" className="btn btn-tertiary mt-3">Contact Me</Button>     
        </Container>
    </div>
  )
}

export default Contact