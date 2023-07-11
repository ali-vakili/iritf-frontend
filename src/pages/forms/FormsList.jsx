import React from "react"
import { Link, useParams } from 'react-router-dom'
import { Card, Col, Row } from "react-bootstrap";
import Button from '@mui/material/Button';
import SectionTitle from "../../shared/components/sectionTitle/SectionTitle";
import BreadcrumbsCustom, {StyledBreadcrumb} from "../../shared/components/breadcrumbs/Breadcrumbs ";
import moment from "moment-jalali";

import "./FormsList.scss"

const FormsList = ({ currentItems }) => {
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
    <section className="forms-section">
      <Row>
        <Col>
          <BreadcrumbsCustom >
            {id ?(
              <>
                <StyledBreadcrumb
                  label="فرم ها"
                  component={Link}
                  to={"/forms"}
                />
                <StyledBreadcrumb
                  label={currentItems && currentItems[0].category.name}
                />
              </>
            ) :
              <StyledBreadcrumb
                label="فرم ها"
              />
            }
          </BreadcrumbsCustom>
          { currentItems && currentItems.map((form) => (
            <Link to={`/forms/${form._id}`} key={form._id}>
              <Card className="mt-3">
                <Card.Body>
                  <Row>
                    <h5>{form.title}</h5>
                    <Row>
                      <div style={{"color":"#767676", "fontSize":"14px"}} className="mb-2 date">
                        <h6>{moment(form.createdAt).locale('fa').format(`jD ${persianMonths[moment().jMonth()]}، jYYYY`)}</h6>
                        <span className="mx-2"><h6>-</h6></span>
                        <span><h6>{form.category.name}</h6></span>
                      </div>
                    </Row>
                    <div className='card-action d-flex justify-content-between align-items-center'>
                      <Button variant="contained" className='primary-color-btn'>ادامه خبر</Button>
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

export default FormsList;