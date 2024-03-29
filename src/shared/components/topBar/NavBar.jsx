import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import classNames from 'classnames';
import axios from 'axios';

import './NavBar.scss'

const NavBar = () => {
  const [categories, setCategories] = useState([]);
  const location = useLocation();

  const paths = {
    "خانه" : "home",
    "اخبار" : "news",
    "اخبار مسابقات" : "videos",
    "مسابقات" : "matches",
    "شهرستان ها" : "provinces",
    "رنکینگ" : "ranks",
    "تقویم ها" : "calendars",
    "فرم ها" : "forms",
    "باشگاه ها" : "clubs",
    "کمیته ها" : "committees",
    "گزارش تصویری" : "reports",
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

  const createChildList = (children, topPatentPath) => {
    return(
      <>
        <ul className='sub-menu from-sub-menu menu-sub-content'>
          {children.map((child) => (
              <li className={classNames('menu-item', {
                'menu-item-has-children': child.children.length > 0
              })} key={child._id}>
                <Link to={`/${topPatentPath}/category/${child._id}`}>
                  {child.name}
                {child.children.length > 0 && <span><KeyboardArrowLeftIcon /></span>}
                </Link>
                {child.children.length > 0 && createChildList(child.children, topPatentPath)}
              </li>
          ))}
        </ul>
      </>
    )
  }

  return (
  <nav id='main-navbar' className='main-nav'>
    <div className='main-menu'>
      <ul className='menu'>
        {categories.length > 0 && categories.map((category) => (
          <>
            {category.name === "خانه" &&  (
              <li className='menu-item menu-item-home' key={category._id}>
                <Link to="/" title='Home'><HomeIcon style={(location.pathname === "/") ? { color: "#00adef"} :{}}/></Link>
              </li>
            )} 
            {category.name !== "خانه" &&  (
              <li className={`menu-item ${category.children.length > 0 && "menu-item-has-children"}`} key={category._id} style={(location.pathname === `/${paths[category.name]}`) ? { backgroundColor : "#00adef"} :{}}>
                <Link className="parent-link" style={(location.pathname === `/${paths[category.name]}`) ? { color: "#FFF"} :{}} to={`/${paths[category.name]}`}>
                  {category.name}
                  {category.children.length > 0 && <span><ArrowDropDownIcon /></span>}
                </Link>
                {category.children.length > 0 && (
                  <ul className='sub-menu menu-sub-content'>
                    {category.children.map((child) => (
                      <li className={classNames('menu-item', {
                        'menu-item-has-children': child.children.length > 0
                      })} key={child._id}>
                        <Link to={`${paths[category.name]}/category/${child._id}`}>
                          {child.name}
                          {child.children.length > 0 && <span><KeyboardArrowLeftIcon /></span>}
                        </Link>
                        {child.children.length > 0 && createChildList(child.children, paths[category.name])}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )}
          </>
        ))}
      </ul>
    </div>
  </nav>
  );
}

export default NavBar;