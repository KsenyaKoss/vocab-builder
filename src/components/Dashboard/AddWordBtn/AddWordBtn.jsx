import React from 'react'
import Icon from '../../Icons/Icon'
import { ButtonAddWordStyled, ButtonWrp, LinkStyled } from './AddWordBtn.styled'

const AddWordBtn = () => {
  return (
    <ButtonWrp>
      <ButtonAddWordStyled>Add word <Icon id="plus"/></ButtonAddWordStyled>
      <LinkStyled>Train oneself <Icon id="switch-horizontal"/></LinkStyled>
    </ButtonWrp>
  )
}

export default AddWordBtn
