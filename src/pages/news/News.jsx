import React, { useState, useEffect } from "react"
import PaginatedItems from "../../shared/components/paginate/Pagination";
import SideBar from "../../shared/components/sideBar/SideBar";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { setPageTittle } from "../../utils/SetTittle";
import { useParams } from 'react-router-dom';


const News = () => {
  const [news, setNews] = useState();

  const { id } = useParams();

  const getDataByCategory = async () => {
    const result = await axios
      .get(
        `/admin/news/list-by-category/${id}`, {
          withCredentials: true,
        }
      )
      .then(
        ((res) => res.data)
      )
      .catch((err) => err.response);

    if (result.statusCode === 200) setNews(result.data.news)
  }


  const getData = async () => {
    const result = await axios
      .get(
        '/admin/news/list', {
          withCredentials: true,
        }
      )
      .then(
        ((res) => res.data)
      )
      .catch((err) => err.response);

    if (result.statusCode === 200) setNews(result.data.news);
  }

  useEffect(() => {
    setPageTittle("اخبار");
    id ? getDataByCategory() : getData();
  }, []);

  return (
    <>
      <Row className='m-0'>
        <Col lg={8} className="ps-lg-4 p-0">
          {news && <PaginatedItems itemsPerPage={10} data={news} page="news"/>}
        </Col>
        <Col lg={4} className="left-side-content p-0">
          <SideBar/>
        </Col>
      </Row>
    </>
  )
}

export default News;