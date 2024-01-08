import { useFormik } from 'formik'
import { useState } from 'react'
import Icon from '../../Icons/Icon';
import { FormStyled, IconWrp, InputPasswordWrp, InputStyled, LoginButtonStyled, LoginStyled, PStyled, StyledLink, TitleStyled } from './LoginFormStyled';

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePassword = () => setPasswordVisible(!passwordVisible);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  })
  return (
    <LoginStyled>
      <TitleStyled>Login</TitleStyled>
      <PStyled>Please enter your login details to continue using our service:</PStyled>
      <FormStyled onSubmit={formik.onSubmit}>
        <InputStyled type="email" placeholder='Email' />
        <InputPasswordWrp>
        <InputStyled type={passwordVisible? "text" : "password"}   placeholder='Password'/>
         <IconWrp onClick={togglePassword}>
          {passwordVisible? <Icon id={"eye-off"}/> : <Icon id={"eye"}/>}
         </IconWrp>
        </InputPasswordWrp>
        <LoginButtonStyled>Login</LoginButtonStyled>
        <StyledLink to={"/register"}>Register</StyledLink>
      </FormStyled>
    </LoginStyled>
  )
}

export default LoginForm
