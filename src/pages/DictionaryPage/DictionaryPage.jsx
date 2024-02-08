import React, { useEffect } from "react";
import Filters from "../../components/Dashboard/Filters/Filters";
import { DashboardWrp, PageWrp, StatisticBtnWrp } from "./DictionaryPage.styled";
import { useDispatch } from "react-redux";
import {
  getCategoriesListThunk,
  getStatisticsThunk,
  getWordsAll,
} from "../../redux/Words/wordsOperations";
import Statistics from "../../components/Dashboard/Statistics/Statistics";
import AddWordBtn from "../../components/Dashboard/AddWordBtn/AddWordBtn";
import WordsTable from "../../components/WordsTable/WordsTable";

const DictionaryPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("1234");
    dispatch(getCategoriesListThunk());
    dispatch(getStatisticsThunk());
    dispatch(getWordsAll());
  }, [dispatch]);

  return (
    <PageWrp>
      <DashboardWrp>
        <Filters />
        <StatisticBtnWrp>
          <Statistics />
          <AddWordBtn />
        </StatisticBtnWrp>
      </DashboardWrp>
      <WordsTable/>
    </PageWrp>
  );
};

export default DictionaryPage;
