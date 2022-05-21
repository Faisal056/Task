import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import TextInput from "../../Shared/Input/Input";
import PasswordInput from "../../Shared/Input/Password";
import { Col, Row } from "antd";
import { doSignIn } from "../../store/actions/user.actions";
const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogIn = (values) => {
    dispatch(doSignIn(values, navigate));
    // console.log(values);
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen form-bg">
        <div className="w-full xl:w-1/3 md:w-2/5 bg-gray-200 items-center">
          <div className="text-center text-black py-2">
            <h2 className="text-2xl font-bold">LOGIN</h2>
          </div>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => handleLogIn(values)}
          >
            <Form>
              <div className="px-12 w-full mb-2 flex justify-center">
                <Row gutter={50} className="pb-4">
                  <Col span={24} className="pb-2">
                    <TextInput
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="Enter Email"
                    />
                  </Col>
                  <Col span={24}>
                    <div className="flex justify-end">
                      <p className="text-red-600 text-sm text-opacity-100  hover:text-blue-600 -mb-4">
                        Forgot Password?
                      </p>
                    </div>
                    <PasswordInput
                      label="Password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                    />
                  </Col>
                </Row>
              </div>
              <div className="flex justify-center pb-2">
                <button
                  className="bg-red-600 border-2 p-2 px-10 text-white mx-2 mt-2 rounded-xl"
                  type="submit"
                >
                  Login
                </button>
              </div>
              <div className="flex items-center justify-center pb-4">
                <h2 className="pt-2 pr-2">Don’t have an account ?</h2>
                <a
                  href="/signup"
                  className="text-red-600 text-opacity-100 float-right hover:text-blue-600 font-bold pt-2"
                >
                  SignUp
                </a>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};
export default LogIn;
