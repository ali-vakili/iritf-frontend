import React, { useRef } from "react";
import Slider from "react-slick";
import DefaultImage from "../../shared/assets/images/default-image.jpeg"

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    arrows:false,
    rtl: true,
  };
  
  return (
    <div className="image-reports-slider">
      <Slider ref={sliderRef} {...settings}>
        {data && data.reports.map((report) => (
          <div className="image-report">
            <img
              src={report.imagesURL ? report.imagesURL[0] : report.imageURL ? report.imageURL : DefaultImage}
              style={{ width: '100%' }}
              alt='image'
            />
            <p>{report.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageReportsHome;