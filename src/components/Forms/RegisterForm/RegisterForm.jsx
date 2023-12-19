import { useFormik } from "formik"


const RegisterForm = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        onSubmit: values => {
            console.log(values);
            formik.resetForm;
        }
    })
  return (
    <div>
      <h1>Register</h1>
      <p>To start using our services, please fill out the registration form below. All fields are mandatory:</p>
      <form onSubmit={formik.onSubmit}>
        <input type="text" />
        <input type="email" />
        <input type="password" />



      </form>
    </div>
  )
}

export default RegisterForm
