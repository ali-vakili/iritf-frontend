import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Row, Col } from 'react-bootstrap'
import Button from '@mui/material/Button'

const TabPanel = props => {
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
}

const a11yProps = index => {
  return {
    id: `ranks-tab-${index}`,
    'aria-controls': `ranks-tabpanel-${index}`,
  };
}


const RanksHome = () => {
  const [value, setValue] = React.useState(3);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id='ranking' className='ranking-iritf'>
      <Box sx={{ maxWidth: { sm: "100%" } }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: "#FAFAFA", direction:"rtl" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="ranks tabs" 
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            >
            <Tab className='rank-tab' label="رده های سنی دختران" {...a11yProps(3)} />
            <Tab className='rank-tab' label="رده های سنی پسران" {...a11yProps(2)} />
            <Tab className='rank-tab' label="رنکینگ بانوان" {...a11yProps(1)} />
            <Tab className='rank-tab' label="رنکینگ آقایان" {...a11yProps(0) } />
          </Tabs>
        </Box>
        <TabPanel value={value} index={3}>
          <div className='ranks-list'>
            <Row>
              <Col md={6}>
                <Link to={"/under-maintenance"}>
                  <div className='top-rank'>
                    <img
                      src="https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg"
                      style={{ width: '100%' }}
                      alt='image'
                    />
                    <h5>رنکینگ انفرادی بزرگسالان آقایان</h5>
                    <Button variant="contained" className='primary-color-btn'>ادامه خبر</Button>
                  </div>
                </Link>
              </Col>
              <Col md={6}>
                <Link to={"/under-maintenance"}>
                  <div className="ranks">
                    <img src="https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg" alt="news"/>
                    <div className='ranks-info'>
                      <p>تنیسور روس: سطح رقابت‌های فیوچرز تهران بالا بود/ بازیکنان ایرانی در مسیر پیشرفت قرار دارند</p>
                    </div>
                  </div>
                </Link>
                <Link to={"/under-maintenance"}>
                  <div className="ranks">
                    <img src="https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg" alt="news"/>
                    <div className='ranks-info'>
                      <p>تنیسور روس: سطح رقابت‌های فیوچرز تهران بالا بود/ بازیکنان ایرانی در مسیر پیشرفت قرار دارند</p>
                    </div>
                  </div>
                </Link>
                <Link to={"/under-maintenance"}>
                  <div className="ranks">
                    <img src="https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg" alt="news"/>
                    <div className='ranks-info'>
                      <p>تنیسور روس: سطح رقابت‌های فیوچرز تهران بالا بود/ بازیکنان ایرانی در مسیر پیشرفت قرار دارند</p>
                    </div>
                  </div>
                </Link>
                <Link to={"/under-maintenance"}>
                  <div className="ranks">
                    <img src="https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg" alt="news"/>
                    <div className='ranks-info'>
                      <p>تنیسور روس: سطح رقابت‌های فیوچرز تهران بالا بود/ بازیکنان ایرانی در مسیر پیشرفت قرار دارند</p>
                    </div>
                  </div>
                </Link>
              </Col>
            </Row>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          قسمت 2
        </TabPanel>
        <TabPanel value={value} index={1}>
          قسمت 3
        </TabPanel>
        <TabPanel value={value} index={0}>
          قسمت 4
        </TabPanel>
      </Box>
    </div>
  );
}

export default RanksHome