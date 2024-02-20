import React from "react";
import UserNav from "../UserNav/UserNav";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/Auth/authSelectors";
import UserBar from "../UserBar/UserBar";
import {
  BurgerWrp,
  HeaderWrp,
  ImgWrp,
  LogoTitle,
  LogoWrp,
  UserBarBurgerIconWrp,
} from "./Header.styled";
import useMediaRules from "../../../hooks/useMediaRules";
import Icon from "../../Icons/Icon";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { isMobile, isDesktop } = useMediaRules();

  return (
    <HeaderWrp>
      <LogoWrp>
        <ImgWrp>
          <img
            src={
              isMobile
                ? require("../../../assets/images/logo-mobile.png")
                : require("../../../assets/images/logo-desktop.png")
            }
            alt="logo"
          />
        </ImgWrp>
        <LogoTitle>VocabBuilder</LogoTitle>
      </LogoWrp>
      {isDesktop && isLoggedIn && <UserNav />}
      <UserBarBurgerIconWrp>
        {isLoggedIn && <UserBar />}
        <BurgerWrp>
          <Icon id="burger" />
        </BurgerWrp>
      </UserBarBurgerIconWrp>
    </HeaderWrp>
  );
};

export default Header;
