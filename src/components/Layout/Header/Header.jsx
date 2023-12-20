import React from 'react'
import useMediaRules from '../../../hooks/mediaRules'
import UseNav from '../UserNav/UseNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../../redux/Auth/authSelectors';
import UserBar from '../UserBar/UserBar';

const Header = () => {
    const {isDesktop, isRetina} = useMediaRules();
    const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
        <img src={isRetina? "/logo512.png" : "/logo192.png"} alt="logo" />
        <p>VocabBuilder</p>
        {isDesktop && <UseNav/>}
        {isLoggedIn && <UserBar/>}
    </div>
  )
}

export default Header
