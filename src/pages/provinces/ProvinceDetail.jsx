import React, { useState, useEffect } from "react"
import SideBar from "../../shared/components/sideBar/SideBar";
import axios from "axios";
import { Link } from 'react-router-dom'
import BreadcrumbsCustom, {StyledBreadcrumb} from "../../shared/components/breadcrumbs/Breadcrumbs ";
import { Carousel, Card, Col, Row } from "react-bootstrap";
import { setPageTittle } from "../../utils/SetTittle";
import { useParams } from 'react-router-dom';
import DetailShared from "../../shared/components/DetailShared/DetailShared";
import Comments from "../../shared/components/Comments/Comments";
import moment from "jalali-moment";

import "./ProvincesList.scss"

const ProvinceDetail = () => {
  const [province, setProvince] = useState();
  const [error, setError] = useState();

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
  ]

  const getData = async () => {
    setError("")
    const result = await axios
      .get(
        `/admin/province/list/${id}`, {
          withCredentials: true,
        }
      )
      .then(
        ((res) => res.data)
      )
      .catch((err) => err.response);

    if (result.statusCode === 200) setProvince(result.data.provinces)
    else setError(result.data.message)
  }

  {province ? setPageTittle(province.title) : setPageTittle("استان یافت نشد");}

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Row className='m-0'>
        <Col lg={8} className="ps-lg-4 p-0">
          <section className="provinces-section">
            {province && (
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
                          label={province.category.name}
                          component={Link}
                          to={`/provinces/category/${province.category._id}`}
                        />
                        <StyledBreadcrumb
                          label={province.title}
                        />
                      </>
                    ) :
                      <StyledBreadcrumb
                        label="استان ها"
                      />
                    }
                  </BreadcrumbsCustom>
                  <Card className="mt-3">
                    <div className="carousel-container">
                      <Row>
                        <Col>
                        {province.imagesURL && (
                          <Carousel>
                            {province.imagesURL.map((image) => (
                              <Carousel.Item>
                                <img
                                  className="d-block w-100 carousel-image"
                                  src={image}
                                  alt={province.title}
                                />
                              </Carousel.Item>
                            ))}
                          </Carousel>
                        )}
                        </Col>
                      </Row>
                    </div>
                    <Card.Body>
                      <Row>
                        <h5>{province.title}</h5>
                        <Row>
                          <div style={{"color":"#767676", "fontSize":"14px"}} className="mb-2 detail-date">
                            <h6>{moment(province.createdAt).locale('fa').format(`jD ${persianMonths[moment().jMonth()]}، jYYYY`)}</h6>
                            <span style={{"fontWeight":"500"}}> - </span>
                            <h6 className="mt-3"><span>{province.category.name}</span></h6>
                          </div>
                        </Row>
                        <Col sx={12} className='pe-md-4 card-info'>
                          <p className='pt-3 mt-3'>
                            {province.short_text}
                          </p>
                          <p className='pt-3 mt-3'>
                            {province.text}
                          </p>
                          <div className="d-flex justify-content-start mt-3 w-100 share">
                            <h5 style={{"color":"#FFF"}}>به اشتراک بگذارید</h5>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                  <DetailShared path={"provinces"} />
                  <Comments />
                </Col>
              </Row>
            )}
            {error && (
              <div className="d-flex justify-content-center">
                <h3>{error}</h3>
              </div>
            )}
          </section>
        </Col>
        <Col lg={4} className="left-side-content p-0">
          <SideBar/>
        </Col>
      </Row>
    </>
  )
}

export default ProvinceDetail;