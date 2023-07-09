import React, { useState, useEffect } from "react"
import SideBar from "../../shared/components/sideBar/SideBar";
import axios from "axios";
import { Link } from 'react-router-dom'
import BreadcrumbsCustom, {StyledBreadcrumb} from "../../shared/components/breadcrumbs/Breadcrumbs ";
import { Card, Col, Row, Modal, Form } from "react-bootstrap";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { setPageTittle } from "../../utils/SetTittle";
import { useParams } from 'react-router-dom';
import DetailShared from "../../shared/components/DetailShared/DetailShared";
import Comments from "../../shared/components/Comments/Comments";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DefaultImage from "../../shared/assets/images/default-image.jpeg"
import Button from '@mui/material/Button';
import moment from "moment-jalali";

import "./MatchesList.scss"

const MatchDetail = () => {
  const [match, setMatch] = useState();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [requestError, setRequestError] = useState();
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [image, setImage] = useState(null);
  const [position] = useState('bottom-start');
  const [showToast, setShowToast] = useState(false);

  const { id } = useParams();

  const handleRegister = async () => {
    setSuccess("");
    setRequestError("");
    const Data = new FormData();
    Data.append("first_name", firstName);
    Data.append("last_name", lastName);
    Data.append("mobile", mobileNumber);
    Data.append("nationalCode", nationalId);
    Data.append("image", image);

    const createResult = await axios
      .post(`/admin/matches/register/${id}`, Data, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => res.data)
      .catch((err) => err.response.data);

    if (createResult.statusCode === 200) {
      setSuccess(createResult.data.message);
      setRequestError(false);
      toggle();
      handleCloseModal();
      hideAndShowToast();
    } else {
      setSuccess(false);
      setRequestError(createResult.message);
      toggle();
      handleCloseModal();
      hideAndShowToast();
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const hideAndShowToast = () => setShowToast(!showToast);

  const toggle = () => {

    if (!showToast) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 6000);
    }
  }

  const persianMonths = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
  ]

  const currentDate = moment().locale("fa").format('jYYYY/jMM/jDD');

  const getData = async () => {
    setError("")
    const result = await axios
      .get(
        `/admin/matches/list/${id}`, {
          withCredentials: true,
        }
      )
      .then(
        ((res) => res.data)
      )
      .catch((err) => err.response);

    if (result.statusCode === 200) setMatch(result.data.match)
    else setError(result.data.message)
  }

  {match ? setPageTittle(match.title) : setPageTittle("مسابقه یافت نشد");}

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Row className='m-0'>
        <Col lg={8} className="ps-lg-4 p-0">
          <section className="matches-section">
            {match && (
              <>
                {!moment(match.createdAt, 'jYYYY/jMM/jDD').isBefore(currentDate, 'day') && (
                  <>
                    <Row key={match._id}>
                      <Col>
                        <BreadcrumbsCustom >
                          {id ?(
                            <>
                              <StyledBreadcrumb
                                label="مسابقات"
                                component={Link}
                                to={"/matches"}
                              />
                              <StyledBreadcrumb
                                label={match.category.name}
                                component={Link}
                                to={`/matches/category/${match.category._id}`}
                              />
                              <StyledBreadcrumb
                                label={match.title}
                              />
                            </>
                          ) :
                            <StyledBreadcrumb
                              label="مسابقات"
                            />
                          }
                        </BreadcrumbsCustom>
                        <Card className="mt-3">
                          <Card.Body>
                            <Row>
                              <h5>{match.title}</h5>
                              <Row>
                                <div style={{"color":"#767676", "fontSize":"14px"}} className="mb-2 detail-date">
                                  <h6>{moment(match.createdAt).locale('fa').format(`jD ${persianMonths[moment().jMonth()]}، jYYYY`)}</h6>
                                  <span style={{"fontWeight":"500"}}> - </span>
                                  <h6 className="mt-3"><span>{match.category.name}</span></h6>
                                </div>
                                <div className="mt-2 mb-4">
                                  <span>تاریخ انقضا :</span>
                                  <h6 style={{"display":"inline"}}><span>{moment(match.expireDate).locale("fa").format("jYYYY/jMM/jDD")}</span></h6>
                                </div>
                              </Row>
                              <Card.Img
                                src={match.imageURL ? match.imageURL : DefaultImage}
                                alt={match.title}
                                style={
                                  (match.imageURL === undefined)
                                    ? { width: "100%", height: "100%", objectFit: "cover" }
                                    : { width: '100%', height: "100%" }
                                }
                              />
                              <Row>
                                <div className="mt-3">
                                  <span>درباره مسابقه:</span>
                                  <p className="mt-2">{match.description}</p>
                                </div>
                              </Row>
                              <Row className="flex-column align-items-center justify-content-center my-4">
                                <h6 style={{"width":"fit-content"}}>برای دانلود و مشاهده کامل مسابقه روی لینک زیر کلیک فرمایید</h6>
                                {match.filesURL && match.filesURL.length > 0 && match.filesURL.map((file) => (
                                  <Link to={file} style={{"width":"fit-content", "color":"#33A58D"}} className="mt-2">
                                    دانلود مسابقه
                                    <FileDownloadIcon fontSize="large" style={{"height":"64px", "width":"64px"}}/>
                                  </Link>
                                ))}
                              </Row>
                              <Col sx={12} className='pe-md-4 card-info'>
                                <div className="d-flex justify-content-start align-items-center mt-3 w-100 share">
                                  <h6 className="m-0" style={{"color":"#FFF"}}>به اشتراک بگذارید</h6>
                                  <div className='card-action d-flex justify-content-between align-items-center mx-3'>
                                    <Button onClick={handleOpenModal} variant="contained" style={{"padding":"12px"}}>ثبت نام در مسابقه</Button>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                        <DetailShared path={"matches"} />
                        <Comments />
                      </Col>
                    </Row>
                      <ToastContainer
                        className="p-3"
                        position={position}
                        style={{ 
                          "position": 'fixed',
                          "bottom": '0',
                          "zIndex": '9999',
                        }}
                      >
                        {success && (
                          <Toast show={showToast} onClose={hideAndShowToast} bg="success" animation={true}>
                            <Toast.Header closeButton={true}>
                              <strong className="me-auto">iritf</strong>
                            </Toast.Header>
                            <Toast.Body>{success}</Toast.Body>
                          </Toast>
                        )}
                        {requestError && (
                          <Toast show={showToast} onClose={hideAndShowToast} bg="danger" animation={true}>
                            <Toast.Header closeButton={true}>
                              <strong className="me-auto">iritf</strong>
                            </Toast.Header>
                            <Toast.Body>{requestError}</Toast.Body>
                          </Toast>
                        )}
                      </ToastContainer>
    
                    <Modal show={showModal} onHide={handleCloseModal} centered>
                      <Modal.Header closeButton className="flex-row-reverse">
                        <Modal.Title>ثبت نام در مسابقه</Modal.Title>
                      </Modal.Header>
                      <Modal.Body style={{"direction":"rtl"}}>
                        <Form>
                          <Form.Group controlId="firstName" className="my-3">
                            <Form.Label>نام*</Form.Label>
                            <Form.Control
                              type="text"
                              value={firstName}
                              className="border"
                              onChange={(e) => setFirstName(e.target.value)}
                            />
                          </Form.Group>

                          <Form.Group controlId="lastName" className="my-3">
                            <Form.Label>نام خانوادگی*</Form.Label>
                            <Form.Control
                              type="text"
                              value={lastName}
                              className="border"
                              onChange={(e) => setLastName(e.target.value)}
                            />
                          </Form.Group>

                          <Form.Group controlId="mobileNumber" className="my-3">
                            <Form.Label>شماره موبایل*</Form.Label>
                            <Form.Control
                              type="text"
                              value={mobileNumber}
                              className="border"
                              onChange={(e) => setMobileNumber(e.target.value)}
                            />
                          </Form.Group>

                          <Form.Group controlId="nationalId" className="my-3">
                            <Form.Label>کدملی*</Form.Label>
                            <Form.Control
                              type="text"
                              value={nationalId}
                              className="border"
                              onChange={(e) => setNationalId(e.target.value)}
                            />
                          </Form.Group>

                          <Form.Group controlId="image" className="my-3">
                            <Form.Label>عکس فیش واریزی</Form.Label>
                            <Form.Control
                              type="file"
                              className="border"
                              onChange={(e) => setImage(e.target.files[0])}
                            />
                          </Form.Group>

                          <Button variant="contained" onClick={handleRegister} className="mt-3">
                            ثبت نام
                          </Button>
                        </Form>
                      </Modal.Body>
                    </Modal>
                  </>
                )}
              </>
            )}
            {error && (
              <div className="d-flex justify-content-center">
                <h3>{error}</h3>
              </div>
            )}
          </section>
        </Col>
        <Col lg={4} className="left-side-content p-0">
          <SideBar/>
        </Col>
      </Row>
    </>
  )
}

export default MatchDetail;