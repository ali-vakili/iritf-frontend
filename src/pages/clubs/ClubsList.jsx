import React from "react"
import { Link, useParams } from 'react-router-dom'
import { Card, Col, Row } from "react-bootstrap";
import Button from '@mui/material/Button';
import SectionTitle from "../../shared/components/sectionTitle/SectionTitle";
import DefaultImage from "../../shared/assets/images/default-image.jpeg"
import BreadcrumbsCustom, {StyledBreadcrumb} from "../../shared/components/breadcrumbs/Breadcrumbs ";
import moment from "moment-jalali";

import "./ClubsList.scss"

const ClubsList = ({ currentItems }) => {
  const { id } = useParams();

  const persianMonths = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
  ];

  return (
    <section className="clubs-section">
      <Row>
        <Col>
          <BreadcrumbsCustom >
            {id ?(
              <>
                <StyledBreadcrumb
                  label="باشگاه ها"
                  component={Link}
                  to={"/clubs"}
                />
                <StyledBreadcrumb
                  label={currentItems && currentItems[0].category.name}
                />
              </>
            ) :
              <StyledBreadcrumb
                label="باشگاه ها"
              />
            }
          </BreadcrumbsCustom>
          <SectionTitle title="باشگاه ها" />
          { currentItems && currentItems.map((club) => (
            <Link to={`/clubs/${club._id}`} key={club._id}>
              <Card className="mt-3">
                <Card.Body>
                  <Row>
                    <Row>
                      <div style={{"color":"#767676", "fontSize":"14px"}} className="mb-2 date">
                        <h6>{moment(club.createdAt).locale('fa').format(`jD ${persianMonths[moment().jMonth()]}، jYYYY`)}</h6>
                        <span className="mx-2">-</span>
                        <h6><span>{club.category.name}</span></h6>
                      </div>
                    </Row>
                    <h5>{club.title}</h5>
                    <Col md={6}>
                      <Card.Img
                        src={club.imagesURL ? club.imagesURL[0] : club.imageURL ? club.imageURL : DefaultImage}
                        alt={club.title}
                        style={
                          (club.imagesURL === undefined && club.imageURL === undefined)
                            ? { width: "100%", height: "100%", objectFit: "cover" }
                            : { width: '100%', height: "100%" }
                        }
                      />
                    </Col>
                    <Col md={6} className='pe-md-4 card-info'>
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

export default ClubsList;