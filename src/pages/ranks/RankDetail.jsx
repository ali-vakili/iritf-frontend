import React, { useState, useEffect } from "react";
import SideBar from "../../shared/components/sideBar/SideBar";
import axios from "axios";
import { Link } from "react-router-dom";
import BreadcrumbsCustom, {
  StyledBreadcrumb,
} from "../../shared/components/breadcrumbs/Breadcrumbs ";
import { Card, Col, Modal, Row } from "react-bootstrap";
import { setPageTittle } from "../../utils/SetTittle";
import { useParams } from "react-router-dom";
import DetailShared from "../../shared/components/DetailShared/DetailShared";
import Comments from "../../shared/components/Comments/Comments";
import moment from "moment-jalali";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import CloseIcon from "@mui/icons-material/Close";

import "./RanksList.scss";
import { Button } from "@mui/material";

const RankDetail = () => {
  const [rank, setRank] = useState();
  const [error, setError] = useState();
  const [showRankImage, setShowRankImage] = useState(false);

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
      .get(`/admin/ranks/list/${id}`, {
        withCredentials: true,
      })
      .then((res) => res.data)
      .catch((err) => err.response);

    if (result.statusCode === 200) setRank(result.data.rank);
    else setError(result.data.message);
  };

  {
    rank ? setPageTittle(rank.title) : setPageTittle("رنک یافت نشد");
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Row className="m-0">
        <Col lg={8} className="ps-lg-4 p-0">
          <section className="ranks-section">
            {rank && (
              <Row>
                <Modal show={showRankImage} size="lg">
                  <Modal.Header>
                    <Button
                      size="small"
                      variant="outlined"
                      color="error"
                      onClick={() => setShowRankImage((prev) => !prev)}
                    >
                      <CloseIcon />
                    </Button>
                  </Modal.Header>
                  <Modal.Body>
                    {rank.imageURL && (
                      <img
                        src={rank?.imageURL}
                        className="w-100 h-100"
                        alt={rank?.title}
                      />
                    )}
                  </Modal.Body>
                </Modal>
                <Col>
                  <BreadcrumbsCustom>
                    {id ? (
                      <>
                        <StyledBreadcrumb
                          label="رنکینگ"
                          component={Link}
                          to={"/ranks"}
                        />
                        <StyledBreadcrumb
                          label={rank.category[rank.category.length - 1].name}
                          component={Link}
                          to={`/ranks/category/${
                            rank.category[rank.category.length - 1]._id
                          }`}
                        />
                        <StyledBreadcrumb label={rank.title} />
                      </>
                    ) : (
                      <StyledBreadcrumb label="رنکینگ" />
                    )}
                  </BreadcrumbsCustom>
                  <Card className="mt-3">
                    <Card.Body>
                      <Row>
                        <h5>{rank.title}</h5>
                        <Row>
                          <div
                            style={{ color: "#767676", fontSize: "14px" }}
                            className="mb-2 detail-date"
                          >
                            <h6>
                              {moment(rank.createdAt)
                                .locale("fa")
                                .format(
                                  `jD ${
                                    persianMonths[moment().jMonth()]
                                  }، jYYYY`
                                )}
                            </h6>
                            <span style={{ fontWeight: "500" }}> - </span>
                            <h6 className="mt-3">
                              <span>{rank.category.name}</span>
                            </h6>
                          </div>
                        </Row>
                        <Row onClick={() => setShowRankImage((prev) => !prev)}>
                          {rank.imageURL && (
                            <Card.Img
                              style={{ cursor: "pointer" }}
                              src={rank.imageURL}
                              alt={rank.title}
                            />
                          )}
                        </Row>
                        <Row>
                          <Col xs={12}>
                            <h6>توضیحات : </h6>
                            <p className="fs-7">{rank?.text || ""}</p>
                          </Col>
                        </Row>
                        <Row className="flex-column align-items-center justify-content-center my-4">
                          <h6 style={{ width: "fit-content" }}>
                            برای دانلود و مشاهده کامل رنکینگ روی لینک زیر کلیک
                            فرمایید
                          </h6>
                          {rank.filesURL &&
                            rank.filesURL.length > 0 &&
                            rank.filesURL.map((file) => (
                              <Link
                                to={file}
                                style={{
                                  width: "fit-content",
                                  color: "#33A58D",
                                }}
                                className="mt-2"
                              >
                                دانلود رنکینگ
                                <FileDownloadIcon
                                  fontSize="large"
                                  style={{ height: "64px", width: "64px" }}
                                />
                              </Link>
                            ))}
                        </Row>
                        <Col sx={12} className="pe-md-4 card-info">
                          <div className="d-flex justify-content-start mt-3 w-100 share">
                            <h6 style={{ color: "#FFF" }}>به اشتراک بگذارید</h6>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                  <DetailShared path={"ranks"} />
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

export default RankDetail;
