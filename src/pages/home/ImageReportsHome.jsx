import React, { useRef } from "react";
import Slider from "react-slick";
import DefaultImage from "../../shared/assets/images/default-image.jpeg";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { Empty } from "antd";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageReportsHome = ({ data }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    rtl: true,
  };

  return (
    <>
      {data && data.reports.length > 0 ? (
        <div
          className={`image-reports-slider ${
            data && data.reports.length <= 3 && "less-reports"
          }`}
        >
          {data && data.reports.length > 3 && (
            <Slider ref={sliderRef} {...settings}>
              {data.reports.map((report) => (
                <Link to={`/reports/${report._id}`}>
                  <div className="image-report">
                    <img
                      src={
                        report.imagesURL
                          ? report.imagesURL[0]
                          : report.imageURL
                          ? report.imageURL
                          : DefaultImage
                      }
                      style={{ width: "100%" }}
                      alt="image"
                    />
                    <p>{report.title}</p>
                  </div>
                </Link>
              ))}
            </Slider>
          )}
          {data &&
            data.reports.length <= 3 &&
            data.reports.map((report) => (
              <Col xs={4}>
                <Link to={`/reports/${report._id}`}>
                  <div className="image-report">
                    <img
                      src={
                        report.imagesURL
                          ? report.imagesURL[0]
                          : report.imageURL
                          ? report.imageURL
                          : DefaultImage
                      }
                      className="single-image"
                      alt="image"
                    />
                    <p>{report.title}</p>
                  </div>
                </Link>
              </Col>
            ))}
        </div>
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
    </>
  );
};

export default ImageReportsHome;
