import React, { useState } from 'react'
import SocialMedia from '../socialMedia/SocialMedia'
import Aparat from '../../../shared/assets/svgs/aparat-icon.svg'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';

import "./Footer.scss"

const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState();
  const [success, setSuccess] = useState();


  const sendEmail = async () => {
    setSuccess("");
    setError("");
    const createResult = await axios
    .post('/admin/email-news/register', {
      email: email,
      withCredentials: true,
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);

    if (createResult.statusCode === 201) {
      setSuccess(true)
      setError(false)
      handleClick({ vertical: 'bottom', horizontal: 'right' })
    } else {
      setSuccess(false)
      setError(true)
      handleClick({ vertical: 'bottom', horizontal: 'right' })
    }
  }

  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  
  const { vertical, horizontal, open } = state;

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClick = (newState) => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const button = (
    <Button onClick={sendEmail} variant="contained" className='membership-btn'>عضویت</Button>
  );

  return (
    <footer id='footer-iritf' className='footer'>
      <div className='footer-content'>
        <div className='conections footer-item col-lg-3 col-md-4'>
          <h5>ما را دنبال کنید</h5>
          <hr />
          <div className='conections-social-links'>
            <SocialMedia iconSize={"large"}>
              <span className='social-link'><a href="https://www.aparat.com/ir.itf" title='Aparat' target='_blank' rel="noreferrer"><img src={Aparat} alt="aparat"/></a></span>
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
            {button}
            {success && (
              <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                autoHideDuration={6000}
                open={open}
                onClose={handleClose}
                key={vertical + horizontal}
              >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                  ایمیل شما در خبرنامه ثبت نام شد
                </Alert>
              </Snackbar>
            )}
            {error && (
              <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              autoHideDuration={6000}
              open={open}
              onClose={handleClose}
              key={vertical + horizontal}
            >
              <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                مشکلی پیش آمد ایمیل شما ثبت نشد
              </Alert>
            </Snackbar>
            )}
          </div>

        </div>
        <div className='rights'>
          <div className='rights-content'>
          <p className='rights-text'>تمام حقوق مادی و معنوی این وبسایت متعلق به هیئت تنیس جمهوری اسلامی ایران میباشد .</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer