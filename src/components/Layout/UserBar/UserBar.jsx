import React from "react";
import Icon from "../../Icons/Icon";
import {
  AvatarWrp,
  NameStyled,
  UserBarWrp,
  UserWrp,
} from "./UserBar.styled";

const UserBar = ({ name, avatar }) => {
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
