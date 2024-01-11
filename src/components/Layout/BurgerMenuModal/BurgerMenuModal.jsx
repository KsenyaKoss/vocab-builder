import React from "react";
import UserBar from "../UserBar/UserBar";
import Icon from "../../Icons/Icon";
import UserNav from "../UserNav/UserNav";
import useMediaRules from "../../../hooks/useMediaRules";
import {
  ImgStyled,
  ImgWrp,
  MenuBody,
  UserBarIconWrp,
} from "./BurgerMenuModal.styled";

const BurgerMenuModal = () => {
  const { isRetina } = useMediaRules();
  return (
    <div>
      <MenuBody>
        <UserBarIconWrp>
          <UserBar />
          <Icon id="close" />
        </UserBarIconWrp>
        <UserNav />
        <ImgWrp>
          <ImgStyled
            src={
              isRetina
                ? require("../../../assets/images/illustration-desktop@2x.png")
                : require("../../../assets/images/illustration-desktop.png")
            }
            alt="VocabBuilder"
          />
        </ImgWrp>
      </MenuBody>
    </div>
  );
};

export default BurgerMenuModal;
