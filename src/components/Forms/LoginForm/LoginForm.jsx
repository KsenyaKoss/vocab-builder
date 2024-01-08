import { useFormik } from 'formik'
import React from 'react'
import { NavLink } from 'react-router-dom';

const LoginForm = () => {

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
    <div>
      <h1>Login</h1>
      <p>Please enter your login details to continue using our service:</p>
      <form action="">
        <input type="email" placeholder='Email' />
        <input type="password"  placeholder='Password'/>
        <NavLink>Register</NavLink>
      </form>
    </div>
  )
}

export default LoginForm
