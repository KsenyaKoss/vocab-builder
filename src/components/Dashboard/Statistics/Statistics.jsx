import { useSelector } from "react-redux"
import { getStatistics } from "../../../redux/Words/wordsSelectors"

const Statistics = () => {
   const totalCount = useSelector(getStatistics);

  return (
    <div>
      <p>To study: </p>  
      <p>{totalCount}</p>
    </div>
  )
}

export default Statistics
