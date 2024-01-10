import React from 'react'
import { ELStyled, ListWrp } from './UserNav.styled'
import { useLocation } from 'react-router-dom'

const UserNav = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div>
      <nav>
        <ListWrp>
          <ELStyled href='/dictionary' className={location.pathname === "/dictionary" ? 'active' : ''} >Dictionary</ELStyled>
          <ELStyled href='/recommend' className={location.pathname === "/recommend" ? 'active' : ''}>Recommend</ELStyled>
          <ELStyled href='/training' className={location.pathname === "/training" ? 'active' : ''}>Training</ELStyled>
        </ListWrp>
       
      </nav>
    </div>
  )
}

export default UserNav
