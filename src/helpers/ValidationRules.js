import * as Yup from "yup";

const nameValid = (value) => /^[a-z ,.'-]+$/i.test(value);

const SchemaConfig = {
  first_name: Yup.string()
    .test("Name format", "First name format is not valid", nameValid)
    .required("Required"),
  last_name: Yup.string()
    .test("Name format", "Last name format is not valid", nameValid)
    .required("Required"),
  email: Yup.string().required("Required").email("Wrong email format"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password must be at least 8 characters"),
  password2: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
};

const ValidationRules = (initValues) => {
  const filtered = Object.keys(SchemaConfig)
    .filter((key) => Object.keys(initValues).includes(key))
    .reduce((obj, key) => {
      obj[key] = SchemaConfig[key];
      return obj;
    }, {});
  return Yup.object().shape(filtered);
};
export default ValidationRules;
