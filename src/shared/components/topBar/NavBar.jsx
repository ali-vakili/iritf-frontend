import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import './NavBar.scss'

const NavBar = () => {
  return (
  <nav id='main-navbar' className='main-nav'>
    <div className='main-menu'>
      <ul className='menu'>
        <li className='menu-item menu-item-home'>
          <a href="#" title='Home'><HomeIcon style={{"color" : "#008F70"}}/></a>
        </li>

        <li className='menu-item menu-item-has-children'>
          <a className="parent-link" href="#">اخبار</a>

          <ul className='sub-menu menu-sub-content'>
            <li className='menu-item'><a href="#">اخبار فدراسیون تنیس</a></li>
            <li className='menu-item'><a href="#">اخبار استان ها</a></li>
            <li className='menu-item'><a href="#">اخبار خارجی</a></li>
            <li className='menu-item'><a href="#">ویدئوها</a></li>
            <li className='menu-item menu-item-has-children'>
              <a href="#">کمیته ها</a>
                <ul className='sub-menu from-sub-menu menu-sub-content'>
                  <li className='menu-item'><a href="#">کمیته آموزش</a></li>
                  <li className='menu-item'><a href="#">کمیته داوران</a></li>
                  <li className='menu-item'><a href="#">کمیته انضباطی</a></li>
                  <li className='menu-item'><a href="#">کمیته فرهنگی</a></li>
                  <li className='menu-item'><a href="#">کمیته پزشکی</a></li>
                  <li className='menu-item'><a href="#">کمیته همگانی</a></li>
                  <li className='menu-item'><a href="#">کمیته تنیس با ویلچر</a></li>
                  <li className='menu-item'><a href="#">کمیته استعدادیابی</a></li>
                </ul>
              <KeyboardArrowLeftIcon />
            </li>
          </ul>
          
          <ArrowDropDownIcon />
        </li>

        <li className='menu-item menu-item-has-children'>
          <a className="parent-link" href="#">اخبار مسابقات</a>
          <ul className='sub-menu menu-sub-content'>
            <li className='menu-item'><a href="#">دیویس کاپ</a></li>
            <li className='menu-item'><a href="#">بیلی جین کینگ کاپ</a></li>
            <li className='menu-item'><a href="#">جام حذفی آقایان</a></li>
            <li className='menu-item'><a href="#">جام حذفی بانوان</a></li>
            <li className='menu-item'><a href="#">مسابقات هزار امتیازی</a></li>
            <li className='menu-item'><a href="#">لیگ تنیس ایران</a></li>
            <li className='menu-item'><a href="#">پدل</a></li>
            <li className='menu-item'><a href="#">ITF JUNIORS</a></li>
            <li className='menu-item'><a href="#">لیست نفرات حاضر در مسابقات</a></li>
            <li className='menu-item'><a href="#">برنامه مسابقات</a></li>
          </ul>
          <ArrowDropDownIcon />
        </li>

        <li className='menu-item'>
          <a className="parent-link" href="#">استان ها</a>
        </li>

        <li className='menu-item menu-item-has-children'>
          <a className="parent-link" href="#">رنکینگ</a>
          <ArrowDropDownIcon />
        </li>

        <li className='menu-item menu-item-has-children'>
          <a className="parent-link" href="#">تقویم</a>
          <ArrowDropDownIcon />
        </li>

        <li className='menu-item menu-item-has-children'>
          <a className="parent-link" href="#">فرم ها</a>
          <ArrowDropDownIcon />
        </li>

        <li className='menu-item'>
          <a className="parent-link" href="#">تماس با ما</a>
        </li>

        <li className='menu-item'>
          <a className="parent-link" href="#">درباره ما</a>
        </li>
        
        <li className='menu-item'>
          <a className="parent-link" href="#">سامانه ملی تنیس</a>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default NavBar;