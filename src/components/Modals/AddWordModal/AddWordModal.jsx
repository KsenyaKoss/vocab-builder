import React from 'react'
import { ModalBodyStyled, ModalOverlay, ModalTitleStyled, TextStyled } from './AddWordModal.styled'
import AddWordForm from '../../Forms/AddWordForm/AddWordForm'

const AddWordModal = () => {
  return (
    <ModalOverlay>
      <ModalBodyStyled>
        <ModalTitleStyled>Add word</ModalTitleStyled>
        <TextStyled>Adding a new word to the dictionary is an important step in enriching the language base and expanding the vocabulary.</TextStyled>
        <AddWordForm/>
      </ModalBodyStyled>
    </ModalOverlay>
  )
}

export default AddWordModal
