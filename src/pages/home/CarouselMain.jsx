import React from 'react'
import { Carousel } from 'react-bootstrap';
import falahat from "../../shared/assets/images/falahat.jpeg"
import tenis from "../../shared/assets/images/tenis.jpeg"

import "./CarouselMain.scss"

const CarouselMain = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={falahat}
            alt="First slide"
          />
          <Carousel.Caption className="caption-background">
            <h4 className='image-caption m-0'>درخشش نماینده تنیس ایران در تور جهانی/ مقیمی به یک‌ چهارم نهایی راه یافت</h4>
          </Carousel.Caption >
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={tenis}
            alt="Second slide"
          />
          <Carousel.Caption className="caption-background">
            <h4 className='image-caption m-0'>لورنزو بوچی ایتالیایی فاتح هفته نخست تور جهانی تنیس مردان شد</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarouselMain