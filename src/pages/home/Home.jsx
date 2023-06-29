import React, { useState } from 'react'
import { Col, Container, Row } from "react-bootstrap";
import CarouselMain from './CarouselMain';
import SectionTitle from '../../shared/components/sectionTitle/SectionTitle';
import NewsHome from './NewsHome';
import RanksHome from './RanksHome';
import ImageReportsHome from './ImageReportsHome';
import SideBar from '../../shared/components/sideBar/SideBar';


import "./Home.scss"


const Home = () => {

  return (
    <Container id="contentContainer" fluid className="mt-3 mb-4 bg-white content-container-iritf">
      <Row className='m-0'>
        <Col lg={8} className="pe-lg-3 p-0">
          <CarouselMain />
          <section id='newsSectionIritf' className='news-section-iritf mt-4 my-2'>
            <Row>
              <Col>
                <SectionTitle title="اخبار فدراسیون تنیس" />
                <NewsHome />
              </Col>
            </Row>
          </section>
          <section id='ranksSectionIritf' className='ranks-section-iritf my-2'>
            <Row>
              <Col>
                <RanksHome />
              </Col>
            </Row>
          </section>
          <section id='reportsSectionIritf' className='reports-section-iritf mt-4 my-2'>
            <Row>
              <Col>
                <SectionTitle title="گزارش تصویری" />
                <ImageReportsHome />
              </Col>
            </Row>
          </section>
          <section id='videosSectionIritf' className='videos-section-iritf mt-4 my-2'>
            <Row>
              <Col>
                <SectionTitle title="ویدیو ها" />
              </Col>
            </Row>
          </section>
        </Col>
        <Col lg={4} className="left-side-content p-0">
          <SideBar />
        </Col>
      </Row>
    </Container>
  )
}

export default Home