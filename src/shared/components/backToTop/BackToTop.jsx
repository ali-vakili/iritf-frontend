import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import "./BackToTop.scss"

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    const yOffset = window.pageYOffset;
    if (yOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Button
      sx={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        minWidth:"44px !important",
        height:"44px !important",
        display: isVisible ? 'block' : 'hidden',
        opacity: isVisible ? 1 : 0,
        padding:"0 !important"
      }}
      onClick={scrollToTop}
      variant="contained"
      className="back-to-top"
      >
      <KeyboardArrowUpIcon/>
    </Button>
  );
};

export default BackToTopButton;