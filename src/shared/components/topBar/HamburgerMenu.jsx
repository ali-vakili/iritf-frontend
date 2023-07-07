import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom"
import axios from 'axios';
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
  const [categories, setCategories] = useState([]);

  const hamburgerMenu = useRef();

  const theme = useTheme();
  const isMdBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));

  const paths = {
    "خانه" : "home",
    "اخبار" : "news",
    "اخبار مسابقات" : "videos",
    "مسابقات" : "matches",
    "استان ها" : "provinces",
    "رنکینگ" : "ranks",
    "تقویم ها" : "calendars",
    "فرم ها" : "forms",
    "باشگاه ها" : "clubs",
    "تماس با ما" : "contact-us",
    "درباره ما" : "about-us",
    "سامانه ملی تنیس" : "https://www.itfipin.ir/Home/LogIn",
  }

  async function getCategories() {
    const getResult = await axios
      .get('/admin/category/parents', {
        withCredentials: true,
      })
      .then((res) => res.data)
      .catch((err) => err.response);

    if (getResult.statusCode === 200) {
      setCategories(getResult.data.parents);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);
  

  const createChildList = (children, topParentPath ,hasSubItems) => {
    return (
      <>
        {children.map((child) => (
          <>
            <ListItemButton sx={hasSubItems ? { pr: isMdBreakpoint ? 3 : 2 } : { pr: isMdBreakpoint ? 4 : 3 }}
              className={`${classNames(child.children !== undefined && child.children.length > 0 && { expanded: expands.length > 0 && expands.some((nav) => nav.id === child._id ) })} ${child.children !== undefined && child.children.length > 0 && "mobile-sub-menu-has-children"} mobile-sub-menu border-bottom`}
              >
              <Link to={`/${topParentPath}/category/${child._id}`} className='w-100' onClick={closeAndOpenHamburgerMenu}>
                <ListItemText primary={child.name} />
              </Link>
              {child.children !== undefined && child.children.length > 0 && (
                <div className='sub-expand-list-item d-flex align-items-center justify-content-center' onClick={() => handleExpand(child._id)} key={child._id}>
                  {expands.some((nav) => nav.id === child._id ) ? <ExpandLess /> : <ExpandMore />}
                </div>
              )}
            </ListItemButton>
            {child.children !== undefined && child.children.length > 0 && (
              <Collapse in={expands.some((nav) => nav.id === child._id)} unmountOnExit>
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
                {categories.map((category) => (
                  <>
                    {category.name === "خانه" &&  (
                      <Link to={"/"}>
                        <ListItemButton className='border-bottom'>
                          <ListItemIcon>
                            <HomeIcon />
                          </ListItemIcon>
                            <ListItemText primary="خانه" />
                        </ListItemButton>
                      </Link>
                    )}
                    {category.name !== "خانه" &&  (
                      <ListItemButton className={`${classNames(category.children.length > 0 && { expanded: expands.length > 0 && expands.some((nav) => nav.id === category._id ) })} border-bottom` } key={category.id}>
                        <Link to={`/${paths[category.name]}`} className='w-100' onClick={closeAndOpenHamburgerMenu}>
                          <ListItemText primary={category.name} />
                        </Link>
                        { category.children.length > 0 && (
                          <div className='expand-list-item d-flex align-items-center justify-content-center' onClick= {() => category.children.length > 0 && handleExpand(category._id)}>
                            {expands.some((nav) => nav.id === category._id ) ? 
                            <ExpandLess /> : <ExpandMore />}
                          </div>
                        )}
                      </ListItemButton>
                    )}
                    {category.children.length > 0 && (
                      <Collapse sx={{ marginBottom: 3 }} in={expands.some((nav) => nav.id === category._id)} timeout="auto" unmountOnExit>
                        {createChildList(category.children, paths[category.name] ,category.children.length > 0)}
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