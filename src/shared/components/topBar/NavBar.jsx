import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import classNames from 'classnames';
import axios from 'axios';

import './NavBar.scss'

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  const paths = {
    "خانه" : "home",
    "اخبار" : "news",
    "اخبار مسابقات" : "matches",
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

  const createChildList = (children, topPatentPath) => {
    return(
      <>
        {children.map((child) => (
          <ul className='sub-menu from-sub-menu menu-sub-content' key={child._id}>
            <li className={classNames('menu-item', {
              'menu-item-has-children': child.children.length > 0
            })}>
              <Link to={`/${topPatentPath}/category/?section=${topPatentPath}&categoryId=${child._id}`}>
                {child.name}
              {child.children.length > 0 && <span><KeyboardArrowLeftIcon /></span>}
              </Link>
              {child.children.length > 0 && createChildList(child.children)}
            </li>
          </ul>
        ))}
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
                <Link to="/" title='Home'><HomeIcon style={{"color" : "#008F70"}}/></Link>
              </li>
            )} 
            {category.name !== "خانه" &&  (
              <li className={`menu-item ${category.children.length > 0 && "menu-item-has-children"}`} key={category._id}>
                <Link className="parent-link" to={`/${paths[category.name]}`}>
                  {category.name}
                  {category.children.length > 0 && <span><ArrowDropDownIcon /></span>}
                </Link>
                {category.children.length > 0 && (
                  <ul className='sub-menu menu-sub-content'>
                    {category.children.map((child) => (
                      <li className={classNames('menu-item', {
                        'menu-item-has-children': child.children.length > 0
                      })} key={child._id}>
                        <Link to={`${paths[category.name]}/category/?section=${paths[category.name]}&categoryId=${child._id}`}>
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