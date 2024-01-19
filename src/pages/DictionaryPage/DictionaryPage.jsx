import React, { useEffect } from 'react'
import Filters from '../../components/Dashboard/Filters/Filters'
import { PageWrp } from './DictionaryPage.styled'
import { useDispatch } from 'react-redux';
import { getCategoriesListThunk, getStatisticsThunk } from '../../redux/Words/wordsOperations';
import Statistics from '../../components/Dashboard/Statistics/Statistics';

const DictionaryPage = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    console.log("1234");
    dispatch(getCategoriesListThunk()); 
    dispatch(getStatisticsThunk());
  },[dispatch]);

  
  return (
    <PageWrp>
      <Filters/>
      <Statistics/>
    </PageWrp>
  )
}

export default DictionaryPage
