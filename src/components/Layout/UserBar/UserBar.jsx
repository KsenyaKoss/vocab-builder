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
  const user = useSelector(selectUser);

  return (
    <UserBarWrp>
      <UserWrp>
        <NameStyled>{user?.name || "Iryna"}</NameStyled>
        <AvatarWrp>
          {user?.avatar ? <img src={user?.avatar} alt="avatar" /> : <Icon id="user" />}
        </AvatarWrp>    
      </UserWrp>
    </UserBarWrp>
  );
};

export default UserBar;
