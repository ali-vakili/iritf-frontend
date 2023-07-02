import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Row } from 'react-bootstrap'
import VezaratLogo from "../../assets/images/لوگوی-وزارت-ورزش-وجوانان.jpg"
import Olympic from "../../assets/images/National_Olympic_logo.png"
import ITF from "../../assets/images/ITF-logo.png"

import "./SideBar.scss"


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
    id: `side-bar-tab-${index}`,
    'aria-controls': `side-bar-tabpanel-${index}`,
  };
}

const SideBar = () => {
  const [value, setValue] = useState(3);

  const handleChange = (event, newValue) => {
  setValue(newValue);
  };

  return (
    <aside id='sideBar' className='ps-lg-3'>
      <Row id='sideBarTabs' className='side-bar-iritf mb-4 gx-0'>
        <Box sx={{ maxWidth: { sm: "100%" } }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: "#FAFAFA", direction:"rtl" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="side-bar tabs" 
              variant="scrollable"
              scrollButtons
              // allowScrollButtonsMobile
              >
              <Tab className='side-bar-tab' label="دیدگاه ها" {...a11yProps(3)} />
              <Tab className='side-bar-tab' label="برچسب" {...a11yProps(2)} />
              <Tab className='side-bar-tab' label="محبوبترین" {...a11yProps(1)} />
              <Tab className='side-bar-tab' label="جدیدترین" {...a11yProps(0) } />
            </Tabs>
          </Box>
          <TabPanel value={value} index={3}>
            <div className="side-bar-lists">

              <Link to={"/under-maintenance"}>
                <div className='side-bar-list'>
                  <img src="https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg" alt="news"/>
                  <div className='side-bar-info'>
                    <p className='side-bar-text'>حضور ماندگار فرزامی در بین ۸ تنیسور برتر مسابقات تور جهانی</p>
                    <span className='side-bar-list-time'>1402/03/29</span>
                  </div>
                </div>
              </Link>

              <Link to={"/under-maintenance"}>
                <div className='side-bar-list'>
                  <img src="https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg" alt="news"/>
                  <div className='side-bar-info'>
                    <p className='side-bar-text'>تور جهانی جوانان جی ۱۰۰ تهران ۲۰۲۳ باشگاه استقلال</p>
                    <span className='side-bar-list-time'>1402/04/8</span>
                  </div>
                </div>
              </Link>

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
      </Row>
      <Row>
        <div className='widgets'>

          <div className='widget'>
            <a href="http://news.msy.gov.ir" target='_blank' rel="noreferrer">
              <img src={VezaratLogo} alt="Vezarat-Logo" />
            </a>
          </div>

          <div className='widget olympic-widget'>
            <figure>
              <a href="http://www.olympic.ir" target='_blank' rel="noreferrer">
                <img src={Olympic} alt="Olympic-Logo" />
              </a>
            </figure>
          </div>

          <div className='widget'>
            <a href="https://www.itftennis.com" target='_blank' rel="noreferrer">
              <img src={ITF} alt="ITF-Logo" />
            </a>
          </div>
        </div>
      </Row>
    </aside>
  );
}
 
export default SideBar;
