import React from "react"
import { Link, useParams } from 'react-router-dom'
import { Card, Col, Row } from "react-bootstrap";
import SectionTitle from "../../shared/components/sectionTitle/SectionTitle";
import DefaultImage from "../../shared/assets/images/default-image.jpeg"
import BreadcrumbsCustom, {StyledBreadcrumb} from "../../shared/components/breadcrumbs/Breadcrumbs ";
import moment from "moment-jalali";

import "./CommitteesList.scss"

const CommitteesList = ({ currentItems }) => {
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
    <section className="committees-section">
      <Row>
        <Col>
          <BreadcrumbsCustom >
            {id ?(
              <>
                <StyledBreadcrumb
                  label="کمیته ها"
                  component={Link}
                  to={"/committees"}
                />
                <StyledBreadcrumb
                  label={currentItems && currentItems[0].category.name}
                />
              </>
            ) :
              <StyledBreadcrumb
                label="کمیته ها"
              />
            }
          </BreadcrumbsCustom>
          <SectionTitle title="کمیته ها" />
          { currentItems && currentItems.map((committee) => (
            <Link to={`/committees/${committee._id}`} key={committee._id}>
              <Card className="mt-3">
                <Card.Body>
                  <Row>
                    <Row>
                      <div style={{"color":"#767676", "fontSize":"14px"}} className="mb-2 date">
                        <h6>{moment(committee.createdAt).locale('fa').format(`jD ${persianMonths[moment().jMonth()]}، jYYYY`)}</h6>
                      </div>
                    </Row>
                    <h5>{committee.title}</h5>
                    <Col md={6}>
                      <Card.Img
                        src={committee.imagesURL ? committee.imagesURL[0] : committee.imageURL ? committee.imageURL : DefaultImage}
                        alt={committee.title}
                        style={
                          (committee.imagesURL === undefined && committee.imageURL === undefined)
                            ? { width: "100%", height: "100%", objectFit: "cover" }
                            : { width: '100%', height: "100%" }
                        }
                      />
                    </Col>
                    <Col md={6} className='pe-md-4 card-info'>
                      <p className='pt-3 mb-3'>
                        {committee.short_text}...
                      </p>
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

export default CommitteesList;