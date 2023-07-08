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
import moment from "moment-jalali";

import "./FormsList.scss"

const FormDetail = () => {
  const [form, setForm] = useState();
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
        `/admin/forms/list/${id}`, {
          withCredentials: true,
        }
      )
      .then(
        ((res) => res.data)
      )
      .catch((err) => err.response);

    if (result.statusCode === 200) setForm(result.data.form)
    else setError(result.data.message)
  }

  {form ? setPageTittle(form.title) : setPageTittle("فرم یافت نشد");}

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Row className='m-0'>
        <Col lg={12} className="ps-lg-4 p-0">
          <section className="forms-section">
            {form && (
              <Row>
                <Col>
                  <BreadcrumbsCustom >
                    {id ?(
                      <>
                        <StyledBreadcrumb
                          label="فرم"
                          component={Link}
                          to={"/forms"}
                        />
                        <StyledBreadcrumb
                          label={form.category.name}
                          component={Link}
                          to={`/forms/category/${form.category._id}`}
                        />
                        <StyledBreadcrumb
                          label={form.title}
                        />
                      </>
                    ) :
                      <StyledBreadcrumb
                        label="فرم"
                      />
                    }
                  </BreadcrumbsCustom>
                  <Card className="mt-3">
                    <Card.Body>
                      <Row>
                        <h5>{form.title}</h5>
                        <Row className="mb-4">
                          <div style={{"color":"#767676", "fontSize":"14px"}} className="mb-2 detail-date">
                            <h6>{moment(form.createdAt).locale('fa').format(`jD ${persianMonths[moment().jMonth()]}، jYYYY`)}</h6>
                            <span style={{"fontWeight":"500"}}> - </span>
                            <h6 className="mt-3"><span>{form.category.name}</span></h6>
                          </div>
                        </Row>
                        <Row>
                          <Col sx={12} className="d-flex flex-column">
                            {form.images && form.images.map((image) => (
                              <img className="my-4" src={image} alt={form.title} style={{"width":"100%", "height":"100%"}}/>
                            ))}
                            <Row className="flex-column align-items-center justify-content-center my-4">
                              <h6 style={{"width":"fit-content"}}>برای دانلود و مشاهده کامل فرم ها روی لینک زیر کلیک فرمایید</h6>
                              {form.filesURL && form.filesURL.map((file, index) => (
                                <Link to={file} style={{"fontSize":"16px", "fontWeight":"500", "width":"fit-content", "color":"#33A58D"}} className="my-2">
                                  فایل {index + 1}
                                  <FileDownloadIcon fontSize="large" style={{"height":"64px", "width":"64px"}}/>
                                </Link>
                              ))}
                            </Row>
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

export default FormDetail;