import React, { useEffect } from 'react'
import Filters from '../../components/Dashboard/Filters/Filters'
import { PageWrp } from './DictionaryPage.styled'
import { useDispatch } from 'react-redux';
import { getCategoriesListThunk } from '../../redux/Words/wordsOperations';

const DictionaryPage = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    console.log("1234");
    dispatch(getCategoriesListThunk()); 
  },[]);

  
  return (
    <PageWrp>
      <Filters/>
    </PageWrp>
  )
}

export default DictionaryPage
