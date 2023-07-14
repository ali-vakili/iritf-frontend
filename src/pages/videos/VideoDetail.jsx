import React, { useState, useEffect } from "react"
import SideBar from "../../shared/components/sideBar/SideBar";
import axios from "axios";
import { Link } from 'react-router-dom'
import BreadcrumbsCustom, {StyledBreadcrumb} from "../../shared/components/breadcrumbs/Breadcrumbs ";
import { Card, Col, Row } from "react-bootstrap";
import { setPageTittle } from "../../utils/SetTittle";
import { useParams } from 'react-router-dom';
import DefaultImage from "../../shared/assets/images/default-image.jpeg"
import DetailShared from "../../shared/components/DetailShared/DetailShared";
import Comments from "../../shared/components/Comments/Comments";
import moment from "moment-jalali";
import Slider from "react-slick";


import "./VideosList.scss"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const VideoDetail = () => {
  const [video, setVideo] = useState();
  const [error, setError] = useState();

  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows:false,
  };

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
        `/admin/videos/list/${id}`, {
          withCredentials: true,
        }
      )
      .then(
        ((res) => res.data)
      )
      .catch((err) => err.response);

    if (result.statusCode === 200) setVideo(result.data.video)
    else setError(result.data.message)
  }

  {video ? setPageTittle(video.title) : setPageTittle("ویدیو یافت نشد");}

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Row className='m-0'>
        <Col lg={8} className="ps-lg-4 p-0">
          <section className="videos-section">
            {video && (
              <Row>
                <Col>
                  <BreadcrumbsCustom >
                    {id ?(
                      <>
                        <StyledBreadcrumb
                          label="رنکینگ"
                          component={Link}
                          to={"/videos"}
                        />
                        <StyledBreadcrumb
                          label={video.category.name}
                          component={Link}
                          to={`/videos/category/${video.category[video.category.length - 1]._id}`}
                        />
                        <StyledBreadcrumb
                          label={video.title}
                        />
                      </>
                    ) :
                      <StyledBreadcrumb
                        label="رنکینگ"
                      />
                    }
                  </BreadcrumbsCustom>
                  <Card className="mt-3">
                    <Card.Body>
                      <Row>
                        <h5 className="mb-0">{video.title}</h5>
                        <Row className="mb-3">
                          <div style={{"color":"#767676", "fontSize":"14px"}} className="mb-2 detail-date">
                            <h6>{moment(video.createdAt).locale('fa').format(`jD ${persianMonths[moment().jMonth()]}، jYYYY`)}</h6>
                            <span style={{"fontWeight":"500"}}> - </span>
                            <h6 className="mt-3"><span>{video.category.name}</span></h6>
                          </div>
                        </Row>
                        <Row className="mb-5">
                          <Col sx={12}>
                            <Slider ref={sliderRef} {...settings}>
                              {video.videos ? video.videos.map((videoUrl) => (
                                <div className="video-container" key={videoUrl}>
                                  <video className="video" src={`${process.env.REACT_APP_API_URL}/${videoUrl}`} controls />
                                </div>
                              )):
                                <div>
                                  <img
                                    alt="default-image"
                                    style={{"width":"100%", "height":"400px", "object-fit":"cover"}}
                                    src={DefaultImage}
                                  />
                                </div>
                              }
                            </Slider>
                          </Col>
                        </Row>
                        <Col sx={12} className='pe-md-4 card-info'>
                          <div className="d-flex justify-content-start mt-3 w-100 share">
                            <h6 style={{"color":"#FFF"}}>به اشتراک بگذارید</h6>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                  <DetailShared path={"videos"} />
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

export default VideoDetail;