import React, { useState } from 'react'
import { InputGroup } from 'react-bootstrap';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import banner from "../../../shared/assets/image/banner-image.png"
import DateTime from './DateTime';
import SocialMedia from '../socialMedia/SocialMedia';
import NavBar from "./NavBar"

import "./TopBar.scss"

const TopBar = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <header>
      <div id='TopBar' className='top-bar'>
        <div className='search'>
          <InputGroup>
            <InputGroup.Text id="" className="bg-white border-0 search-icon">
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
        <SocialMedia />
        <DateTime />
      </div>
      <img src={banner} alt="فدراسیون تنیس جمهوری اسلامی ایران"  style={{"width" : "100%", "height":"auto"}}/>
      <NavBar />
    </header>
  );
};
  
export default TopBar;