import React, { useState, useEffect } from "react"
import SideBar from "../../shared/components/sideBar/SideBar";
import axios from "axios";
import { Link } from 'react-router-dom'
import BreadcrumbsCustom, {StyledBreadcrumb} from "../../shared/components/breadcrumbs/Breadcrumbs ";
import { Carousel, Card, Col, Row } from "react-bootstrap";
import { setPageTittle } from "../../utils/SetTittle";
import { useParams } from 'react-router-dom';
import DetailShared from "../../shared/components/DetailShared/DetailShared";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Comments from "../../shared/components/Comments/Comments";
import moment from "jalali-moment";

import "./ClubsList.scss"

const ClubDetail = () => {
  const [club, setClub] = useState();
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
        `/admin/clubs/list/${id}`, {
          withCredentials: true,
        }
      )
      .then(
        ((res) => res.data)
      )
      .catch((err) => err.response);

    if (result.statusCode === 200) setClub(result.data.club)
    else setError(result.data.message)
  }

  {club ? setPageTittle(club.title) : setPageTittle("باشگاه یافت نشد");}

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Row className='m-0'>
        <Col lg={8} className="ps-lg-4 p-0">
          <section className="clubs-section">
            {club && (
              <Row>
                <Col>
                  <BreadcrumbsCustom >
                    {id ?(
                      <>
                        <StyledBreadcrumb
                          label="باشگاه"
                          component={Link}
                          to={"/clubs"}
                        />
                        <StyledBreadcrumb
                          label={club.category.name}
                          component={Link}
                          to={`/clubs/category/${club.category._id}`}
                        />
                        <StyledBreadcrumb
                          label={club.title}
                        />
                      </>
                    ) :
                      <StyledBreadcrumb
                        label="باشگاه"
                      />
                    }
                  </BreadcrumbsCustom>
                  <Card className="mt-3">
                    <div className="carousel-container">
                      <Row>
                        <Col>
                        {club.imagesURL && (
                          <Carousel>
                            {club.imagesURL.map((image) => (
                              <Carousel.Item>
                                <img
                                  className="d-block w-100 carousel-image"
                                  src={image}
                                  alt={club.title}
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
                        <h5>{club.title}</h5>
                        <Row>
                          <div style={{"color":"#767676", "fontSize":"14px"}} className="mb-2 detail-date">
                            <h6>{moment(club.createdAt).locale('fa').format(`jD ${persianMonths[moment().jMonth()]}، jYYYY`)}</h6>
                            <span style={{"fontWeight":"500"}}> - </span>
                            <h6 className="mt-3"><span>{club.category.name}</span></h6>
                          </div>
                        </Row>
                        <Col sx={12} className='pe-md-4 card-info'>
                          <Link to={club.siteLink} className='pt-3 mt-3'>
                            سایت باشگاه 
                          </Link>
                          <p className='pt-3 mt-3'>
                            {club.text}
                          </p>
                          <Row className="flex-column align-items-center justify-content-center my-4">
                          <h6 style={{"width":"fit-content"}}>برای دانلود و مشاهده کامل اطلاعات باشگاه روی لینک زیر کلیک فرمایید</h6>
                          {club.fileURL && (
                            <Link to={club.fileURL[0]} style={{"fontSize":"16px", "fontWeight":"500","width":"fit-content", "color":"#33A58D"}} className="mt-2">
                              دانلود اطلاعات باشگاه
                              <FileDownloadIcon fontSize="large" style={{"height":"64px", "width":"64px"}}/>
                            </Link>
                          )}
                        </Row>
                          <div className="d-flex justify-content-start mt-3 w-100 share">
                            <h5 style={{"color":"#FFF"}}>به اشتراک بگذارید</h5>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                  <DetailShared path={"news"} />
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

export default NewsDetail;