import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import moment from "moment-jalali";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Row } from "react-bootstrap";
import VezaratLogo from "../../assets/images/لوگوی-وزارت-ورزش-وجوانان.jpg";
import Olympic from "../../assets/images/National_Olympic_logo.png";
import ITF from "../../assets/images/ITF-logo.png";
import DefaultImage from "../../../shared/assets/images/default-image.jpeg";
import axios from "axios";

import "./SideBar.scss";
import { Empty } from "antd";

const TabPanel = (props) => {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `side-bar-tab-${index}`,
    "aria-controls": `side-bar-tabpanel-${index}`,
  };
};

const SideBar = () => {
  const [value, setValue] = useState(3);
  const [randomNews, setRandomNews] = useState(null);
  const [randomRank, setRandomRank] = useState(null);
  const [news, setNews] = useState();
  const [ranks, setRanks] = useState();

  const getData = async () => {
    const config = {
      withCredentials: true,
    };

    axios
      .all([
        axios.get("/admin/news/list", config),
        axios.get("/admin/ranks/list", config),
      ])
      .then(
        axios.spread((news, ranks) => {
          setNews(news.data.data);
          setRanks(ranks.data.data);
        })
      );
  };

  useEffect(() => {
    getData();
  }, []);

  const location = useLocation();
  const isMainPage = location.pathname === "/" ? "ps-lg-3" : "pe-lg-3";

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setRandomNews(
      news ? news.news[Math.floor(Math.random() * news.news.length)] : null
    );
    setRandomRank(
      ranks ? ranks.ranks[Math.floor(Math.random() * ranks.ranks.length)] : null
    );
  }, [news, ranks]);

  return (
    <aside id="sideBar" className={isMainPage}>
      <Row id="sideBarTabs" className="side-bar-iritf mb-4 gx-0">
        <Box sx={{ maxWidth: { sm: "100%" } }}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              backgroundColor: "#FAFAFA",
              direction: "rtl",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="side-bar tabs"
              variant="scrollable"
              scrollButtons
            >
              <Tab
                className="side-bar-tab"
                label="دیدگاه ها"
                {...a11yProps(3)}
              />
              <Tab className="side-bar-tab" label="برچسب" {...a11yProps(2)} />
              <Tab
                className="side-bar-tab"
                label="محبوبترین"
                {...a11yProps(1)}
              />
              <Tab
                className="side-bar-tab"
                label="جدیدترین"
                {...a11yProps(0)}
              />
            </Tabs>
          </Box>
          {(news && news.length > 0) || (ranks && ranks.length > 0) ? (
            <>
              <TabPanel value={value} index={3}>
                <div className="side-bar-lists">
                  {news &&
                    news.news.map((news, index) => (
                      <>
                        {index < 3 && (
                          <Link to={`/news/${news._id}`} key={news._id}>
                            <div className="side-bar-list">
                              <img
                                src={
                                  news.imagesURL
                                    ? news.imagesURL[0]
                                    : news.imageURL
                                    ? news.imageURL
                                    : DefaultImage
                                }
                                alt={news.title}
                              />
                              <div className="side-bar-info">
                                <p className="side-bar-text">{news.title}</p>
                                <span className="side-bar-list-time">
                                  {moment(news.createdAt)
                                    .locale("fa")
                                    .format("jYYYY/jMM/jDD")}
                                </span>
                              </div>
                            </div>
                          </Link>
                        )}
                      </>
                    ))}
                </div>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <div className="side-bar-lists">
                  <>
                    {randomNews && (
                      <Link to={`/news/${randomNews._id}`} key={randomNews._id}>
                        <div className="side-bar-list">
                          <img
                            src={
                              randomNews.imagesURL
                                ? randomNews.imagesURL[0]
                                : randomNews.imageURL
                                ? randomNews.imageURL
                                : DefaultImage
                            }
                            alt={randomNews.title}
                          />
                          <div className="side-bar-info">
                            <p className="side-bar-text">{randomNews.title}</p>
                            <span className="side-bar-list-time">
                              {moment(randomNews.createdAt)
                                .locale("fa")
                                .format("jYYYY/jMM/jDD")}
                            </span>
                          </div>
                        </div>
                      </Link>
                    )}
                    {randomRank && (
                      <Link
                        to={`/ranks/${randomRank._id}`}
                        key={randomRank._id}
                      >
                        <div className="side-bar-list">
                          <img
                            src={
                              randomRank.imagesURL
                                ? randomRank.imagesURL[0]
                                : randomRank.imageURL
                                ? randomRank.imageURL
                                : DefaultImage
                            }
                            alt={randomRank.title}
                          />
                          <div className="side-bar-info">
                            <p className="side-bar-text">{randomRank.title}</p>
                            <span className="side-bar-list-time">
                              {moment(randomRank.createdAt)
                                .locale("fa")
                                .format("jYYYY/jMM/jDD")}
                            </span>
                          </div>
                        </div>
                      </Link>
                    )}
                  </>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}></TabPanel>
              <TabPanel value={value} index={0}></TabPanel>
            </>
          ) : (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          )}
        </Box>
      </Row>
      <Row>
        <div className="widgets">
          <div className="widget">
            <a href="http://news.msy.gov.ir" target="_blank" rel="noreferrer">
              <img src={VezaratLogo} alt="Vezarat-Logo" />
            </a>
          </div>

          <div className="widget olympic-widget">
            <figure>
              <a href="http://www.olympic.ir" target="_blank" rel="noreferrer">
                <img src={Olympic} alt="Olympic-Logo" />
              </a>
            </figure>
          </div>

          <div className="widget">
            <a
              href="https://www.itftennis.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={ITF} alt="ITF-Logo" />
            </a>
          </div>
        </div>
      </Row>
    </aside>
  );
};

export default SideBar;
