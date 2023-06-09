import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';

import './HamburgerMenu.scss';

const HamburgerMenu = () => {
  const [isOpend, setIsOpend] = useState(false);
  const hamburgerMenu = useRef();

  const closeAndOpenHamburgerMenu = () => {
    hamburgerMenu.current.classList.toggle("hamburger-menu-opend");
    document.body.classList.toggle("hamburger-menu-opend");
    setIsOpend(!isOpend);
  }

  const openAndCloseClasses = classNames({
    open: !isOpend,
    close: isOpend,
  });

  useEffect(()=>{

    return () => {
      setIsOpend(false);
      document.body.classList.remove("hamburger-menu-opend");
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
            <div id='mobileMenu' className='monile-menu'>
          </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default HamburgerMenu;