import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getCategoriesList } from '../../../redux/Words/wordsSelectors';

const Filters = () => {
  
  const categories = useSelector(getCategoriesList);

     console.log(categories);
 

  return (
    <div>
      <input type="text" />
      <select name="" id=""></select>
    </div>
  )
}

export default Filters
