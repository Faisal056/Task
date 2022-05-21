import React from "react";
import PropTypes from "prop-types";
import { useField } from "formik";

import { Input } from "antd";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name} className="font-bold flex">
        {label}
      </label>
      <Input {...field} {...props} className=" leading-8 text-input mt-2" />
      {meta.touched && meta.error ? (
        <div className="text-red-400">{meta.error}</div>
      ) : null}
    </>
  );
};

TextInput.defaultProps = {
  label: "label",
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default TextInput;
