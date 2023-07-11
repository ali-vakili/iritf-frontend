import React from "react"
import { Link, useParams } from 'react-router-dom'
import { Card, Col, Row } from "react-bootstrap";
import SectionTitle from "../../shared/components/sectionTitle/SectionTitle";
import DefaultImage from "../../shared/assets/images/default-image.jpeg"
import BreadcrumbsCustom, {StyledBreadcrumb} from "../../shared/components/breadcrumbs/Breadcrumbs ";
import moment from "moment-jalali";

import "./ProvincesList.scss"

const ProvincesList = ({ currentItems }) => {
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
    <section className="provinces-section">
      <Row>
        <Col>
          <BreadcrumbsCustom >
            {id ?(
              <>
                <StyledBreadcrumb
                  label="استان ها"
                  component={Link}
                  to={"/provinces"}
                />
                <StyledBreadcrumb
                  label={currentItems && currentItems[0].category.name}
                />
              </>
            ) :
              <StyledBreadcrumb
                label="استان ها"
              />
            }
          </BreadcrumbsCustom>
          { currentItems && currentItems.map((province) => (
            <Link to={`/provinces/${province._id}`} key={province._id}>
              <Card className="mt-3">
                <Card.Body>
                  <Row>
                    <Row>
                      <div style={{"color":"#767676", "fontSize":"14px"}} className="mb-2 date">
                        <h6>{moment(province.createdAt).locale('fa').format(`jD ${persianMonths[moment().jMonth()]}، jYYYY`)}</h6>
                      </div>
                    </Row>
                    <h5>{province.title}</h5>
                    <Col md={6}>
                      <Card.Img
                        src={province.imagesURL ? province.imagesURL[0] : province.imageURL ? province.imageURL : DefaultImage}
                        alt={province.title}
                        style={
                          (province.imagesURL === undefined && province.imageURL === undefined)
                            ? { width: "100%", height: "100%", objectFit: "cover" }
                            : { width: '100%', height: "100%" }
                        }
                      />
                    </Col>
                    <Col md={6} className='pe-md-4 card-info'>
                      <p className='pt-3 mb-3'>
                        {province.short_text}...
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

export default ProvincesList;