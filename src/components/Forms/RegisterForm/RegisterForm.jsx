import { useFormik } from "formik";
import {
  FormStyled,
  IconWrp,
  InputStyled,
  InputWarningWrp,
  InputWrp,
  PStyled,
  RegisterButtonStyled,
  RegisterStyled,
  StyledError,
  StyledLink,
  StyledSuccess,
  TitleStyled,
} from "./RegisterFormStyled";
import Icon from "../../Icons/Icon";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../../redux/Auth/authOperations";
import { yupSchemaRegister } from "./yupValidationSchema";

const RegisterForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch = useDispatch();
  const togglePassword = () => setPasswordVisible(!passwordVisible);

  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: yupSchemaRegister,
    onSubmit: (values, actions) => {
      console.log(values);
      actions.resetForm();
      dispatch(registerThunk(values));
    },
  });
  return (
    <RegisterStyled>
      <div>
        <TitleStyled>Register</TitleStyled>
        <PStyled>
          To start using our services, please fill out the registration form
          below. All fields are mandatory:
        </PStyled>
      </div>
      <FormStyled onSubmit={handleSubmit}>
      <InputWrp>
      <InputStyled
          type="text"
          placeholder="Name"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            touched.name && !errors.name
              ? "valid"
              : errors.name && touched.name
              ? "invalid"
              : ""
          }
        />
        {touched.name && errors.name ? (
          <InputWarningWrp>
            <Icon id={"warning"} />
            <StyledError>{errors.name}</StyledError>
          </InputWarningWrp>
        ) : touched.name && !errors.name ? (
          <InputWarningWrp>
            <Icon id={"success"} />
            <StyledSuccess>Success name</StyledSuccess>
          </InputWarningWrp>
        ) : (
          <></>
        )}
      </InputWrp>
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
        <RegisterButtonStyled disabled={isSubmitting} type="submit">
          Register
        </RegisterButtonStyled>
        <StyledLink to="/login">Login</StyledLink>
      </FormStyled>
    </RegisterStyled>
  );
};

export default RegisterForm;
