import React from 'react'
import { Container,Row,Col,Card,Button } from 'react-bootstrap'
const Project = () => {
  return (
    <div>
        <Container fluid>
            <Row style={{ textAlign:"center" , padding:"10px" }}>
                <h1 className="heading">
                        My Recent <strong style={{color:"purple"}}>Works </strong>
                </h1>
                <h2 style={{paddingBottom:'20px'}}>
                    Here are a few projects I've worked on recently.
                </h2>
            </Row>
            <Row style={{ justifyContent: "center"}}>
                <Col className='lg-4 mt-4'>
                    <Card style={{border:"3px brown solid",paddingBottom: "10px",width:"100%",height:"100%"}}>
                     <Card.Img variant="top" src="/image/IMG_7448.JPG" />
                        <Card.Body className='m-3 p-4 '>
                            <Card.Title><h5 className='text-danger'> Portfolio </h5></Card.Title>
                            <Card.Text>
                            My personal portfolio with HTML5 and Bootstrap
                                </Card.Text>
                                <Button variant="primary" href="https://adjababy.github.io/My-portfolio/">Go to the site</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col  className='lg-4 mt-4'>
                    <Card style={{border:"3px brown solid",paddingBottom: "10px", width:'100%',height:'100%'}}>
                     <Card.Img variant="top" src="/image/logo KTS Trans.jpg" />
                        <Card.Body>
                            <Card.Title><h5 className='text-danger'> KTS Trans</h5></Card.Title>
                                <Card.Text>
                                A website using Canva
                                </Card.Text>
                                    <Button variant="primary" href="https://ktstrans.my.canva.site/" target='_blank'>Go to the site </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Project