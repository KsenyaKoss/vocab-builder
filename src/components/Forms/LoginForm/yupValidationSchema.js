import * as yup from "yup";
import { regExMail, regExPass } from "../../../constants/regEx";


export const yupSchemaLogin = yup.object().shape({
  email: yup.string().matches(regExMail, {message: "Please enter a valid email"}).required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(
      regExPass,
      {message: "Please create a stronger password, using latin letters & numbers"}
    )
    .required("Required"),
});
