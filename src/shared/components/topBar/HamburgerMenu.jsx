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
  const [expands, setExpands] = useState([]);

  const hamburgerMenu = useRef();

  const theme = useTheme();
  const isMdBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));


  const sideNavsRoutes = [
    {
      id: "1",
      title: "اخبار",
      path: "/news",
      hasSubItems: true,
      children: [
        { id: "1.1", title: "اخبار فدراسیون تنیس", path: "#" },
        { id: "1.2", title: "اخبار استان ها", path: "#" },
        { id: "1.3", title: "اخبار خارجی", path: "#" },
        { id: "1.4", title: "ویدئوها", path: "#" },
        { id: "1.5", title: "کمیته ها", path: "#", 
          children: [
            { id: "1.5.1", title: "کمیته مسابقات", 
              children: [
                { id: "1.5.1.1", title: "برنامه مسابقات", path: "#" },
                { id: "1.5.1.2", title: "لیست نفرات حاضر در مسابقات", path: "#" },
              ],
              path: "#" },
            { id: "1.5.2", title: "کمیته آموزش", 
              children: [
                { id: "1.5.2.1", title: "تقویم کمیته آموزش", path: "#" },
              ],
              path: "#" },
            { id: "1.5.3", title: "کمیته داوران", 
              children: [
                { id: "1.5.3.1", title: "تقویم عملیاتی کمیته داوران", path: "#" },
              ],
              path: "#" },
            { id: "1.5.4", title: "کمیته انضباطی", 
              children: [
                { id: "1.5.4.1", title: "اهم نکات آیین نامه انضباطی فدراسیون تنیس", path: "#" },
              ],
              path: "#" },
            { id: "1.5.5", title: "کمیته فرهنگی", path: "#" },
            { id: "1.5.6", title: "کمیته پزشکی", path: "#" },
            { id: "1.5.7", title: "کمیته همگانی", path: "#" },
            { id: "1.5.8", title: "کمیته تنیس با ویلچر", path: "#" },
            { id: "1.5.9", title: "کمیته استعدادیابی", path: "#" },
          ]
        },
      ],

    },

    {
      id: "2",
      title: "اخبار مسابقات",
      path: "/matches",
      hasSubItems: true,
      children: [
        { id: "2.1", title: "دیویس کاپ", path: "#" },
        { id: "2.2", title: "بیلی جین کینگ کاپ", path: "#" },
        { id: "2.3", title: "جام حذفی آقایان", path: "#" },
        { id: "2.4", title: "جام حذفی بانوان", path: "#" },
        { id: "2.6", title: "مسابقات هزار امتیازی", path: "#" },
        { id: "2.7", title: "لیگ تنیس ایران", path: "#" },
        { id: "2.8", title: "پدل", path: "#" },
        { id: "2.9", title: "ITF JUNIORS", path: "#" },
        { id: "2.10", title: "لیست نفرات حاضر در مسابقات", path: "#" },
        { id: "2.11", title: "برنامه مسابقات", path: "#" },
      ],
    },

    { id: "3", title: "استان", path: "/#", children: [] },

    { id: "4", title: "رنکینگ", path: "/#", hasSubItems: true,
      children: [
        { id: "4.1", title: "رنکینگ آقایان", path: "#", 
          children: [
            { id: "4.1.1", title: "بزرگسالان", path: "#", 
              children: [
                { id: "4.1.1.1", title: "انفرادی آقایان", path: "#" },
                { id: "4.1.1.2", title: "دونفره آقایان", path: "#" },
              ] 
            },
            { id: "4.1.2", title: "رده های سنی پسران", path: "#", 
              children: [
                { id: "4.1.2.1", title: "۱۸ سال پسران", path: "#" },
                { id: "4.1.2.2", title: "۱۶ سال پسران", path: "#" },
                { id: "4.1.2.3", title: "۱۴ سال پسران", path: "#" },
                { id: "4.1.2.4", title: "۱۲ سال پسران", path: "#" },
                { id: "4.1.2.5", title: "۱۰ سال پسران", path: "#" },
              ] 
            },
          ] 
        },
        { id: "4.2", title: "رنکینگ بانوان", path: "#", 
          children: [
            { id: "4.2.1", title: "بزرگسالان", path: "#", 
              children: [
                { id: "4.2.1.1", title: "انفرادی بانوان", path: "#" },
                { id: "4.2.1.2", title: "دو نفره بانوان", path: "#" },
              ] 
            },
            { id: "4.2.2", title: "رده های سنی دختران", path: "#", 
              children: [
                { id: "4.2.2.1", title: "۱۸ سال دختران", path: "#" },
                { id: "4.2.2.2", title: "۱۶ سال دختران", path: "#" },
                { id: "4.2.2.3", title: "۱۴ سال دختران", path: "#" },
                { id: "4.2.2.4", title: "۱۲ سال دختران", path: "#" },
                { id: "4.2.2.6", title: "۱۰ سال دختران", path: "#" },
              ]
            },
          ] 
        },
      ] 
    },

    { id: "5", title: "تقویم", path: "/#", hasSubItems: true,
      children: [
        { id: "5.1", title: "کمیته مسابقات", path: "#" },
        { id: "5.2", title: "کمیته آموزش", path: "#" },
        { id: "5.3", title: "کمیته داوران", path: "#" },
      ] 
    },

    { id: "6", title: "فرم ها", path: "/#", hasSubItems: true,
      children: [
        { id: "6.1", title: "فرم اطلاعات فردی مربیان", path: "#" },
        { id: "6.2", title: "فرم اطلاعات فردی داوران", path: "#" },
        { id: "6.3", title: "قرارداد مسابقات", path: "#" },
        { id: "6.4", title: "فکت شیت مسابقات", path: "#" },
        { id: "6.5", title: "کمیته انضباطی", path: "#", 
          children: [
            { id: "6.5.1", title: "درخواست بدوی کمیته انضباطی", path: "#" },
            { id: "6.5.2", title: "درخواست بدوی کمیته انضباطی", path: "#" },
            { id: "6.5.3", title: "اهم نکات آیین نامه انضباطی فدراسیون تنیس", path: "#" },
          ] 
        },
        { id: "6.6", title: "منشور اخلاقی باشگاه داران ورزشی", path: "#" },
      ] 
    },

    { id: "7", title: "تماس با ما", path: "/#", children: [] },

    { id: "8", title: "درباره ما", path: "/#", children: [] },

    { id: "9", title: "سامانه ملی تنیس", path: "/#", children: [] },
    
  ];
  

  const createChildList = (children, hasSubItems) => {
    return (
      <>
        {children.map((child) => (
          <>
            <ListItemButton sx={hasSubItems ? { pr: isMdBreakpoint ? 3 : 2 } : { pr: isMdBreakpoint ? 4 : 3 }}
              className={`${classNames(child.children !== undefined && child.children.length > 0 && { expanded: expands.length > 0 && expands.some((nav) => nav.id === child.id ) })} ${child.children !== undefined && child.children.length > 0 && "mobile-sub-menu-has-children"} mobile-sub-menu border-bottom`}
              onClick={() => handleExpand(child.id)} key={child.id}>
              <ListItemText primary={child.title} />
              {child.children !== undefined && child.children.length > 0 && (expands.some((nav) => nav.id === child.id ) ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
            {child.children !== undefined && child.children.length > 0 && (
              <Collapse in={expands.some((nav) => nav.id === child.id)} unmountOnExit>
                {createChildList(child.children)}
              </Collapse>
            )}
          </>
        ))}
      </>
    )
  }

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleExpand = (index) => {
    setExpands((prevExpands) => {
      const prevExpandsList = [...prevExpands];
      const expandItem = prevExpandsList.find((expand) => expand.id === index);

      if (expandItem) {
        const expandItems = prevExpandsList.filter((item) => item.id !== index);
        return expandItems;
      } else {
        const newExpandItem = { id: index };
        prevExpandsList.push(newExpandItem);
        return prevExpandsList;
      }
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
                {sideNavsRoutes.map((item) => (
                  <>
                    <ListItemButton className={`${classNames(item.children.length > 0 && { expanded: expands.length > 0 && expands.some((nav) => nav.id === item.id ) })} border-bottom` } key={item.id} onClick= {() => item.children.length > 0 && handleExpand(item.id)}>
                      <ListItemText primary={item.title} />
                      { item.children.length > 0 && (expands.some((nav) => nav.id === item.id ) ? <ExpandLess /> : <ExpandMore />)}
                    </ListItemButton>
                    { item.children.length > 0 && (
                      <Collapse sx={{ marginBottom: 3 }} in={expands.some((nav) => nav.id === item.id)} timeout="auto" unmountOnExit>
                        {createChildList(item.children, item.hasSubItems)}
                      </Collapse>
                    )}
                  </>
                ))}
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