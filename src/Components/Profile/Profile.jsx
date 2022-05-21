import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import TextInput from "../../Shared/Input/Input";
import { Col, Row, Avatar, Button } from "antd";
import { doLogOut, doUpdate } from "../../store/actions/user.actions";
const Profile = () => {
  const { user } = useSelector((state) => state.authUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleProfile = (values) => {
    console.log(values);
    dispatch(doUpdate(values));
  };
  const handleLogout = () => {
    dispatch(doLogOut(user.email, navigate));
    // console.log(user.email)
  };
  return (
    <div className="bg-gray-200 h-screen ">
      <div className="bg-blue-400 w-full h-12 pt-1">
        <Button
          className="bg-red-600 text-white text-sm rounded pb-2 float-right mr-4"
          size="large"
          onClick={handleLogout}
        >
          LogOut
        </Button>
      </div>
      <div className="flex items-center justify-center mt-32">
        <div className="w-full xl:w-1/3 md:w-2/5 items-center">
          <div className="text-center text-black py-2">
            <h2 className="text-2xl font-bold ">Profile Page</h2>
          </div>
          <div className="w-full justify-center pt-4 py-2">
            <Avatar
              size={{ xs: 64, sm: 64, md: 40, lg: 64, xl: 80, xxl: 100 }}
              className="text-black"
            >
              {user.name.charAt(0)}
            </Avatar>
          </div>

          <Formik
            initialValues={{
              name: user.name,
              email: user.email,
            }}
            onSubmit={(values) => handleProfile(values)}
          >
            <Form>
              <div className="px-12 mb-2 w-full flex justify-center">
                <Row gutter={50} className="pb-4 w-full">
                  <Col span={24} className="pb-2">
                    <TextInput
                      label="Name"
                      name="name"
                      type="text"
                      placeholder="Enter Name"
                    />
                  </Col>
                </Row>
              </div>
              <div className="flex justify-center pb-2">
                <button
                  className="bg-red-600 border-2 p-2 px-10 text-white mx-2 mt-2 rounded-xl"
                  type="submit"
                >
                  Update
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default Profile;
