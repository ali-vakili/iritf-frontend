import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Row, Col } from 'react-bootstrap';
import Button from '@mui/material/Button';
import DefaultImage from "../../shared/assets/images/default-image.jpeg"
import moment from "jalali-moment";


const NewsHome = ({ data }) => {
  const restNews = data && data.news.slice(5, 14);
  const firstNews = restNews && restNews[0];
  const firstFourNews = restNews && restNews.slice(1, 5);
  const SecondFourNews = restNews && restNews.slice(5, 9);

  return (
    <div className='my-3'>
      {firstNews !== undefined && (
        <Link to={`news/${firstNews._id}`}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={4}>
                  <Card.Img
                    src={firstNews.imagesURL ? firstNews.imagesURL[0] : firstNews.imageURL ? firstNews.imageURL : DefaultImage}
                    alt={firstNews.title}
                    style={
                      (firstNews.imagesURL === undefined && firstNews.imageURL === undefined)
                        ? { width: "100%", height: "100%", objectFit: "cover" }
                        : { width: '100%', height: "100%" }
                    }
                  />
                </Col>
                <Col md={8} className='pe-md-4'>
                  <h5 className='pt-3 mb-3'>
                    {firstNews.title}
                  </h5>
                  <div className='card-action d-flex justify-content-between align-items-center'>
                    <Button variant="contained" className='primary-color-btn'>ادامه خبر</Button>
                    <span style={{"color":"#767676"}}>{moment(firstNews.createdAt).locale("fa").format("jYYYY/jMM/jDD")}</span>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Link>
      )}

      <div className='news-list px-md-3 mt-4'>
        <Row>
          <Col md={6}>
            {firstFourNews !== undefined && firstFourNews.map((news) => (
              <Link to={`news/${news._id}`}>
                <div className='news'>
                  <img src={news.imagesURL ? news.imagesURL[0] : news.imageURL ? news.imageURL : DefaultImage} alt={news.title}/>
                  <div className='news-info'>
                    <p>{news.title}</p>
                  </div>
                </div>
              </Link>
            ))}
          </Col>

          <Col md={6}>
            {SecondFourNews !== undefined && SecondFourNews.map((news) => (
              <Link to={`news/${news._id}`}>
                <div className='news'>
                  <img src={news.imagesURL ? news.imagesURL[0] : news.imageURL ? news.imageURL : DefaultImage} alt={news.title} />
                  <div className='news-info'>
                    <p>
                      {news.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </Col>
        </Row>

      </div>
    </div>
  )
}

export default NewsHome