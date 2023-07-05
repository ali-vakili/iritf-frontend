import React, { useState, useEffect } from "react"
import NewsList from "./NewsList";
import PaginatedItems from "../../shared/components/paginate/Pagination";
import SideBar from "../../shared/components/sideBar/SideBar";
import axios from "axios";
import { Col, Row } from "react-bootstrap";



const News = () => {
  const [news, setNews] = useState();

  document.title = 'اخبار – فدراسیون تنیس جمهوری اسلامی ایران';


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

    if (result.statusCode === 200) setNews(result.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Row className='m-0'>
        <Col lg={8} className="ps-lg-4 p-0">
          {news && <PaginatedItems itemsPerPage={10} data={news.news} page="news"/>}
        </Col>
        <Col lg={4} className="left-side-content p-0">
          <SideBar/>
        </Col>
      </Row>
    </>
  )
}

export default News;