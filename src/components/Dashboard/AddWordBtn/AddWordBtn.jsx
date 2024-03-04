import React from 'react'
import Icon from '../../Icons/Icon'
import { ButtonAddWordStyled, ButtonWrp, LinkStyled } from './AddWordBtn.styled'
import { useDispatch } from 'react-redux';
import { openModalWindow } from '../../../redux/Words/wordsSlice';

const AddWordBtn = () => {
  const dispatch = useDispatch();

  return (
    <ButtonWrp>
      <ButtonAddWordStyled onClick={()=> dispatch(openModalWindow(true))}>Add word <Icon id="plus"/></ButtonAddWordStyled>
      <LinkStyled>Train oneself <Icon id="switch-horizontal"/></LinkStyled>
    </ButtonWrp>
  )
}

export default AddWordBtn
