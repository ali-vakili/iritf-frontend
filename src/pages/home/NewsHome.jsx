import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Row, Col } from 'react-bootstrap';
import Button from '@mui/material/Button';


const NewsHome = () => {
  return (
    <div className='my-3'>
      <Link to={"/under-maintenance"}>
        <Card>
          <Card.Body>
            <Row>
              <Col md={4}>
                <Card.Img
                  src="https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg"
                  style={{ width: '100%', height: "100%" }}
                />
              </Col>
              <Col md={8} className='pe-md-4'>
                <h5 className='pt-3 mb-3'>
                ملی‌پوش پیشین تنیس: برگزاری مسابقات فیوچرز تهران در حد مسترز بود.
                </h5>
                <div className='card-action d-flex justify-content-between align-items-center'>
                  <Button variant="contained" className='primary-color-btn'>ادامه خبر</Button>
                  <span style={{"color":"#767676"}}>1402/03/29</span>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Link>

      <div className='news-list px-md-3 mt-4'>
        <Row>
          <Col md={6}>
            <Link to={"/under-maintenance"}>
              <div className='news'>
                <img src="https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg" alt="news"/>
                <div className='news-info'>
                  <p>تنیسور روس: سطح رقابت‌های فیوچرز تهران بالا بود/ بازیکنان ایرانی در مسیر پیشرفت قرار دارند</p>
                </div>
              </div>
            </Link>
            <Link to={"/under-maintenance"}>
              <div className='news'>
                <img src="https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg" alt="news"/>
                <div className='news-info'>
                  <p>توکلی: تور جهانی و رویدادهای داخلی را آنالیز کردیم/ ۶ تنیسور برای دیویس کاپ به اردو فراخوانده شدند</p>
                </div>
              </div>
            </Link>
            <Link to={"/under-maintenance"}>
              <div className='news'>
                <img src="https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg" alt="news"/>
                <div className='news-info'>
                  <p>صعود برترین ها به مرحله یک چهارم نهایی رقابت های ۱۰۰۰ امتیازی بانوان</p>
                </div>
              </div>
            </Link>
            <Link to={"/under-maintenance"}>
              <div className='news'>
                <img src="https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg" alt="news"/>
                <div className='news-info'>
                  <p>صعود نماینده ایران به جمع ۴ تیم پایانی فیوچرز</p>
                </div>
              </div>
            </Link>
          </Col>

          <Col md={6}>
            <Link to={"/under-maintenance"}>
              <div className='news'>
                <img src="https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg" alt="news" />
                <div className='news-info'>
                  <p>
                    نماینده روسیه قهرمان هفته دوم تنیس فیوچرز تهران شد
                  </p>
                </div>
              </div>
            </Link>
            <Link to={"/under-maintenance"}>
              <div className='news'>
                <img src="https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg" alt="news" />
                <div className='news-info'>
                  <p>
                    تنیسورهای برتر به نیمه نهایی رقابت های ۱۰۰۰ امتیازی بانوان راه یافتند
                  </p>
                </div>
              </div>
            </Link>
            <Link to={"/under-maintenance"}>
              <div className='news'>
                <img src="https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg" alt="news" />
                <div className='news-info'>
                  <p>
                    رقابت تنیسورها برای رسیدن به دیدار پایانی تور جهانی/ قهرمانان دوبل امروز معرفی می شوند
                  </p>
                </div>
              </div>
            </Link>
            <Link to={"/under-maintenance"}>
              <div className='news'>
                <img src="https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg" alt="news" />
                <div className='news-info'>
                  <p>
                  اطلاعیه برگزاری دوره مربیگری درجه ۳ آقایان – منطقه ۳
                  </p>
                </div>
              </div>
            </Link>
          </Col>
        </Row>

      </div>
    </div>
  )
}

export default NewsHome