import React from "react";
import RegisterForm from "../../components/Forms/RegisterForm/RegisterForm";

import { PageStyled } from "./RegisterPage.styled";

const RegisterPage = () => {
  return (
    <PageStyled>
      <RegisterForm />
    </PageStyled>
  );
};

export default RegisterPage;
