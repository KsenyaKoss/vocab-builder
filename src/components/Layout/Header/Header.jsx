import React from 'react'
import { devices } from '../../../constants/breakpoints'
import UseNav from '../UserNav/UseNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../../redux/Auth/authSelectors';
import UserBar from '../UserBar/UserBar';

const Header = () => {
    
    const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
        <img src={devices.retina? "/logo512.png" : "/logo192.png"} alt="logo" />
        <p>VocabBuilder</p>
        {devices.desktop && <UseNav/>}
        {isLoggedIn && <UserBar/>}
    </div>
  )
}

export default Header
