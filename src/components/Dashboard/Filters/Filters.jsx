import { useSelector } from "react-redux";
import { getCategoriesList } from "../../../redux/Words/wordsSelectors";
import Icon from "../../Icons/Icon";
import {
  FilterWrp,
  IconWrp,
  InputStyled,
  InputWrp,
  SelectStyled,
  SelectWrp,
} from "./Filters.styled";

const Filters = () => {
  const categories = useSelector(getCategoriesList);
  console.log(categories);

  return (
    <FilterWrp>
      <InputWrp>
        <InputStyled type="text" placeholder="Find the word" />
        <IconWrp>
          <Icon id="search" />
        </IconWrp>
      </InputWrp>
      <SelectWrp>
        <SelectStyled name="select"  >
          <option value="" disabled hidden >
            Categories
          </option>
          {categories?.map((el) => (
            <option value={el} key={el}>
              {el}
            </option>
          ))}
        </SelectStyled>
      </SelectWrp>
    </FilterWrp>
  );
};

export default Filters;
