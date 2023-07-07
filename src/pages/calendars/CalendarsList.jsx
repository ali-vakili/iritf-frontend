import React from "react"
import { Link } from 'react-router-dom'
import { Card, Col, Row } from "react-bootstrap";
import Button from '@mui/material/Button';
import SectionTitle from "../../shared/components/sectionTitle/SectionTitle";
import BreadcrumbsCustom, {StyledBreadcrumb} from "../../shared/components/breadcrumbs/Breadcrumbs ";
import moment from "jalali-moment";

import "./CalendarsList.scss"

const CalendarsList = ({ currentItems }) => {

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
    <section className="calendars-section">
      <Row>
        <Col>
          <BreadcrumbsCustom >
            <StyledBreadcrumb
              label="تقویم ها"
            />
          </BreadcrumbsCustom>
          <SectionTitle title="تقویم ها" />
          { currentItems && currentItems.map((calendar) => (
            <Link to={`/calendars/${calendar._id}`} key={calendar._id}>
              <Card className="mt-3">
                <Card.Body>
                  <Row>
                    <h5>{calendar.title}</h5>
                    <Row>
                      <div style={{"color":"#767676", "fontSize":"14px"}} className="mb-2 date">
                        <h6>{moment(calendar.createdAt).locale('fa').format(`D ${persianMonths[moment().jMonth()]}، YYYY`)}</h6>
                        <span className="mx-2"><h6>-</h6></span>
                        <span><h6>{calendar.category.name}</h6></span>
                        <div className="mt-2">
                          {calendar.tags.map((tag) => (
                            <>
                              <span><h6>{tag}</h6></span>
                              <span className="mx-1"><h6>/</h6></span>
                            </>
                          ))}
                        </div>
                      </div>
                    </Row>
                    <div className='card-action d-flex justify-content-between align-items-center'>
                      <Button variant="contained" className='primary-color-btn'>مشاهده تقویم</Button>
                    </div>
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

export default CalendarsList;