import React, { useState } from "react";
import PropTypes from "prop-types";
import { useField } from "formik";

import { Input } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

const PasswordInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <>
      <label htmlFor={props.name} className="font-bold flex">
        {label}
      </label>
      <Input
        {...field}
        {...props}
        type={passwordShown ? "text" : "password"}
        className=" leading-8 text-input mt-2"
        suffix={
          passwordShown ? (
            <EyeOutlined onClick={togglePassword} />
          ) : (
            <EyeInvisibleOutlined onClick={togglePassword} />
          )
        }
      />

      {meta.touched && meta.error ? (
        <div className="text-red-400">{meta.error}</div>
      ) : null}
    </>
  );
};

PasswordInput.defaultProps = {
  label: "label",
};

PasswordInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default PasswordInput;
