import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
const Education = () => {
  return (
    
    <div> 
        <h1 style={{color:"blue",textAlign:'center' ,fontStyle:'italic'}}>Education</h1>
        <Container className='d-flex'>
            <Row style={{border:'solid 1px brown'}}>
                <Col lg={8} md={6}  >
                    <h3>2018 Baccalaureate's degree</h3>
                    <p>Exact Sciences </p>
                </Col>

                <Col lg={8} md={6} >
                <h3>2019-2021 Bachelor's degree in Telecommunications</h3>
                <p>University of Tlemcen in Algeria </p>
                </Col>

                <Col lg={8} md={6} >
                <h3>2021-2023 Master's degree in Network and Telecommunications</h3>
                <p>University of Tlemcen in Algeria</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Education