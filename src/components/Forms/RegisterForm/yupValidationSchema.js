import * as yup from "yup";

const regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const yupSchemaRegister = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(regEx, {
      message:
        "Please create a stronger password, using latin letters & numbers",
    })
    .required("Required"),
});
