import React, { useEffect, useReducer } from "react";

import { validate } from "../util/validators";

import "./FormInput.scss";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const FormInput = ({
  id,
  label,
  type,
  element,
  initialValue,
  initialValid,
  placeholder,
  rows,
  errorMsg,
  validators,
  onInput,
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue || "",
    isTouched: false,
    isValid: initialValid || false,
  });

  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (e) => {
    dispatch({ type: "CHANGE", val: e.target.value, validators: validators });
  };

  const focusHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const elementJSX =
    element === "input" ? (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={changeHandler}
        value={inputState.value}
        onBlur={focusHandler}
      />
    ) : (
      <textarea
        id={id}
        placeholder={placeholder}
        rows={rows || 3}
        onChange={changeHandler}
        value={inputState.value}
        onBlur={focusHandler}
      />
    );

  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      }`}
    >
      <label htmlFor={id}>{label}</label>
      {elementJSX}
      {!inputState.isValid && inputState.isTouched && <p>{errorMsg}</p>}
    </div>
  );
};

export default FormInput;
