import React from "react";
import UserNav from "../UserNav/UserNav";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/Auth/authSelectors";
import UserBar from "../UserBar/UserBar";
import { HeaderWrp, ImgWrp, LogoTitle, LogoWrp } from "./Header.styled";
import useMediaRules from "../../../hooks/useMediaRules";


const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn);
  const {isMobile, isDesktop}  = useMediaRules();

  return (
    <HeaderWrp>
      <LogoWrp>
        <ImgWrp>
          <img
            src={isMobile? require("../../../assets/images/logo-mobile.png") : require("../../../assets/images/logo-desktop.png")}
            alt="logo"
          />
        </ImgWrp>
        <LogoTitle>VocabBuilder</LogoTitle>
      </LogoWrp>
      {isDesktop  && <UserNav />}
      {isLoggedIn && <UserBar />}
    </HeaderWrp>
  );
};

export default Header;
