import React from 'react'
import Icons from './sprite.svg';

const Icon = ({id}) => {
  return (
    <svg width={'20px'}>
      <use href={Icons + "#icon-" + id}></use>
    </svg>
  )
}

export default Icon
