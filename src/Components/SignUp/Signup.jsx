import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "../../Shared/Input/Input";
import PasswordInput from "../../Shared/Input/Password";
import { Col, Row, notification } from "antd";
import { doSignUp } from "../../store/actions/user.actions";

const validateSignup = Yup.object({
  password: Yup.string()
    .max(15, "Must be 15 characters or less")
    .min(5, "Must be 5 characters or more")
    // .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
    .required("Required"),
  name: Yup.string()
    .max(30, "Must be 30 characters or less")
    .min(5, "Must be 5 characters or more")
    .required("Required"),
});
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignup = (values) => {
    if (values.password === values.confirmPassword) {
      dispatch(doSignUp(values, navigate));
      console.log(values);
    } else {
      notification.error({
        placement: "topRight",
        message: "Password and Confirm Password do not match",
        duration: 2,
      });
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen signup-bg">
        <div className="w-full xl:w-1/3 md:w-2/5 bg-white items-center">
          <div className="text-center text-black py-2">
            <h2 className="text-2xl font-bold">SignUp</h2>
          </div>

          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validateSignup}
            onSubmit={(values) => handleSignup(values)}
          >
            <Form>
              <div className="px-12 w-full mb-2 flex justify-center">
                <Row gutter={50} className="pb-4">
                  <Col span={24} className="pb-2">
                    <TextInput
                      label="Name"
                      name="name"
                      type="text"
                      placeholder="Enter Name"
                    />
                  </Col>
                  <Col span={24} className="pb-2">
                    <TextInput
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="Enter Email"
                    />
                  </Col>
                  <Col span={24} className="pb-2">
                    <PasswordInput
                      label="Password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                    />
                  </Col>
                  <Col span={24}>
                    <PasswordInput
                      label="Confirm Password"
                      name="confirmPassword"
                      type="password"
                      placeholder="Re-Enter your password"
                    />
                  </Col>
                </Row>
              </div>
              <div className="flex justify-center pb-2">
                <button
                  className="bg-red-600 border-2 p-2 px-10 text-white mx-2 mt-2 rounded-xl"
                  type="submit"
                >
                  SignUp
                </button>
              </div>
              <div className="flex items-center justify-center pb-4">
                <h2 className="pt-2 pr-2">Already have an account ?</h2>
                <a
                  href="/login"
                  className="text-red-600 text-opacity-100 float-right hover:text-blue-600 font-bold pt-2"
                >
                  Login
                </a>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};
export default SignUp;
