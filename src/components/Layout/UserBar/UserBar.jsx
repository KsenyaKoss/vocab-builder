import React from "react";
import Icon from "../../Icons/Icon";
import {
  AvatarWrp,
  NameStyled,
  UserBarWrp,
  UserWrp,
} from "./UserBar.styled";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/Auth/authSelectors";

const UserBar = () => {

  const {name, avatar} = useSelector(selectUser);
  return (
    <UserBarWrp>
      <UserWrp>
        <NameStyled>{name || "Iryna"}</NameStyled>
        <AvatarWrp>
          {avatar ? <img src={avatar} alt="avatar" /> : <Icon id="user" />}
        </AvatarWrp>    
      </UserWrp>
    </UserBarWrp>
  );
};

export default UserBar;
