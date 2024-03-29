import { useDispatch, useSelector } from "react-redux";
import { getCategoriesList } from "../../../redux/Words/wordsSelectors";
import Icon from "../../Icons/Icon";
import {
  CustomRadioBtnWrpStyled,
  FilterWrp,
  IconWrp,
  InputStyled,
  InputWrp,
  RadioBtnLabel,
  RadioBtnWrp,
  RadioInputStyled,
  SelectStyled,
  SelectWrp,
} from "./Filters.styled";
import { useEffect, useState } from "react";
import { debounce } from "lodash";
import { getWordsAll } from "../../../redux/Words/wordsOperations";

const Filters = () => {
  const [searchWord, setSearchWord] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [verbType, setVerbType] = useState("");
  const dispatch = useDispatch();
  
  const categories = useSelector(getCategoriesList);

  const debouncedSearchWord = debounce((input)=> {
    setSearchWord(input);
  }, 300);

  const handleChangeSearchInput = (event) => {
    const sanitizedInput = event.target.value.trim();
    debouncedSearchWord(sanitizedInput);
  }

  const handleCategoryChange = (event) => {
    const chosenCategory= event.target.value.toLowerCase();
    setSelectedCategory(chosenCategory);
  };

  const handleVerbTypeChange = (event) => {
    const selectedVerbType = event.target.value;
    setVerbType(selectedVerbType);
  };

  useEffect(()=>{
    dispatch(getWordsAll({
      keyword: searchWord,
      category: selectedCategory,
      isIrregular: verbType === "irregular" ? true : false,
     }))
  }, [searchWord, selectedCategory, verbType]);

  return (
    <FilterWrp>
      <InputWrp>
        <InputStyled type="text" placeholder="Find the word" onChange={handleChangeSearchInput}/>
        <IconWrp>
          <Icon id="search" />
        </IconWrp>
      </InputWrp>
      <SelectWrp>
        <SelectStyled name="select" onChange={handleCategoryChange}>
          <option value="" disabled hidden>
            Categories
          </option>
          {categories?.map((el) => (
            <option value={el} key={el}>
              {el.charAt(0).toUpperCase() + el.slice(1)}
            </option>
          ))}
        </SelectStyled>
      </SelectWrp>
      {selectedCategory === "verb" && (
        <RadioBtnWrp>
          <RadioBtnLabel>
            <CustomRadioBtnWrpStyled>
              {verbType === "regular" ? (
                <Icon id="radio-btn-on" />
              ) : (
                <Icon id="radio-btn-off" />
              )}
            </CustomRadioBtnWrpStyled>
            <RadioInputStyled
              type="radio"
              onChange={handleVerbTypeChange}
              checked={verbType === "regular"}
              value={"regular"}
            />
            Regular
          </RadioBtnLabel>
          <RadioBtnLabel>
            <CustomRadioBtnWrpStyled>
              {verbType === "irregular" ? (
                <Icon id="radio-btn-on" />
              ) : (
                <Icon id="radio-btn-off" />
              )}
            </CustomRadioBtnWrpStyled>
            <RadioInputStyled
              type="radio"
              checked={verbType === "irregular"}
              onChange={handleVerbTypeChange}
              value={"irregular"}
            />
            Irregular
          </RadioBtnLabel>
        </RadioBtnWrp>
      )}
    </FilterWrp>
  );
};

export default Filters;
