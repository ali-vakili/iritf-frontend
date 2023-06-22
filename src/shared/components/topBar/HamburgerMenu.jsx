import React, { useState, useRef, useEffect } from 'react';
import { InputGroup } from 'react-bootstrap';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HomeIcon from '@mui/icons-material/Home';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import classNames from 'classnames';

import SocialMedia from '../socialMedia/SocialMedia';

import './HamburgerMenu.scss';

const HamburgerMenu = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isOpened, setIsOpened] = useState(false);
  const [open, setOpen] = React.useState([]);
  const theme = useTheme();
  const isMdBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));
  
  const hamburgerMenu = useRef();

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClick = (index) => {
    setOpen((prevOpen) => {
      const newOpen = [...prevOpen];
      newOpen[index] = !newOpen[index];
      return newOpen;
    });
  };

  const closeAndOpenHamburgerMenu = () => {
    hamburgerMenu.current.classList.toggle("hamburger-menu-opened");
    document.body.classList.toggle("hamburger-menu-opened");
    setIsOpened(!isOpened);
  }

  const openAndCloseClasses = classNames({
    open: !isOpened,
    close: isOpened,
  });

  useEffect(()=>{

    return () => {
      setIsOpened(false);
      document.body.classList.remove("hamburger-menu-opened");
    }
  },[])

  return (
    <>
      <div ref={hamburgerMenu} className='hamburger-menu' onClick={closeAndOpenHamburgerMenu}>
        <div className={`hamburger-menu-icon ${openAndCloseClasses}`}></div>
        <div className={`hamburger-menu-icon ${openAndCloseClasses}`}></div>
        <div className={`hamburger-menu-icon ${openAndCloseClasses}`}></div>
      </div>
      <div className={`overlay ${openAndCloseClasses}`}>
        <aside id='slideOut' className={`slide-out ${openAndCloseClasses}`}>
          <div className='menu-content'>
            <div id='mobileMenu' className='mobile-menu'>
              <div className='search-mobile'>
                <InputGroup>
                  <InputGroup.Text className="bg-white border-0 search-icon">
                    <SearchRoundedIcon />
                  </InputGroup.Text>
                  <input
                    placeholder="جستجو"
                    aria-label="Search"
                    aria-describedby="search-input"
                    className="border-0 search-field"
                    value={searchValue}
                    onChange={handleSearchChange}
                  />
                </InputGroup>
              </div>
              <List
                sx={{ width: '100%', }}
                component="nav"
              >
                <ListItemButton className='border-bottom'>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="خانه" />
                </ListItemButton>
                <ListItemButton className={`${classNames({ expanded: open[0] })} border-bottom`} onClick={() => handleClick(0)}>
                  <ListItemText primary="اخبار" />
                  <div style={{ "width" : "32px"}}>
                    {open[0] ? <ExpandLess /> : <ExpandMore />}
                  </div>
                </ListItemButton>
                <Collapse sx={{ marginBottom: 3 }} in={open[0]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pr: isMdBreakpoint ? 3 : 2 }} className='mobile-sub-menu'>
                      <ListItemText primary="اخبار فدراسیون تنیس" />
                    </ListItemButton>
                    <ListItemButton sx={{ pr: isMdBreakpoint ? 3 : 2 }} className='mobile-sub-menu'>
                      <ListItemText primary="اخبار استان ها" />
                    </ListItemButton>
                    <ListItemButton sx={{ pr: isMdBreakpoint ? 3 : 2 }} className='mobile-sub-menu'>
                      <ListItemText primary="اخبار خارجی" />
                    </ListItemButton>
                    <ListItemButton sx={{ pr: isMdBreakpoint ? 3 : 2 }} className='mobile-sub-menu'>
                      <ListItemText primary="ویدئوها" />
                    </ListItemButton>
                    <ListItemButton sx={{ pr: isMdBreakpoint ? 3 : 2 }} className={`${classNames({ expanded: open[2] })} mobile-sub-menu mobile-sub-menu-has-children`} onClick={() => handleClick(2)} >
                      <ListItemText primary="کمیته ها" />
                      {open[2] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open[2]} timeout="auto" unmountOnExit>
                      <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className={`${classNames({ expanded: open[3] })} mobile-sub-menu mobile-sub-menu-has-children`} onClick={() => handleClick(3)}>
                        <ListItemText primary="کمیته مسابقات" />
                        {open[3] ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={open[3]} timeout="auto" unmountOnExit>
                        <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className='mobile-sub-menu'>
                          <ListItemText primary="برنامه مسابقات" />
                        </ListItemButton>
                        <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className='mobile-sub-menu'>
                          <ListItemText primary="لیست نفرات حاضر در مسابقات" />
                        </ListItemButton>
                      </Collapse>
                      <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className={`${classNames({ expanded: open[4] })} mobile-sub-menu mobile-sub-menu-has-children`} onClick={() => handleClick(4)}>
                        <ListItemText primary="کمیته آموزش" />
                        {open[4] ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={open[4]} timeout="auto" unmountOnExit>
                        <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className='mobile-sub-menu'>
                          <ListItemText primary="تقویم کمیته آموزش" />
                        </ListItemButton>
                      </Collapse>
                      <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className={`${classNames({ expanded: open[5] })} mobile-sub-menu mobile-sub-menu-has-children`} onClick={() => handleClick(5)}>
                        <ListItemText primary="کمیته داوران" />
                        {open[5] ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={open[5]} timeout="auto" unmountOnExit>
                        <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className='mobile-sub-menu'>
                          <ListItemText primary="تقویم عملیاتی کمیته داوران" />
                        </ListItemButton>
                      </Collapse>
                      <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className={`${classNames({ expanded: open[6] })} mobile-sub-menu mobile-sub-menu-has-children`} onClick={() => handleClick(6)}>
                        <ListItemText primary="کمیته انضباطی" />
                        {open[6] ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={open[6]} timeout="auto" unmountOnExit>
                        <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className='mobile-sub-menu'>
                          <ListItemText primary="اهم نکات آیین نامه انضباطی فدراسیون تنیس" />
                        </ListItemButton>
                      </Collapse>
                      <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className='mobile-sub-menu'>
                        <ListItemText primary="کمیته فرهنگی" />
                      </ListItemButton>
                      <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className='mobile-sub-menu'>
                        <ListItemText primary="کمیته پزشکی" />
                      </ListItemButton>
                      <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className='mobile-sub-menu'>
                        <ListItemText primary="کمیته همگانی" />
                      </ListItemButton>
                      <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className='mobile-sub-menu'>
                        <ListItemText primary="کمیته همگانی" />
                      </ListItemButton>
                      <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className='mobile-sub-menu'>
                        <ListItemText primary="کمیته استعدادیابی" />
                      </ListItemButton>
                    </Collapse>
                  </List>
                </Collapse>
                <ListItemButton className={`${classNames({ expanded: open[7] })} border-bottom`} onClick={() => handleClick(7)}>
                  <ListItemText primary="اخبار مسابقات" />
                  {open[7] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse sx={{ marginBottom: 3 }} in={open[7]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pr: isMdBreakpoint ? 3 : 2 }} className='mobile-sub-menu'>
                      <ListItemText primary="دیویس کاپ" />
                    </ListItemButton>
                    <ListItemButton sx={{ pr: isMdBreakpoint ? 3 : 2 }} className='mobile-sub-menu'>
                      <ListItemText primary="بیلی جین کینگ کاپ" />
                    </ListItemButton>
                    <ListItemButton sx={{ pr: isMdBreakpoint ? 3 : 2 }} className='mobile-sub-menu'>
                      <ListItemText primary="جام حذفی آقایان" />
                    </ListItemButton>
                    <ListItemButton sx={{ pr: isMdBreakpoint ? 3 : 2 }} className='mobile-sub-menu'>
                      <ListItemText primary="جام حذفی بانوان" />
                    </ListItemButton>
                    <ListItemButton sx={{ pr: isMdBreakpoint ? 3 : 2 }} className='mobile-sub-menu'>
                      <ListItemText primary="مسابقات هزار امتیازی" />
                    </ListItemButton>
                    <ListItemButton sx={{ pr: isMdBreakpoint ? 3 : 2 }} className='mobile-sub-menu'>
                      <ListItemText primary="لیگ تنیس ایران" />
                    </ListItemButton>
                    <ListItemButton sx={{ pr: isMdBreakpoint ? 3 : 2 }} className='mobile-sub-menu'>
                      <ListItemText primary="پدل" />
                    </ListItemButton>
                    <ListItemButton sx={{ pr: isMdBreakpoint ? 3 : 2 }} className='mobile-sub-menu'>
                      <ListItemText primary="ITF JUNIORS" />
                    </ListItemButton>
                    <ListItemButton sx={{ pr: isMdBreakpoint ? 3 : 2 }} className='mobile-sub-menu'>
                      <ListItemText primary="لیست نفرات حاضر در مسابقات" />
                    </ListItemButton>
                    <ListItemButton sx={{ pr: isMdBreakpoint ? 3 : 2 }} className='mobile-sub-menu'>
                      <ListItemText primary="برنامه مسابقات" />
                    </ListItemButton>
                  </List>
                </Collapse>
                <ListItemButton className='border-bottom'>
                  <ListItemText primary="استان" />
                </ListItemButton>
                <ListItemButton className={`${classNames({ expanded: open[8] })} border-bottom`} onClick={() => handleClick(8)}>
                  <ListItemText primary="رنکینگ" />
                  {open[8] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse sx={{ marginBottom: 3 }} in={open[8]} timeout="auto" unmountOnExit>
                  <ListItemButton sx={{ pr: isMdBreakpoint ? 3 : 2 }} className={`${classNames({ expanded: open[9] })} mobile-sub-menu mobile-sub-menu-has-children`} onClick={() => handleClick(9)}>
                    <ListItemText primary="رنکینگ آقایان" />
                    {open[9] ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={open[9]} timeout="auto" unmountOnExit>
                    <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className={`${classNames({ expanded: open[10] })} mobile-sub-menu mobile-sub-menu-has-children`} onClick={() => handleClick(10)}>
                      <ListItemText primary="بزرگسالان" />
                      {open[10] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open[10]} timeout="auto" unmountOnExit>
                      <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className='mobile-sub-menu'>
                        <ListItemText primary="انفرادی آقایان" />
                      </ListItemButton>
                      <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className='mobile-sub-menu'>
                        <ListItemText primary="دونفره آقایان" />
                      </ListItemButton>
                    </Collapse>
                    <ListItemButton sx={{ pr: isMdBreakpoint ? 3 : 2 }} className={`${classNames({ expanded: open[11] })} mobile-sub-menu mobile-sub-menu-has-children`} onClick={() => handleClick(11)}>
                      <ListItemText primary="رده های سنی پسران" />
                      {open[11] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open[11]} timeout="auto" unmountOnExit>
                      <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className='mobile-sub-menu'>
                        <ListItemText primary="۱۸ سال پسران" />
                      </ListItemButton>
                      <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className='mobile-sub-menu'>
                        <ListItemText primary="۱۶ سال پسران" />
                      </ListItemButton>
                      <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className='mobile-sub-menu'>
                        <ListItemText primary="۱۴ سال پسران" />
                      </ListItemButton>
                      <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className='mobile-sub-menu'>
                        <ListItemText primary="۱۲ سال پسران" />
                      </ListItemButton>
                      <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className='mobile-sub-menu'>
                        <ListItemText primary="۱۰ سال پسران" />
                      </ListItemButton>
                    </Collapse>
                  </Collapse>
                  <ListItemButton sx={{ pr: isMdBreakpoint ? 3 : 2 }} className={`${classNames({ expanded: open[12] })} mobile-sub-menu mobile-sub-menu-has-children`} onClick={() => handleClick(12)}>
                    <ListItemText primary="رنکینگ بانوان" />
                    {open[12] ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={open[12]} timeout="auto" unmountOnExit>
                    <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className={`${classNames({ expanded: open[13] })} mobile-sub-menu mobile-sub-menu-has-children`} onClick={() => handleClick(13)}>
                      <ListItemText primary="بزرگسالان" />
                      {open[13] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open[13]} timeout="auto" unmountOnExit>
                      <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className='mobile-sub-menu'>
                        <ListItemText primary="انفرادی بانوان" />
                      </ListItemButton>
                      <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className='mobile-sub-menu'>
                        <ListItemText primary="دو نفره بانوان" />
                      </ListItemButton>
                    </Collapse>
                    <ListItemButton sx={{ pr: isMdBreakpoint ? 3 : 2 }} className={`${classNames({ expanded: open[14] })} mobile-sub-menu mobile-sub-menu-has-children`} onClick={() => handleClick(14)}>
                      <ListItemText primary="رده های سنی دختران" />
                      {open[14] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open[14]} timeout="auto" unmountOnExit>
                      <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className='mobile-sub-menu'>
                        <ListItemText primary="۱۸ سال دختران" />
                      </ListItemButton>
                      <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className='mobile-sub-menu'>
                        <ListItemText primary="۱۶ سال دختران" />
                      </ListItemButton>
                      <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className='mobile-sub-menu'>
                        <ListItemText primary="۱۴ سال دختران" />
                      </ListItemButton>
                      <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className='mobile-sub-menu'>
                        <ListItemText primary="۱۲ سال دختران" />
                      </ListItemButton>
                      <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className='mobile-sub-menu'>
                        <ListItemText primary="۱۰ سال دختران" />
                      </ListItemButton>
                    </Collapse>
                  </Collapse>
                </Collapse>
                <ListItemButton className={`${classNames({ expanded: open[14] })} border-bottom`} onClick={() => handleClick(14)}>
                  <ListItemText primary="تقویم" />
                  {open[14] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse sx={{ marginBottom: 3 }} in={open[14]} timeout="auto" unmountOnExit>
                  <ListItemButton sx={{ pr: isMdBreakpoint ? 3 : 2 }} className='mobile-sub-menu'>
                    <ListItemText primary="کمیته مسابقات" />
                  </ListItemButton>
                  <ListItemButton sx={{ pr: isMdBreakpoint ? 3 : 2 }} className='mobile-sub-menu'>
                    <ListItemText primary="کمیته آموزش" />
                  </ListItemButton>
                  <ListItemButton sx={{ pr: isMdBreakpoint ? 3 : 2 }} className='mobile-sub-menu'>
                    <ListItemText primary="کمیته داوران" />
                  </ListItemButton>
                </Collapse>
                <ListItemButton className={`${classNames({ expanded: open[15] })} border-bottom`} onClick={() => handleClick(15)}>
                  <ListItemText primary="فرم ها" />
                  {open[14] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse sx={{ marginBottom: 3 }} in={open[15]} timeout="auto" unmountOnExit>
                  <ListItemButton sx={{ pr: isMdBreakpoint ? 3 : 2 }} className='mobile-sub-menu'>
                    <ListItemText primary="فرم اطلاعات فردی مربیان" />
                  </ListItemButton>
                  <ListItemButton sx={{ pr: isMdBreakpoint ? 3 : 2 }} className='mobile-sub-menu'>
                    <ListItemText primary="فرم اطلاعات فردی مربیان" />
                  </ListItemButton>
                  <ListItemButton sx={{ pr: isMdBreakpoint ? 3 : 2 }} className='mobile-sub-menu'>
                    <ListItemText primary="قرارداد مسابقات" />
                  </ListItemButton>
                  <ListItemButton sx={{ pr: isMdBreakpoint ? 3 : 2 }} className='mobile-sub-menu'>
                    <ListItemText primary="فکت شیت مسابقات" />
                  </ListItemButton>
                  <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className={`${classNames({ expanded: open[16] })} mobile-sub-menu mobile-sub-menu-has-children`} onClick={() => handleClick(16)}>
                    <ListItemText primary="کمیته انضباطی" />
                    {open[16] ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={open[16]} timeout="auto" unmountOnExit>
                    <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className='mobile-sub-menu'>
                      <ListItemText primary="درخواست بدوی کمیته انضباطی" />
                    </ListItemButton>
                    <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className='mobile-sub-menu'>
                      <ListItemText primary="فرم درخواست تجدیدنظر کمیته انضباطی" />
                    </ListItemButton>
                    <ListItemButton sx={{ pr: isMdBreakpoint ? 4 : 3 }} className='mobile-sub-menu'>
                      <ListItemText primary="اهم نکات آیین نامه انضباطی فدراسیون تنیس" />
                    </ListItemButton>
                  </Collapse>
                  <ListItemButton sx={{ pr: isMdBreakpoint ? 3 : 2 }} className='mobile-sub-menu'>
                    <ListItemText primary="منشور اخلاقی باشگاه داران ورزشی" />
                  </ListItemButton>
                </Collapse>
                <ListItemButton className='border-bottom'>
                  <ListItemText primary="تماس با ما" />
                </ListItemButton>
                <ListItemButton className='border-bottom'>
                  <ListItemText primary="درباره ما" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="سامانه ملی تنیس" />
                </ListItemButton>
              </List>
            </div>
            <div className='menu-social-links'>
              <SocialMedia iconSize={"large"} />
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default HamburgerMenu;