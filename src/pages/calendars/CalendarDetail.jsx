import React, { useState, useEffect } from "react"
import axios from "axios";
import { Link } from 'react-router-dom'
import BreadcrumbsCustom, {StyledBreadcrumb} from "../../shared/components/breadcrumbs/Breadcrumbs ";
import { Card, Col, Row } from "react-bootstrap";
import { setPageTittle } from "../../utils/SetTittle";
import { useParams } from 'react-router-dom';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DetailShared from "../../shared/components/DetailShared/DetailShared";
import Comments from "../../shared/components/Comments/Comments";
import moment from "jalali-moment";

import "./CalendarsList.scss"

const CalendarDetail = () => {
  const [calendar, setCalendar] = useState();
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
    const result = await axios
      .get(
        `/admin/calendars/list/${id}`, {
          withCredentials: true,
        }
      )
      .then(
        ((res) => res.data)
      )
      .catch((err) => err.response);

    if (result.statusCode === 200) setCalendar(result.data.calendar)
    else setError(result.data.message)
  }

  {calendar ? setPageTittle(calendar.title) : setPageTittle("نقویم یافت نشد");}

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Row className='m-0'>
        <Col lg={12} className="ps-lg-4 p-0">
          <section className="forms-section">
            {calendar && (
              <Row>
                <Col>
                  <BreadcrumbsCustom >
                    {id ?(
                      <>
                        <StyledBreadcrumb
                          label="فرم"
                          component={Link}
                          to={"/calendars"}
                        />
                        <StyledBreadcrumb
                          label={calendar.category.name}
                          component={Link}
                          to={`/calendars/category/${calendar.category._id}`}
                        />
                        <StyledBreadcrumb
                          label={calendar.title}
                        />
                      </>
                    ) :
                      <StyledBreadcrumb
                        label="تقویم"
                      />
                    }
                  </BreadcrumbsCustom>
                  <Card className="mt-3">
                    <Card.Body>
                      <Row>
                        <h5>{calendar.title}</h5>
                        <Row className="mb-4">
                          <div style={{"color":"#767676", "fontSize":"14px"}} className="mb-2 detail-date">
                            <h6>{moment(calendar.createdAt).locale('fa').format(`jD ${persianMonths[moment().jMonth()]}، jYYYY`)}</h6>
                            <span style={{"fontWeight":"500"}}> - </span>
                            <h6 className="mt-3"><span>{calendar.category.name}</span></h6>
                          </div>
                        </Row>
                        <Row>
                          <Col sx={12} className="d-flex flex-column">
                            {calendar.images && calendar.images.map((image) => (
                              <img className="my-4" src={image} alt={calendar.title} style={{"width":"100%", "height":"100%"}}/>
                            ))}
                            <Row className="flex-column align-items-center justify-content-center my-4">
                              <h6 style={{"width":"fit-content"}}>برای دانلود و مشاهده کامل فرم ها روی لینک زیر کلیک فرمایید</h6>
                              {calendar.filesURL && calendar.filesURL.map((file, index) => (
                                <Link to={file} style={{"fontSize":"16px", "fontWeight":"500", "width":"fit-content", "color":"#33A58D"}}>
                                  فایل{index}
                                  <FileDownloadIcon fontSize="large" style={{"height":"64px", "width":"64px"}}/>
                                </Link>
                              ))}
                            </Row>
                          </Col>
                        </Row>
                        <Col sx={12} className='pe-md-4 card-info'>
                          <div className="d-flex justify-content-start mt-3 w-100 share">
                            <h5 style={{"color":"#FFF"}}>به اشتراک بگذارید</h5>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                  <DetailShared path={"forms"} />
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
      </Row>
    </>
  )
}

export default CalendarDetail;