import React from "react";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { Card, Col, Row } from "react-bootstrap";
import SectionTitle from "../../shared/components/sectionTitle/SectionTitle";
import DefaultImage from "../../shared/assets/images/default-image.jpeg";
import BreadcrumbsCustom, {
  StyledBreadcrumb,
} from "../../shared/components/breadcrumbs/Breadcrumbs ";
import moment from "moment-jalali";

import "./RanksList.scss";

const RanksList = ({ currentItems }) => {
  const { id } = useParams();

  return (
    <section className="ranks-section">
      <Row>
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
                  label={currentItems && currentItems[0].category[currentItems[0].category.length - 1].name}
                />
              </>
            ) : (
              <StyledBreadcrumb label="رنکینگ" />
            )}
          </BreadcrumbsCustom>
          {currentItems &&
            currentItems.map((rank) => (
              <Link to={`/ranks/${rank._id}`} key={rank._id}>
                <Card className="mt-3">
                  <Card.Body>
                    <Row>
                      <h5>{rank.title}</h5>
                      <Row>
                        <div
                          style={{ color: "#767676", fontSize: "14px" }}
                          className="mb-2 date"
                        >
                          <h6>
                            {moment(rank.createdAt)
                              .locale("fa")
                              .format("jYYYY/jMM/jDD")}
                          </h6>
                          <span className="mx-2">-</span>
                          <h6>
                            <span>{rank.category.name}</span>
                          </h6>
                        </div>
                      </Row>
                      <Col md={6}>
                        <Card.Img
                          src={
                            rank.imagesURL
                              ? rank.imagesURL[0]
                              : rank.imageURL
                              ? rank.imageURL
                              : DefaultImage
                          }
                          alt={rank.title}
                          style={
                            rank.imagesURL === undefined &&
                            rank.imageURL === undefined
                              ? {
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                }
                              : { width: "100%", height: "100%" }
                          }
                        />
                      </Col>
                      <Col md={6} className="pe-md-4 card-info">
                        <p className="pt-3 mb-3">
                          برای دانلود و مشاهده کامل رنکینگ روی لینک زیر کلیک
                          فرمایید.
                        </p>
                        <div className="card-action d-flex justify-content-between align-items-center">
                          <Button
                            variant="contained"
                            className="primary-color-btn"
                          >
                            ادامه خبر
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Link>
            ))}
        </Col>
      </Row>
    </section>
  );
};

export default RanksList;
