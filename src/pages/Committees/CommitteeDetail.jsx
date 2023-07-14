import React, { useState, useEffect } from "react";
import SideBar from "../../shared/components/sideBar/SideBar";
import axios from "axios";
import { Link } from "react-router-dom";
import BreadcrumbsCustom, {
  StyledBreadcrumb,
} from "../../shared/components/breadcrumbs/Breadcrumbs ";
import { Carousel, Card, Col, Row } from "react-bootstrap";
import { setPageTittle } from "../../utils/SetTittle";
import { useParams } from "react-router-dom";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import DetailShared from "../../shared/components/DetailShared/DetailShared";
import Comments from "../../shared/components/Comments/Comments";
import moment from "moment-jalali";

import "./CommitteesList.scss";

const CommitteeDetail = () => {
  const [committee, setCommittee] = useState();
  const [error, setError] = useState();

  const { id } = useParams();

  const persianMonths = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  const getData = async () => {
    setError("");
    const result = await axios
      .get(`/admin/committees/list/${id}`, {
        withCredentials: true,
      })
      .then((res) => res.data)
      .catch((err) => err.response);

    if (result.statusCode === 200) setCommittee(result.data.committee);
    else setError(result.data.message);
  };

  {
    committee
      ? setPageTittle(committee.title)
      : setPageTittle("کمیته یافت نشد");
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Row className="m-0">
        <Col lg={8} className="ps-lg-4 p-0">
          <section className="committees-section">
            {committee && (
              <Row>
                <Col>
                  <BreadcrumbsCustom>
                    {id ? (
                      <>
                        <StyledBreadcrumb
                          label="کمیته ها"
                          component={Link}
                          to={"/committees"}
                        />
                        <StyledBreadcrumb
                          label={committee.category.name}
                          component={Link}
                          to={`/committees/category/${committee.category._id}`}
                        />
                        <StyledBreadcrumb label={committee.title} />
                      </>
                    ) : (
                      <StyledBreadcrumb label="کمیته" />
                    )}
                  </BreadcrumbsCustom>
                  <Card className="mt-3">
                    <div className="carousel-container">
                      <Row>
                        <Col>
                          {committee.imagesURL && (
                            <Carousel>
                              {committee.imagesURL.map((image) => (
                                <Carousel.Item>
                                  <img
                                    className="d-block w-100 carousel-image"
                                    src={image}
                                    alt={committee.title}
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
                        <h5>{committee.title}</h5>
                        <Row>
                          <div
                            style={{ color: "#767676", fontSize: "14px" }}
                            className="mb-2 detail-date"
                          >
                            <h6>
                              {moment(committee.createdAt)
                                .locale("fa")
                                .format(
                                  `jD ${
                                    persianMonths[moment().jMonth()]
                                  }، jYYYY`
                                )}
                            </h6>
                            <span style={{ fontWeight: "500" }}> - </span>
                            <h6 className="mt-3">
                              <span>{committee.category.name}</span>
                            </h6>
                          </div>
                        </Row>
                        <Col sx={12} className="pe-md-4 card-info">
                          <p className="pt-3 mt-3">{committee.short_text}</p>
                          <p className="pt-3 mt-3">{committee.text}</p>
                          <Row className="flex-column align-items-center justify-content-center my-4">
                            <Col>
                              <h6 style={{ width: "fit-content" }}>
                                برای دانلود و مشاهده کامل فرم ها روی لینک زیر
                                کلیک فرمایید
                              </h6>
                              {committee.filesURL &&
                                committee.filesURL.map((file, index) => (
                                  <Link
                                    to={file}
                                    style={{
                                      fontSize: "16px",
                                      fontWeight: "500",
                                      width: "fit-content",
                                      color: "#33A58D",
                                    }}
                                  >
                                    فایل{index + 1}
                                    <FileDownloadIcon
                                      fontSize="large"
                                      style={{ height: "64px", width: "64px" }}
                                    />
                                  </Link>
                                ))}
                            </Col>
                          </Row>
                          <div className="d-flex justify-content-start mt-3 w-100 share">
                            <h6 style={{ color: "#FFF" }}>به اشتراک بگذارید</h6>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                  <DetailShared path={"committees"} />
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
          <SideBar />
        </Col>
      </Row>
    </>
  );
};

export default CommitteeDetail;
