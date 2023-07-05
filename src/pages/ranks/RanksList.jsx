import React from "react"
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import { Card, Col, Row } from "react-bootstrap";
import SideBar from "../../shared/components/sideBar/SideBar";
import SectionTitle from "../../shared/components/sectionTitle/SectionTitle";
import DefaultImage from "../../shared/assets/images/default-image.jpeg"
import BreadcrumbsCustom, {StyledBreadcrumb} from "../../shared/components/breadcrumbs/Breadcrumbs ";
import moment from "jalali-moment";

import "./RanksList.scss"

const RanksList = ({ currentItems }) => {

  return (
    <section className="ranks-section">
      <Row>
        <Col>
          <BreadcrumbsCustom >
            <StyledBreadcrumb
              label="رنکینگ"
            />
          </BreadcrumbsCustom>
          <SectionTitle title="رنکینگ" />
          { currentItems && currentItems.map((rank) => (
            <Link to={`/ranks/category/?section=ranks&categoryId=${rank._id}`} key={rank._id}>
              <Card className="mt-3">
                <Card.Body>
                  <Row>
                    <h5>{rank.title}</h5>
                    <Row>
                      <div style={{"color":"#767676", "fontSize":"14px"}} className="mb-2">
                        {moment(rank.createdAt).locale("fa").format("jYYYY/jMM/jDD")}
                        <span className="mx-2">-</span>
                        <span>{rank.category.name}</span>
                      </div>
                    </Row>
                    <Col md={6}>
                      <Card.Img
                        src={rank.imagesURL ? rank.imagesURL[0] : rank.imageURL ? rank.imageURL : DefaultImage}
                        alt={rank.title}
                        style={
                          (rank.imagesURL === undefined && rank.imageURL === undefined)
                            ? { width: "100%", height: "100%", objectFit: "cover" }
                            : { width: '100%', height: "100%" }
                        }
                      />
                    </Col>
                    <Col md={6} className='pe-md-4 card-info'>
                      <p className='pt-3 mb-3'>
                        برای دانلود و مشاهده کامل رنکینگ روی لینک زیر کلیک فرمایید&nbsp;
                        {rank.title}
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

export default RanksList;