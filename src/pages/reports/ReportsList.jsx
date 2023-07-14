import React from "react"
import { Link, useParams } from 'react-router-dom'
import Button from '@mui/material/Button';
import { Card, Col, Row } from "react-bootstrap";
import SectionTitle from "../../shared/components/sectionTitle/SectionTitle";
import DefaultImage from "../../shared/assets/images/default-image.jpeg"
import BreadcrumbsCustom, {StyledBreadcrumb} from "../../shared/components/breadcrumbs/Breadcrumbs ";
import moment from "moment-jalali";

import "./ReportsList.scss"

const ReportsList = ({ currentItems }) => {
  const { id } = useParams();

  return (
    <section className="reports-section">
      <Row>
        <Col>
          <BreadcrumbsCustom >
            {id ? (
              <>
                <StyledBreadcrumb
                  label="گزارش تصویری"
                  component={Link}
                  to={"/reports"}
                />
                <StyledBreadcrumb
                  label={currentItems && currentItems[0].category[currentItems[0].category.length - 1].name}
                />
              </>
            ) :
              <StyledBreadcrumb
                label="گزارش تصویری"
              />
            }
          </BreadcrumbsCustom>
          { currentItems && currentItems.map((report) => (
            <Link to={`/reports/${report._id}`} key={report._id}>
              <Card className="mt-3">
                <Card.Body>
                  <Row>
                    <h5>{report.title}</h5>
                    <Row>
                      <div style={{"color":"#767676", "fontSize":"14px"}} className="mb-2 date">
                        <h6>{moment(report.createdAt).locale("fa").format("jYYYY/jMM/jDD")}</h6>
                        <span className="mx-2">-</span>
                        <h6><span>{report.category.name}</span></h6>
                      </div>
                    </Row>
                    <Col md={6}>
                      <Card.Img
                        src={report.imagesURL ? report.imagesURL[0] : report.imageURL ? report.imageURL : DefaultImage}
                        alt={report.title}
                        style={
                          (report.imagesURL === undefined && report.imageURL === undefined)
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

export default ReportsList;