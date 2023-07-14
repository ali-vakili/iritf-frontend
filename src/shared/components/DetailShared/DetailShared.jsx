import React, { useState, useEffect} from 'react'
import { Col, Row } from "react-bootstrap";
import SectionTitle from "../sectionTitle/SectionTitle";
import DefaultImage from "../../assets/images/default-image.jpeg"
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from "jalali-moment";

import "./DetailShared.scss"

const DetailShared = ({path}) => {
  const [data, setData] = useState();

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
  ];

  const getData = async () => {
    const result = await axios
      .get(
        `/admin/${path}/list`, {
          withCredentials: true,
        }
      )
      .then(
        ((res) => res.data)
      )
      .catch((err) => err.response);

    if (result.statusCode === 200) {
      const allData = selectRandomObjects(result.data[path])
      setData(allData)
    };
  }

  const selectRandomObjects = (data) => {
    const randomObjects = [];
    const dataCopy = [...data];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * dataCopy.length);
      const randomObject = dataCopy[randomIndex];
      randomObjects.push(randomObject);
    }
    return randomObjects;
  };

  useEffect(() => {
    getData();
  }, [])

  return(
    <div className='mt-4'>
      <SectionTitle title={"شاید این مطالب برایتان مفید باشد"}/>
      <Row className='mt-3 gx-0'>
        {data && data.map((eachData)=> (
          <Col md={4} className="image">
            <Link to={`/${path}/${eachData._id}`} key={eachData._id}>
              {path !== "videos" ? (
                <div key={eachData._id}>
                  <img
                    src={eachData.imagesURL ? eachData.imagesURL[0] : eachData.imageURL ? eachData.imageURL : DefaultImage}
                    style={{ width: '100%' }}
                    alt={eachData.title}
                  />
                  <p>{eachData.title}</p>
                  <p>{moment(eachData.createdAt).locale('fa').format(`jD ${persianMonths[moment().jMonth()]}، jYYYY`)}</p>
                </div>
              ) : (
                <div key={eachData._id}>
                  <h6>{eachData.title}</h6>
                  <p>{moment(eachData.createdAt).locale('fa').format(`jD ${persianMonths[moment().jMonth()]}، jYYYY`)}</p>
                </div>
              )
              }
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default DetailShared