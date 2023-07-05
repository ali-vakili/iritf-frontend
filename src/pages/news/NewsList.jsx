import React from "react"
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import { Card, Col, Row } from "react-bootstrap";
import SectionTitle from "../../shared/components/sectionTitle/SectionTitle";
import DefaultImage from "../../shared/assets/images/default-image.jpeg"
import BreadcrumbsCustom, {StyledBreadcrumb} from "../../shared/components/breadcrumbs/Breadcrumbs ";
import moment from "jalali-moment";

import "./NewsList.scss"

const NewsList = ({ currentItems }) => {

  return (
    <section className="news-section">
      <Row>
        <Col>
          <BreadcrumbsCustom >
            <StyledBreadcrumb
              label="اخبار"
            />
          </BreadcrumbsCustom>
          <SectionTitle title="اخبار" />
          { currentItems && currentItems.map((news) => (
            <Link to={`/news/category/?section=news&categoryId=${news._id}`} key={news._id}>
              <Card className="mt-3">
                <Card.Body>
                  <Row>
                    <h5>{news.title}</h5>
                    <Row>
                      <div style={{"color":"#767676", "fontSize":"14px"}} className="mb-2">
                        {moment(news.createdAt).locale("fa").format("jYYYY/jMM/jDD")}
                        <span className="mx-2">-</span>
                        <span>{news.category.name}</span>
                      </div>
                    </Row>
                    <Col md={6}>
                      <Card.Img
                        src={news.imagesURL ? news.imagesURL[0] : news.imageURL ? news.imageURL : DefaultImage}
                        alt={news.title}
                        style={
                          (news.imagesURL === undefined && news.imageURL === undefined)
                            ? { width: "100%", height: "100%", objectFit: "cover" }
                            : { width: '100%', height: "100%" }
                        }
                      />
                    </Col>
                    <Col md={6} className='pe-md-4 card-info'>
                      <p className='pt-3 mb-3'>
                        برای مشاهده کامل خبر روی لینک زیر کلیک فرمایید&nbsp;
                        {news.title}
                      </p>
                      <div className='card-action d-flex justify-content-between align-items-center'>
                        <Button variant="contained" className='primary-color-btn'>ادامه خبر</Button>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Link>
          )) }
        </Col>
      </Row>
    </section>
  );
}

export default NewsList;