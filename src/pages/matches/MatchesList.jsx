import React from "react"
import { Link, useParams } from 'react-router-dom'
import { Card, Col, Row } from "react-bootstrap";
import Button from '@mui/material/Button';
import SectionTitle from "../../shared/components/sectionTitle/SectionTitle";
import DefaultImage from "../../shared/assets/images/default-image.jpeg"
import BreadcrumbsCustom, {StyledBreadcrumb} from "../../shared/components/breadcrumbs/Breadcrumbs ";
import moment from "moment-jalali";

import "./MatchesList.scss"

const MatchesList = ({ currentItems }) => {
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

  const currentDate = moment().locale("fa").format('jYYYY/jMM/jDD');

  return (
    <section className="matches-section">
      <Row>
        <Col>
          <BreadcrumbsCustom >
            {id ?(
              <>
                <StyledBreadcrumb
                  label="مسابقات"
                  component={Link}
                  to={"/matches"}
                />
                <StyledBreadcrumb
                  label={currentItems && currentItems[0].category.name}
                />
              </>
            ) :
              <StyledBreadcrumb
                label="مسابقات"
              />
            }
          </BreadcrumbsCustom>
          <SectionTitle title="مسابقات" />
          { currentItems && currentItems.map((match) => (
            <>
              {!moment(match.createdAt, 'jYYYY/jMM/jDD').isBefore(currentDate, 'day') && (
                <Link to={`/matches/${match._id}`} key={match._id}>
                  <Card className="mt-3">
                    <Card.Body>
                      <Row>
                        <h5>{match.title}</h5>
                        <Row>
                          <div style={{"color":"#767676", "fontSize":"14px"}} className="mb-2 date">
                            <h6>{moment(match.createdAt).locale('fa').format(`jD ${persianMonths[moment().jMonth()]}، jYYYY`)}</h6>
                            <span className="mx-2">-</span>
                            <h6><span>{match.category.name}</span></h6>
                          </div>
                          <div className="mt-2 mb-4">
                            <span>تاریخ انقضا :</span>
                            <h6 style={{"display":"inline"}}><span>{moment(match.expireDate).locale("fa").format("jYYYY/jMM/jDD")}</span></h6>
                          </div>
                        </Row>
                        <Col md={6}>
                          <Card.Img
                            src={match.imageURL ? match.imageURL : DefaultImage}
                            alt={match.title}
                            style={
                              (match.imageURL === undefined)
                                ? { width: "100%", height: "100%", objectFit: "cover" }
                                : { width: '100%', height: "100%" }
                            }
                          />
                        </Col>
                        <Col md={6} className='pe-md-4 card-info'>
                          <div className='card-action d-flex justify-content-between align-items-center'>
                            <Button variant="contained" className='primary-color-btn'>مشاهده مسابقات</Button>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Link>
              )}
            </>
          )) }
        </Col>
      </Row>
    </section>
  );
}

export default MatchesList;