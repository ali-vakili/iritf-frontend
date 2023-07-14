import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Row, Col } from "react-bootstrap";
import Button from "@mui/material/Button";
import DefaultImage from "../../shared/assets/images/default-image.jpeg";
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
    id: `ranks-tab-${index}`,
    "aria-controls": `ranks-tabpanel-${index}`,
  };
};

const RanksHome = ({ data }) => {
  const [value, setValue] = useState(3);
  const mensRank =
    data &&
    data.ranks
      .filter((rank) => {
        return rank?.title?.match("پسران") || rank?.title?.match("آقایان");
      })
      .slice(0, 5);
  const wemenRank =
    data &&
    data.ranks.filter((rank) => {
      return rank?.title?.match("بانوان") || rank?.title?.match("دختران");
    });
  const boysRank =
    data &&
    data.ranks.filter((rank) => {
      return rank?.title?.match("پسران");
    });
  const girlsRank = [];
  data &&
    data.ranks.filter((rank) => {
      return rank?.title?.match("دختران");
    });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="ranking" className="ranking-iritf">
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
            aria-label="ranks tabs"
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
          >
            <Tab
              className="rank-tab"
              label="رده های سنی دختران"
              {...a11yProps(3)}
            />
            <Tab
              className="rank-tab"
              label="رده های سنی پسران"
              {...a11yProps(2)}
            />
            <Tab className="rank-tab" label="رنکینگ بانوان" {...a11yProps(1)} />
            <Tab className="rank-tab" label="رنکینگ آقایان" {...a11yProps(0)} />
          </Tabs>
        </Box>
        {data && data.ranks.length > 0 ? (
          <>
            <TabPanel value={value} index={3}>
              <div className="ranks-list">
                <Row>
                  <Col md={5}>
                    {mensRank &&
                      mensRank.map((rank, index) => (
                        <>
                          {index < 1 && (
                            <Link to={`/ranks/${rank._id}`}>
                              <div className="top-rank">
                                <img
                                  src={
                                    rank.imagesURL
                                      ? rank.imagesURL[0]
                                      : rank.imageURL
                                      ? rank.imageURL
                                      : DefaultImage
                                  }
                                  style={{ width: "100%" }}
                                  alt={rank.title}
                                />
                                <h5>{rank.title}</h5>
                                <Button
                                  variant="contained"
                                  className="primary-color-btn"
                                >
                                  ادامه خبر
                                </Button>
                              </div>
                            </Link>
                          )}
                        </>
                      ))}
                  </Col>
                  <Col md={7}>
                    {mensRank &&
                      mensRank.map((rank, index) => (
                        <>
                          {index < 5 && index >= 1 && (
                            <Link to={`/ranks/${rank._id}`}>
                              <div className="ranks">
                                <img
                                  src={
                                    rank.imagesURL
                                      ? rank.imagesURL[0]
                                      : rank.imageURL
                                      ? rank.imageURL
                                      : DefaultImage
                                  }
                                  alt={rank.title}
                                />
                                <div className="ranks-info">
                                  <p>{rank.title}</p>
                                </div>
                              </div>
                            </Link>
                          )}
                        </>
                      ))}
                  </Col>
                </Row>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div className="ranks-list">
                <Row>
                  <Col md={6}>
                    {wemenRank &&
                      wemenRank.map((rank, index) => (
                        <>
                          {index < 1 && (
                            <Link to={`/ranks/${rank._id}`}>
                              <div className="top-rank">
                                <img
                                  src={
                                    rank.imagesURL
                                      ? rank.imagesURL[0]
                                      : rank.imageURL
                                      ? rank.imageURL
                                      : DefaultImage
                                  }
                                  style={{ width: "100%" }}
                                  alt={rank.title}
                                />
                                <h5>{rank.title}</h5>
                                <Button
                                  variant="contained"
                                  className="primary-color-btn"
                                >
                                  ادامه خبر
                                </Button>
                              </div>
                            </Link>
                          )}
                        </>
                      ))}
                  </Col>
                  <Col md={6}>
                    {wemenRank &&
                      wemenRank.map((rank, index) => (
                        <>
                          {index < 5 && index >= 1 && (
                            <Link to={`/ranks/${rank._id}`}>
                              <div className="ranks">
                                <img
                                  src={
                                    rank.imagesURL
                                      ? rank.imagesURL[0]
                                      : rank.imageURL
                                      ? rank.imageURL
                                      : DefaultImage
                                  }
                                  alt={rank.title}
                                />
                                <div className="ranks-info">
                                  <p>{rank.title}</p>
                                </div>
                              </div>
                            </Link>
                          )}
                        </>
                      ))}
                  </Col>
                </Row>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className="ranks-list">
                <Row>
                  <Col md={6}>
                    {boysRank &&
                      boysRank.map((rank, index) => (
                        <>
                          {index < 1 && (
                            <Link to={`/ranks/${rank._id}`}>
                              <div className="top-rank">
                                <img
                                  src={
                                    rank.imagesURL
                                      ? rank.imagesURL[0]
                                      : rank.imageURL
                                      ? rank.imageURL
                                      : DefaultImage
                                  }
                                  style={{ width: "100%" }}
                                  alt={rank.title}
                                />
                                <h5>{rank.title}</h5>
                                <Button
                                  variant="contained"
                                  className="primary-color-btn"
                                >
                                  ادامه خبر
                                </Button>
                              </div>
                            </Link>
                          )}
                        </>
                      ))}
                  </Col>
                  <Col md={6}>
                    {boysRank &&
                      boysRank.map((rank, index) => (
                        <>
                          {index < 5 && index >= 1 && (
                            <Link to={`/ranks/${rank._id}`}>
                              <div className="ranks">
                                <img
                                  src={
                                    rank.imagesURL
                                      ? rank.imagesURL[0]
                                      : rank.imageURL
                                      ? rank.imageURL
                                      : DefaultImage
                                  }
                                  alt={rank.title}
                                />
                                <div className="ranks-info">
                                  <p>{rank.title}</p>
                                </div>
                              </div>
                            </Link>
                          )}
                        </>
                      ))}
                  </Col>
                </Row>
              </div>
            </TabPanel>
            <TabPanel value={value} index={0}>
              <div className="ranks-list">
                <Row>
                  <Col md={6}>
                    {girlsRank &&
                      girlsRank.map((rank, index) => (
                        <>
                          {index < 1 && (
                            <Link to={`/ranks/${rank._id}`}>
                              <div className="top-rank">
                                <img
                                  src={
                                    rank.imagesURL
                                      ? rank.imagesURL[0]
                                      : rank.imageURL
                                      ? rank.imageURL
                                      : DefaultImage
                                  }
                                  style={{ width: "100%" }}
                                  alt={rank.title}
                                />
                                <h5>{rank.title}</h5>
                                <Button
                                  variant="contained"
                                  className="primary-color-btn"
                                >
                                  ادامه خبر
                                </Button>
                              </div>
                            </Link>
                          )}
                        </>
                      ))}
                  </Col>
                  <Col md={6}>
                    {girlsRank &&
                      girlsRank.map((rank, index) => (
                        <>
                          {index < 5 && index >= 1 && (
                            <Link to={`/ranks/${rank._id}`}>
                              <div className="ranks">
                                <img
                                  src={
                                    rank.imagesURL
                                      ? rank.imagesURL[0]
                                      : rank.imageURL
                                      ? rank.imageURL
                                      : DefaultImage
                                  }
                                  alt={rank.title}
                                />
                                <div className="ranks-info">
                                  <p>{rank.title}</p>
                                </div>
                              </div>
                            </Link>
                          )}
                        </>
                      ))}
                  </Col>
                </Row>
              </div>
            </TabPanel>
          </>
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
      </Box>
    </div>
  );
};

export default RanksHome;
