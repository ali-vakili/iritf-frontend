import React from 'react'
import { Link } from "react-router-dom"
import { Carousel, Row, Col } from 'react-bootstrap';
import DefaultImage from "../../shared/assets/images/default-image.jpeg"

import "./CarouselMain.scss"

const CarouselMain = ({ data }) => {
  const firstFourNews = data && data.news.slice(0, 4);

  return (
    <div className="carousel-container">
      <Row>
        <Col>
          <Carousel>
            {firstFourNews !== undefined && firstFourNews.map((news) => (
              <Carousel.Item key={news._id}>
                <Link to={`news/${news._id}`}>
                  <img
                    className="d-block w-100 carousel-image"
                    src={news.imagesURL ? news.imagesURL[0] : news.imageURL ? news.imageURL : DefaultImage}
                    alt={news.title}
                    style={
                      (news.imagesURL === undefined && news.imageURL === undefined)
                        ? { width: "100%", height: "400px", objectFit: "cover" }
                        : null
                    }
                  />
                </Link>
                <Carousel.Caption className="caption-background">
                  <h4 className='image-caption m-0'>{news.title}</h4>
                </Carousel.Caption >
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </div>
  )
}

export default CarouselMain