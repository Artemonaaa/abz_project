import { Formik } from "formik";
import * as Yup from "yup";

import Input from "../CustomForm/InputCustom/InputCustom";
import RadioButton from "../CustomForm/RadioButtonCustom/RadioButtonCustom";
import InputFile from "../CustomForm/InputFileCustom/InputFileCustom";
import Button from "../Button/Button";

import "./RegistrationForm.scss";

const phoneRegExp =
  /^((\+[1-9]{3}[ -]?)|(\([0-9]{3}\)[ -]?)|([0-9]{2})[ -]?)*?[0-9]{2}$/;

const checkoutSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid").required("required"),
  workPosition: Yup.string().required("Select Position"),
  file: Yup.string().required("Select File"),
});

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  workPosition: "",
  file: "",
};
const RegistrationForm = () => {
  console.log("Render");

  const handleFormSubmit = (values) => {
    console.log(values);
    window.location.reload();
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={checkoutSchema}
    >
      {({
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form className="registration" noValidate onSubmit={handleSubmit}>
          <div>
            <Input
              label="Your name"
              id="YourName"
              type="text"
              name="name"
              onChange={handleChange} 
              onBlur={handleBlur}
              value={values.name}
            />
            <Input
              type="text"
              name="email"
              label="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <Input
              type="tel"
              name="phoneNumber"
              label="Phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phoneNumber}
            />
          </div>
          <div>
            <p>Select your position</p>
            <RadioButton  value="FrontendDeveloper" label="Frontend developer" name="workPosition" />
            <RadioButton  value="BackenDeveloper" label="Backend developer" name="workPosition" />
            <RadioButton  value="Designer" label="Designer" name="workPosition" />
            <RadioButton  value="workPosition" label="QA" name="workPosition" />
            {errors.workPosition && touched.workPosition ? (<div className="error">{errors.workPosition}</div>) : null}
          </div>
          <div>
            <InputFile name="file"/>
          </div>
          <div className="form-submit">
            <Button type="submit" title={"Sign Up"} />
          </div>
        </form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
