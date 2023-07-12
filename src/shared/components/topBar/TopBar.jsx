import React, { useState } from "react";
import { InputGroup } from "react-bootstrap";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import banner from "../../../shared/assets/images/banner-image.png";
import DateTime from "./DateTime";
import SocialMedia from "../socialMedia/SocialMedia";
import NavBar from "./NavBar";
import HamburgerMenu from "./HamburgerMenu";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import "./TopBar.scss";

const TopBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const isSmallScreen = useMediaQuery({ maxWidth: 920 });

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <header>
      {isSmallScreen && <HamburgerMenu />}
      {!isSmallScreen && (
        <div id="TopBar" className="top-bar">
          <div className="search">
            <InputGroup>
              <InputGroup.Text className="bg-white border-0 search-icon">
                <Link to={`/search/${searchValue}`} style={{ color: "#FFF" }}>
                  <SearchRoundedIcon />
                </Link>
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
          <SocialMedia iconSize={"medium"} />
          <DateTime />
        </div>
      )}
      <Link to="/">
        <img
          className="banner"
          src={banner}
          alt="هیئت تنیس استان آذربایجان شرقی"
          style={{ width: "100%", height: "auto" }}
        />
      </Link>
      {!isSmallScreen && <NavBar />}
    </header>
  );
};

export default TopBar;
