import React, { useRef } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageReportsHome = () => {
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
        <div className="image-report">
          <img
            src="https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg"
            style={{ width: '100%' }}
            alt='image'
          />
          <p>تور جهانی تنیس تهران ۲۰۲۳ – عکس از شیوا خراسانی</p>
        </div>
        <div className="image-report">
          <img
            src="https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg"
            style={{ width: '100%' }}
            alt='image'
          />
          <p>اختتامیه هفته اول مسابقات تور جهانی تنیس – تهران ۲۰۲۳ عکس از سعید خلیلی</p>
        </div>
        <div className="image-report">
          <img
            src="https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg"
            style={{ width: '100%' }}
            alt='image'
          />
          <p>تور جهانی تنیس تهران ۲۰۲۳ – عکس از شیوا خراسانی</p>
        </div>
        <div className="image-report">
          <img
            src="https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg"
            style={{ width: '100%' }}
            alt='image'
          />
          <p>فینال هفته نخست تنیس فیوچرز تهران عکس از سارا عبدالهی</p>
        </div>
      </Slider>
    </div>
  );
}

export default ImageReportsHome;