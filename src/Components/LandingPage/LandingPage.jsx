import React from "react";
import { Button } from "antd";

const LandingPage = () => {
  return (
    <div className="bg-blue-200 bg-landing flex justify-center items-center h-screen">
      <div className="">
        <div>
          <h1 className="flex justify-center items-center text-xl font-bold text-3xl text-black py-4 -mt-8 ">
            Welcome to Task App
          </h1>
        </div>
        <div>
          <Button
            className="bg-red-600 text-white md:text-sm text-sm rounded pb-2 mx-12 px-4"
            href="/signup"
            size="large"
          >
            Signup
          </Button>
          <Button
            className="bg-red-600 text-white md:text-sm text-sm rounded pb-2 mx-12 px-6"
            href="/login"
            size="large"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
