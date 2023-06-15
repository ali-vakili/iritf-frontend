import React, { useState } from 'react'
import SocialMedia from '../socialMedia/SocialMedia'
import Aparat from '../../../shared/assets/svgs/aparat-icon.svg'
import Button from '@mui/material/Button';

import "./Footer.scss"

const Footer = () => {
  const [email, setEmail] = useState('');

  return (
    <footer id='footer-iritf' className='footer'>
      <div className='footer-content'>
        <div className='conections footer-item col-lg-3 col-md-4'>
          <h5>ما را دنبال کنید</h5>
          <hr />
          <div className='conections-social-links'>
            <SocialMedia iconSize={"large"}>
              <span className='social-link'><a href="https://www.aparat.com/ir.itf" title='Aparat' target='_blank'><img src={Aparat} alt="aparat"/></a></span>
            </SocialMedia>
          </div>
        </div>

        <div className='membership footer-item col-lg-3 col-md-4'>
          <h5>عضویت در خبرنامه</h5>
          <hr />
          <p className='membership-text'>جهت دریافت آخرین اخبار و رویدادهای تنیس بصورت روزانه کافی است آدرس ایمیل خود را در باکس زیر وارد کنید و در خبرنامه ما عضو شوید.</p>
          <div className="membership-form">
            <input
              type="email"
              name="email"
              placeholder="ایمیل"
              aria-label="Email"
              aria-describedby="email-input"
              className="email-field"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <Button className='membership-btn btn'>عضویت</Button>
          </div>

        </div>
        <div className='rights'>
          <div className='rights-content'>
          <p className='rights-text'>تمام حقوق مادی و معنوی این وبسایت متعلق به فدراسیون تنیس جمهوری اسلامی ایران میباشد .</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer