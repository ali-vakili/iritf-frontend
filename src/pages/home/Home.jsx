import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import CarouselMain from "./CarouselMain";
import SectionTitle from "../../shared/components/sectionTitle/SectionTitle";
import NewsHome from "./NewsHome";
import RanksHome from "./RanksHome";
import ImageReportsHome from "./ImageReportsHome";
import VideoHome from "./VideoHome";
import SideBar from "../../shared/components/sideBar/SideBar";
import { setPageTittle } from "../../utils/SetTittle";

import "./Home.scss";

const Home = () => {
  const [news, setNews] = useState();
  const [ranks, setRanks] = useState();
  const [reports, setReports] = useState();
  const [videos, setVideos] = useState();

  const getData = async () => {
    const config = {
      withCredentials: true,
    };

    axios
      .all([
        axios.get("/admin/news/list", config),
        axios.get("/admin/ranks/list", config),
        axios.get("/admin/videos/list", config),
        axios.get("/admin/reports/list", config),
      ])
      .then(
        axios.spread((news, ranks, videos, reports) => {
          setNews(news.data.data);
          setRanks(ranks.data.data);
          setVideos(videos.data.data);
          setReports(reports.data.data);
        })
      );
  };

  useEffect(() => {
    setPageTittle();
    getData();
  }, []);

  return (
    <Row className="m-0">
      <Col lg={8} className="pe-lg-3 p-0">
        <CarouselMain data={news} />
        <section id="newsSectionIritf" className="news-section-iritf mt-4 my-2">
          <Row>
            <Col>
              <SectionTitle title="اخبار هیئت تنیس" link={"/news"} />
              <NewsHome data={news} />
            </Col>
          </Row>
        </section>
        <section id="ranksSectionIritf" className="ranks-section-iritf my-2">
          <Row>
            <Col>
              <RanksHome data={ranks} />
            </Col>
          </Row>
        </section>
        <section
          id="reportsSectionIritf"
          className="reports-section-iritf mt-4 my-2"
        >
          <Row>
            <Col>
              <SectionTitle title="گزارش تصویری" link={"/reports"} />
              <ImageReportsHome data={reports} />
            </Col>
          </Row>
        </section>
        <section
          id="videosSectionIritf"
          className="videos-section-iritf mt-4 my-2"
        >
          <Row>
            <Col>
              <SectionTitle title="ویدیو ها" link={"/videos"} />
              <VideoHome data={videos} />
            </Col>
          </Row>
        </section>
      </Col>
      <Col lg={4} className="left-side-content p-0">
        <SideBar />
      </Col>
    </Row>
  );
};

export default Home;
