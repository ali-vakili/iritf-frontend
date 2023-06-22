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
          <a href="/" title='Home'><HomeIcon style={{"color" : "#008F70"}}/></a>
        </li>

        <li className='menu-item menu-item-has-children'>
          <a className="parent-link" href="#">
            اخبار
            <span><ArrowDropDownIcon /></span>
          </a>

          <ul className='sub-menu menu-sub-content'>
            <li className='menu-item'><a href="#">اخبار فدراسیون تنیس</a></li>
            <li className='menu-item'><a href="#">اخبار استان ها</a></li>
            <li className='menu-item'><a href="#">اخبار خارجی</a></li>
            <li className='menu-item'><a href="#">ویدئوها</a></li>
            <li className='menu-item menu-item-has-children'>
              <a href="#">
                کمیته ها
                <span><KeyboardArrowLeftIcon /></span>
              </a>
                <ul className='sub-menu from-sub-menu menu-sub-content'>
                  <li className='menu-item menu-item-has-children'>
                    <a href="#">
                      کمیته مسابقات
                      <span><KeyboardArrowLeftIcon /></span>
                    </a>
                    <ul className='sub-menu from-sub-menu menu-sub-content'>
                      <li className='menu-item'>
                        <a href="#">برنامه مسابقات</a>
                      </li>
                      <li className='menu-item'>
                        <a href="#">
                          لیست نفرات حاضر در مسابقات
                        </a>
                      </li>
                      <li className='menu-item menu-item-has-children'>
                        <a href="#">
                          دستورالعمل ها
                          <span><KeyboardArrowLeftIcon /></span>
                        </a>
                        <ul className='sub-menu from-sub-menu menu-sub-content'>
                          <li className='menu-item'>
                            <a href="#">
                              آیین نامه ها
                            </a>
                          </li>
                          <li className='menu-item'>
                            <a href="#">
                              Wild Card
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className='menu-item menu-item-has-children'>
                    <a href="#">
                      کمیته آموزش 
                      <span><KeyboardArrowLeftIcon /></span>
                    </a>
                    <ul className='sub-menu from-sub-menu menu-sub-content'>
                      <li className='menu-item menu-item-has-children'><a href="#">تقویم کمیته آموزش</a>
                      </li>
                    </ul>
                  </li>
                  <li className='menu-item menu-item-has-children'>
                    <a href="#">
                      کمیته داوران
                      <span><KeyboardArrowLeftIcon /></span>
                    </a>
                    <ul className='sub-menu from-sub-menu menu-sub-content'>
                      <li className='menu-item'><a href="#">تقویم عملیاتی کمیته داوران</a>
                      </li>
                    </ul>
                  </li>
                  <li className='menu-item menu-item-has-children'>
                    <a href="#">
                      کمیته انضباطی
                      <span><KeyboardArrowLeftIcon /></span>
                    </a>
                    <ul className='sub-menu from-sub-menu menu-sub-content'>
                      <li className='menu-item'>
                        <a href="#">اهم نکات آیین نامه انضباطی فدراسیون تنیس</a>
                      </li>
                    </ul>
                  </li>
                  <li className='menu-item'><a href="#">کمیته فرهنگی</a></li>
                  <li className='menu-item'><a href="#">کمیته پزشکی</a></li>
                  <li className='menu-item'><a href="#">کمیته همگانی</a></li>
                  <li className='menu-item'><a href="#">کمیته تنیس با ویلچر</a></li>
                  <li className='menu-item'><a href="#">کمیته استعدادیابی</a></li>
                </ul>
            </li>
          </ul>
        </li>

        <li className='menu-item menu-item-has-children'>
          <a className="parent-link" href="#">
            اخبار مسابقات
            <span>
              <ArrowDropDownIcon />
            </span>
          </a>
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
        </li>

        <li className='menu-item'>
          <a className="parent-link" href="#">استان ها</a>
        </li>

        <li className='menu-item menu-item-has-children'>
          <a className="parent-link" href="#">
            رنکینگ
            <span>
              <ArrowDropDownIcon />
            </span>
          </a>
          <ul className='sub-menu menu-sub-content'>
            <li className='menu-item menu-item-has-children'>
              <a href="#">
                رنکینگ آقایان
                <span>
                  <KeyboardArrowLeftIcon />
                </span>
              </a>
              <ul className='sub-menu from-sub-menu menu-sub-content'>
                <li className='menu-item menu-item-has-children'>
                  <a href="#">
                    بزرگسالان
                    <span>
                      <KeyboardArrowLeftIcon />
                    </span>
                  </a>
                  <ul className='sub-menu from-sub-menu menu-sub-content'>
                    <li className='menu-item'>
                      <a href="#">
                        انفرادی آقایان
                      </a>
                    </li>
                    <li className='menu-item'>
                      <a href="#">
                        دونفره آقایان
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='menu-item menu-item-has-children'>
                  <a href="#">
                    رده های سنی پسران
                    <span>
                      <KeyboardArrowLeftIcon />
                    </span>
                  </a>
                  <ul className='sub-menu from-sub-menu menu-sub-content'>
                    <li className='menu-item'>
                      <a href="#">
                        ۱۸ سال پسران
                      </a>
                    </li>
                    <li className='menu-item'>
                      <a href="#">
                        ۱۶ سال پسران
                      </a>
                    </li>
                    <li className='menu-item'>
                      <a href="#">
                        ۱۴ سال پسران
                      </a>
                    </li>
                    <li className='menu-item'>
                      <a href="#">
                        ۱۲ سال پسران
                      </a>
                    </li>
                    <li className='menu-item'>
                      <a href="#">
                        ۱۰ سال پسران 
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className='menu-item menu-item-has-children'>
              <a href="#">
                رنکینگ بانوان
                <span>
                  <KeyboardArrowLeftIcon />
                </span>
              </a>
              <ul className='sub-menu from-sub-menu menu-sub-content'>
                <li className='menu-item menu-item-has-children'>
                  <a href="#">
                    بزرگسالان
                    <span>
                      <KeyboardArrowLeftIcon />
                    </span>
                  </a>
                  <ul className='sub-menu from-sub-menu menu-sub-content'>
                    <li className='menu-item'>
                      <a href="#">
                        انفرادی بانوان
                      </a>
                    </li>
                    <li className='menu-item'>
                      <a href="#">
                        دونفره بانوان
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='menu-item menu-item-has-children'>
                  <a href="#">
                    رده های سنی دختران
                    <span>
                      <KeyboardArrowLeftIcon />
                    </span>
                  </a>
                  <ul className='sub-menu from-sub-menu menu-sub-content'>
                    <li className='menu-item'>
                      <a href="#">
                        ۱۸ سال دختران
                      </a>
                    </li>
                    <li className='menu-item'>
                      <a href="#">
                        ۱۶ سال دختران
                      </a>
                    </li>
                    <li className='menu-item'>
                      <a href="#">
                        ۱۴ سال دختران
                      </a>
                    </li>
                    <li className='menu-item'>
                      <a href="#">
                        ۱۲ سال دختران
                      </a>
                    </li>
                    <li className='menu-item'>
                      <a href="#">
                        ۱۰ سال دختران 
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className='menu-item menu-item-has-children'>
          <a className="parent-link" href="#">
            تقویم
            <span>
              <ArrowDropDownIcon />
            </span>
          </a>
          <ul className='sub-menu menu-sub-content'>
            <li className='menu-item'><a href="#"> کمیته مسابقات</a></li>
            <li className='menu-item'><a href="#"> کمیته آموزش</a></li>
            <li className='menu-item'><a href="#"> کمیته داوران</a></li>
          </ul>
        </li>

        <li className='menu-item menu-item-has-children'>
          <a className="parent-link" href="#">
            فرم ها
            <span>
              <ArrowDropDownIcon />
            </span>
          </a>
          <ul className='sub-menu menu-sub-content'>
            <li className='menu-item'><a href="#">فرم اطلاعات فردی مربیان</a></li>
            <li className='menu-item'><a href="#">فرم اطلاعات فردی داوران</a></li>
            <li className='menu-item'><a href="#">قرارداد مسابقات</a></li>
            <li className='menu-item'><a href="#">فکت شیت مسابقات</a></li>
            <li className='menu-item menu-item-has-children'>
              <a href="#">
                کمیته انضباطی
                <span><KeyboardArrowLeftIcon /></span>
              </a>
              <ul className='sub-menu from-sub-menu menu-sub-content'>
                <li className='menu-item'><a href="#">درخواست بدوی کمیته انضباطی</a></li>
                <li className='menu-item'><a href="#">فرم درخواست تجدیدنظر کمیته انضباطی</a></li>
                <li className='menu-item'><a href="#">اهم نکات آیین نامه انضباطی فدراسیون تنیس</a></li>
              </ul>
            </li>
            <li className='menu-item'><a href="#">منشور اخلاقی باشگاه داران ورزشی</a></li>
          </ul>
        </li>

        <li className='menu-item'>
          <a className="parent-link" href="#">تماس با ما</a>
        </li>

        <li className='menu-item'>
          <a className="parent-link" href="#">درباره ما</a>
        </li>
        
        <li className='menu-item'>
          <a className="parent-link" href="https://www.itfipin.ir/Home/LogIn" target='_blank'>سامانه ملی تنیس</a>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default NavBar;