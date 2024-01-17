import React, { useEffect } from "react";
import RegisterForm from "../../components/Forms/RegisterForm/RegisterForm";

import {
  ElementStyled,
  HeroWrp,
  ImgStyled,
  ImgWrp,
  ListStyled,
  PageStyled,
} from "./RegisterPage.styled";
import useMediaRules from "../../hooks/useMediaRules";
import { useDispatch } from "react-redux";
import { getCurrentUserThunk } from "../../redux/Auth/authOperations";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const { isMobile, isDesktop, isRetina } = useMediaRules();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
   dispatch(getCurrentUserThunk()).unwrap().then(()=> navigate('/dictionary')) ;
  }, [dispatch]);

  return (
    <PageStyled>
      <HeroWrp>
        <ImgWrp>
          <ImgStyled
            src={
              isMobile
                ? require("../../assets/images/illustration-mobile.png")
                : isMobile && isRetina
                ? require("../../assets/images/illustration-mobile@2x.png")
                : isDesktop && isRetina
                ? require("../../assets/images/illustration-desktop@2x.png")
                : require("../../assets/images/illustration-desktop.png")
            }
            alt="VocabBuilder"
          />
        </ImgWrp>
        <ListStyled>
          <ElementStyled>Word</ElementStyled>
          <ElementStyled>Translation</ElementStyled>
          <ElementStyled>Grammar</ElementStyled>
          <ElementStyled>Progress</ElementStyled>
        </ListStyled>
      </HeroWrp>
      <RegisterForm />
    </PageStyled>
  );
};

export default RegisterPage;
