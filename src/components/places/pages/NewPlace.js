import React from "react";

import { useForm } from "../../shared/hooks/form-hook";
import { FormInput, FormBtn } from "../../shared";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import "./PlaceForm.scss";

const NewPlace = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const placeSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <FormInput
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorMsg="Please enter a valid title."
        onInput={inputHandler}
      />
      <FormInput
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorMsg="Please enter a valid description (at least 5 characters)."
        onInput={inputHandler}
      />
      <FormInput
        id="address"
        element="input"
        type="text"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorMsg="Please enter a valid address."
        onInput={inputHandler}
      />
      <FormBtn type="submit" disabled={!formState.isValid}>
        add place
      </FormBtn>
    </form>
  );
};

export default NewPlace;
