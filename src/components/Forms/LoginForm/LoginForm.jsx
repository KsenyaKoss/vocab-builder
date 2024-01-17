import { useFormik } from "formik";
import { useState } from "react";
import Icon from "../../Icons/Icon";
import {
  FormStyled,
  IconWrp,
  InputStyled,
  InputWarningWrp,
  InputWrp,
  LoginButtonStyled,
  LoginStyled,
  PStyled,
  StyledError,
  StyledLink,
  StyledSuccess,
  TitleStyled,
} from "./LoginFormStyled";
import { yupSchemaLogin } from "./yupValidationSchema";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../../redux/Auth/authOperations";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const togglePassword = () => setPasswordVisible(!passwordVisible);

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yupSchemaLogin,
    onSubmit: (values, actions) => {
      actions.resetForm();
      dispatch(loginThunk(values))
        .unwrap()
        .then(() => navigate("/dictionary"));
    },
  });
  return (
    <LoginStyled>
      <div>
        <TitleStyled>Login</TitleStyled>
        <PStyled>
          Please enter your login details to continue using our service:
        </PStyled>
      </div>
      <FormStyled onSubmit={handleSubmit}>
        <InputWrp>
          <InputStyled
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              touched.email && !errors.email
                ? "valid"
                : errors.email && touched.email
                ? "invalid"
                : ""
            }
          />
          {touched.email && errors.email ? (
            <InputWarningWrp>
              <Icon id={"warning"} />
              <StyledError>{errors.email}</StyledError>
            </InputWarningWrp>
          ) : touched.email && !errors.email ? (
            <InputWarningWrp>
              <Icon id={"success"} />
              <StyledSuccess>Success email</StyledSuccess>
            </InputWarningWrp>
          ) : (
            <></>
          )}
        </InputWrp>
        <InputWrp>
          <InputStyled
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              touched.password && !errors.password
                ? "valid"
                : errors.password && touched.password
                ? "invalid"
                : ""
            }
          />
          <IconWrp onClick={togglePassword}>
            {passwordVisible ? <Icon id={"eye-off"} /> : <Icon id={"eye"} />}
          </IconWrp>
          {touched.password && errors.password ? (
            <InputWarningWrp>
              <Icon id={"warning"} />
              <StyledError>{errors.password}</StyledError>
            </InputWarningWrp>
          ) : touched.password && !errors.password ? (
            <InputWarningWrp>
              <Icon id={"success"} />
              <StyledSuccess>Success password</StyledSuccess>
            </InputWarningWrp>
          ) : (
            <></>
          )}
        </InputWrp>
        <LoginButtonStyled disabled={isSubmitting} type="submit">
          Login
        </LoginButtonStyled>
        <StyledLink to={"/register"}>Register</StyledLink>
      </FormStyled>
    </LoginStyled>
  );
};

export default LoginForm;
