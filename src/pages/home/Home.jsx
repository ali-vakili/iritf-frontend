import React, { useState } from 'react'
import { Col, Container, Row } from "react-bootstrap";
import CarouselMain from './CarouselMain';

const Home = () => {

  return (
    <Container id="contentContainer" fluid className="mt-3 mb-5 bg-white content-container-iritf">
      <Row>
        <Col lg={4} className="ps-4">
          Content
        </Col>
        <Col lg={8} className="pe-4">
          <CarouselMain />
        </Col>
      </Row>
    </Container>
  )
}

export default Home