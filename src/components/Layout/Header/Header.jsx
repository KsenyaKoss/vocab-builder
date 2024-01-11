import React from "react";
import UserNav from "../UserNav/UserNav";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/Auth/authSelectors";
import UserBar from "../UserBar/UserBar";
import { BurgerWrp, HeaderWrp, ImgWrp, LogoTitle, LogoWrp } from "./Header.styled";
import useMediaRules from "../../../hooks/useMediaRules";
import Icon from "../../Icons/Icon";


const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
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
      <BurgerWrp>
          <Icon id="burger" />
        </BurgerWrp>
    </HeaderWrp>
  );
};

export default Header;
