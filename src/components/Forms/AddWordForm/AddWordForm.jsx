import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getCategoriesList } from "../../../redux/Words/wordsSelectors";
import {
  CustomRadioBtnWrpStyled,
  FormWrpStyled,
  RadioBtnLabel,
  RadioBtnWrp,
  RadioInputStyled,
  SelectStyled,
  SelectWrp,
} from "./AddWordForm.styled";
import Icon from "../../Icons/Icon";
import { ReactComponent as Ukraine } from "../../../assets/images/ukraine.svg";
import { ReactComponent as Ukingdom } from "../../../assets/images/united kingdom.svg";

const AddWordForm = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [verbType, setVerbType] = useState("");
  const categories = useSelector(getCategoriesList);

  const handleCategoryChange = (event) => {
    const chosenCategory = event.target.value.toLowerCase();
    setSelectedCategory(chosenCategory);
  };

  const handleVerbTypeChange = (event) => {
    const selectedVerbType = event.target.value;
    setVerbType(selectedVerbType);
  };

  return (
    <FormWrpStyled>
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
      <div>
        <div><Ukraine/> 
        <p>Ukrainian</p>
        </div>
        <input type="text" />
      </div>
      <div>
        <div><Ukingdom/> 
        <p>English</p>
        </div>
        <input type="text" />
      </div>
      <div>
        <button>Add</button>
        <button>Cancel</button>
      </div>
    </FormWrpStyled>
  );
};

export default AddWordForm;
