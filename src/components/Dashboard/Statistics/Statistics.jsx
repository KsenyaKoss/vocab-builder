import { useSelector } from "react-redux"
import { getStatistics } from "../../../redux/Words/wordsSelectors"
import { StatisticsNumber, StatisticsTitle, StatisticsWrp } from "./Statistics.styled";

const Statistics = () => {
   const totalCount = useSelector(getStatistics);
   console.log(totalCount);

  return (
    <StatisticsWrp>
      <StatisticsTitle>To study: </StatisticsTitle>  
      <StatisticsNumber>{totalCount}</StatisticsNumber>
    </StatisticsWrp>
  )
}

export default Statistics
