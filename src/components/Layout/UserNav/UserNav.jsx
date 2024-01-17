import React from 'react'
import { ELStyled, ListWrp } from './UserNav.styled'
import { useLocation } from 'react-router-dom'
import { logoutThunk } from '../../../redux/Auth/authOperations';
import { useDispatch } from 'react-redux';

const UserNav = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <div>
      <nav>
        <ListWrp>
          <ELStyled href='/dictionary' className={location.pathname === "/dictionary" ? 'active' : ''} >Dictionary</ELStyled>
          <ELStyled href='/recommend' className={location.pathname === "/recommend" ? 'active' : ''}>Recommend</ELStyled>
          <ELStyled href='/training' className={location.pathname === "/training" ? 'active' : ''}>Training</ELStyled>
          <button onClick={()=>{dispatch(logoutThunk())}}>LogOut
          </button>
        </ListWrp>
       
      </nav>
    </div>
  )
}

export default UserNav
