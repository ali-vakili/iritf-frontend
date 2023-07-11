import React, { useState, useEffect } from "react"
import axios from "axios";
import { Link } from 'react-router-dom'
import BreadcrumbsCustom, {StyledBreadcrumb} from "../../shared/components/breadcrumbs/Breadcrumbs ";
import { Card, Col, Row } from "react-bootstrap";
import { setPageTittle } from "../../utils/SetTittle";
import { useParams } from 'react-router-dom';
import DetailShared from "../../shared/components/DetailShared/DetailShared";
import Comments from "../../shared/components/Comments/Comments";
import moment from "moment-jalali";

import "./ReportsList.scss"

const ReportDetail = () => {
  const [report, setReport] = useState();
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
        `/admin/reports/list/${id}`, {
          withCredentials: true,
        }
      )
      .then(
        ((res) => res.data)
      )
      .catch((err) => err.response);

    if (result.statusCode === 200) setReport(result.data.report)
    else setError(result.data.message)
  }

  {report ? setPageTittle(report.title) : setPageTittle("گزارش یافت نشد");}

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Row className='m-0'>
        <Col lg={12} className="ps-lg-4 p-0">
          <section className="reports-section">
            {report && (
              <Row>
                <Col>
                  <BreadcrumbsCustom >
                    {id ?(
                      <>
                        <StyledBreadcrumb
                          label="گزارش تصویری"
                          component={Link}
                          to={"/reports"}
                        />
                        <StyledBreadcrumb
                          label={report.category.name}
                          component={Link}
                          to={`/reports/category/${report.category._id}`}
                        />
                        <StyledBreadcrumb
                          label={report.title}
                        />
                      </>
                    ) :
                      <StyledBreadcrumb
                        label="گزارش تصویری"
                      />
                    }
                  </BreadcrumbsCustom>
                  <Card className="mt-3">
                    <Card.Body>
                      <Row>
                        <h5>{report.title}</h5>
                        <Row className="mb-4">
                          <div style={{"color":"#767676", "fontSize":"14px"}} className="mb-2 detail-date">
                            <h6>{moment(report.createdAt).locale('fa').format(`jD ${persianMonths[moment().jMonth()]}، jYYYY`)}</h6>
                            <span style={{"fontWeight":"500"}}> - </span>
                            <h6 className="mt-3"><span>{report.category.name}</span></h6>
                          </div>
                        </Row>
                        <Row>
                          {report.imagesURL && report.imagesURL.map((image) => (
                            <Col md={4}>
                              <img className="my-4" src={image} alt={report.title} style={{"width":"100%", "height":"100%"}}/>
                            </Col>
                          ))}
                        </Row>
                        <Col sx={12} className='pe-md-4 card-info'>
                          <div className="d-flex justify-content-start mt-3 w-100 share">
                            <h6 style={{"color":"#FFF"}}>به اشتراک بگذارید</h6>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                  <DetailShared path={"reports"} />
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

export default ReportDetail;