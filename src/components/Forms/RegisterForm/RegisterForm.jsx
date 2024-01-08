import { useFormik } from "formik";
import {
  FormStyled,
  IconWrp,
  InputPasswordWrp,
  InputStyled,
  PStyled,
  RegisterButtonStyled,
  RegisterStyled,
  StyledLink,
  TitleStyled,
} from "./RegisterFormStyled";
import Icon from "../../Icons/Icon";
import { useState } from "react";

const RegisterForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePassword = () => setPasswordVisible(!passwordVisible);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <RegisterStyled>
      <TitleStyled>Register</TitleStyled>
      <PStyled>
        To start using our services, please fill out the registration form
        below. All fields are mandatory:
      </PStyled>
      <FormStyled onSubmit={formik.onSubmit}>
        <InputStyled type="text" placeholder="Name" />
        <InputStyled type="email" placeholder="Email" />
        <InputPasswordWrp>
          <InputStyled  
          type={passwordVisible? "text" : "password"} 
          placeholder="Password"/>
          <IconWrp onClick={togglePassword}>
            {passwordVisible ? <Icon id={"eye-off"} /> : <Icon id={"eye"} />}
          </IconWrp>
        </InputPasswordWrp>
        <RegisterButtonStyled>Register</RegisterButtonStyled>
        <StyledLink to="/login">Login</StyledLink>
      </FormStyled>
    </RegisterStyled>
  );
};

export default RegisterForm;
