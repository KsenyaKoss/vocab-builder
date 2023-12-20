import React from 'react'
import RegisterForm from '../../components/Forms/RegisterForm/RegisterForm'
import { NavLink } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div>
      <RegisterForm/>
      <NavLink to="login">Login</NavLink>
    </div>
  )
}

export default RegisterPage
