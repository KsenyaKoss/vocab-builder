import React from 'react'
import UserBar from '../UserBar/UserBar'
import Icon from '../../Icons/Icon'
import UserNav from '../UserNav/UserNav'
import useMediaRules from '../../../hooks/useMediaRules'

const BurgerMenuModal = () => {
    const { isRetina } = useMediaRules();
  return (
    <div>
      <UserBar/>
      <Icon id="close"/>
      <UserNav/>
      <div>
        <img src={ isRetina
                ? require("../../assets/images/illustration-desktop@2x.png")
                : require("../../assets/images/illustration-desktop.png")
            }
            alt="VocabBuilder" />
      </div>

    </div>
  )
}

export default BurgerMenuModal
