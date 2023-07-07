import React, { useState, useEffect } from "react"
import PaginatedItems from "../../shared/components/paginate/Pagination";
import SideBar from "../../shared/components/sideBar/SideBar";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { setPageTittle } from "../../utils/SetTittle";



const Provinces = () => {
  const [news, setNews] = useState();


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

    if (result.statusCode === 200) setNews(filterNews(result.data.news));
  }

  const filterNews = (data) => {
    const filteredNews = data.filter((news) => {
      return news.category.name === "استان"
    })
    return filteredNews;
  }

  useEffect(() => {
    setPageTittle("استان ها")
    getData();
  }, []);

  return (
    <>
      <Row className='m-0'>
        <Col lg={8} className="ps-lg-4 p-0">
          {news && <PaginatedItems itemsPerPage={10} data={news} page="provinces"/>}
        </Col>
        <Col lg={4} className="left-side-content p-0">
          <SideBar/>
        </Col>
      </Row>
    </>
  )
}

export default Provinces;