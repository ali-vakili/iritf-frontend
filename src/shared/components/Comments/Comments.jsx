import React, { useState } from 'react'
import { Col, Row, Form } from "react-bootstrap";
import SectionTitle from "../sectionTitle/SectionTitle";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import "./Comments.scss"

const Comments = () => {
  const [textAreaValue, setTextAreaValue] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [webSite, setWebSite] = useState();

  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  
  const { vertical, horizontal, open } = state;

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const button = (
    <React.Fragment>
      <Grid container justifyContent="center">
        <Grid item xs={6} textAlign="right">
            <div div className='card-action d-flex justify-content-between align-items-center mt-5'>
              <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })} variant="contained" className='primary-color-btn'>فرستادن دیدگاه</Button>
            </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );

  return(
    <Row className='mt-5 border rounded p-3 gx-0'>
      <SectionTitle title={"دیدگاهتان را بنویسید "} />
      <Col sx={12}>
        <div className='d-flex flex-column justify-content-start mt-3'>
          <div className='area d-flex flex-column' style={{"direction":"rtl"}}>
            <Col xs={12}>
              <span>
                <p class="comment-notes">
                  <span id="email-notes">نشانی ایمیل شما منتشر نخواهد شد.</span>
                  <span class="required-field-message">بخش‌های موردنیاز علامت‌گذاری شده‌اند <span class="required">*</span>
                  </span>
                </p>
              </span>
              <Form.Group>
                <Form.Label htmlFor="textArea">دیدگاه* </Form.Label>
                <Form.Control
                  as="textarea"
                  id="textArea"
                  className="mt-1"
                  multiple
                  onChange={(e) => setTextAreaValue(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Row>
              <Col md={4} className='mt-3' >
                <Form.Group>
                  <Form.Label htmlFor="name">نام*</Form.Label>
                  <Form.Control className='border' id="name" value={name} type="text" onChange={(e) => setName(e.target.value)}/>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4} className='mt-3' >
                <Form.Group>
                  <Form.Label htmlFor="email">ایمیل*</Form.Label>
                  <Form.Control id="email" className='border' value={email} type="email" onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4} className='mt-3' >
                <Form.Group>
                  <Form.Label htmlFor="website">وبسایت*</Form.Label>
                  <Form.Control id="website" className='border' value={webSite} type="text" onChange={(e) => setWebSite(e.target.value)}/>
                </Form.Group>
              </Col>
            </Row>
            {button}
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              autoHideDuration={6000}
              open={open}
              onClose={handleClose}
              key={vertical + horizontal}
            >
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                نظر شما ثبت شد
              </Alert>
            </Snackbar>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default Comments;