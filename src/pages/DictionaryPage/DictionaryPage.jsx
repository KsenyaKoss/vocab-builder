import React, { useEffect } from "react";
import Filters from "../../components/Dashboard/Filters/Filters";
import { DashboardWrp, PageWrp, StatisticBtnWrp } from "./DictionaryPage.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoriesListThunk,
  getStatisticsThunk,
  getWordsAll,
} from "../../redux/Words/wordsOperations";
import Statistics from "../../components/Dashboard/Statistics/Statistics";
import AddWordBtn from "../../components/Dashboard/AddWordBtn/AddWordBtn";
import WordsTable from "../../components/WordsTable/WordsTable";
import { isModalOpen } from "../../redux/Words/wordsSelectors";
import AddWordModal from "../../components/Modals/AddWordModal/AddWordModal";

const DictionaryPage = () => {
  const dispatch = useDispatch();
  const openModal = useSelector(isModalOpen);

  useEffect(() => {
    console.log("1234");
    dispatch(getCategoriesListThunk());
    dispatch(getStatisticsThunk());
    dispatch(getWordsAll());
  }, [dispatch]);

  return (
    <PageWrp>
      {openModal && <AddWordModal/>}
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
