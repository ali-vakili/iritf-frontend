import React, { useState, useEffect } from "react"
import PaginatedItems from "../../shared/components/paginate/Pagination";
import SideBar from "../../shared/components/sideBar/SideBar";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { setPageTittle } from "../../utils/SetTittle";
import { useParams, useNavigate } from 'react-router-dom';



const Videos = () => {
  const [videos, setVideos] = useState();
  const [news, setNews] = useState();

  const navigate = useNavigate();
  const { id } = useParams();

  const getNews = async () => {
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

    if (result.statusCode === 200) setNews(filterNews(id, result.data.news));
  }

  const getData = async () => {
    const result = await axios
      .get(
        '/admin/videos/list', {
          withCredentials: true,
        }
      )
      .then(
        ((res) => res.data)
      )
      .catch((err) => err.response);

    if (result.statusCode === 200) id ? navigate(`/news/category/${id}`) : setVideos(result.data.videos);
  }

  useEffect(() => {
    setPageTittle("ویدیو ها")
    getData();
  }, []);

  const filterNews = (id ,data) => {
    const filteredNews = data.filter((news) => {
      return news.category._id === id
    })
    return filteredNews;
  }

  return (
    <>
      <Row className='m-0'>
        {console.log(videos)}
        <Col lg={8} className="ps-lg-4 p-0">
          {videos && <PaginatedItems itemsPerPage={10} data={videos} page="videos"/>}
          {news && <PaginatedItems itemsPerPage={10} data={news} page="news"/>}
        </Col>
        <Col lg={4} className="left-side-content p-0">
          <SideBar/>
        </Col>
      </Row>
    </>
  )
}

export default Videos;