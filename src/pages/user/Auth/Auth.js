import React, { useContext, useState } from 'react';

import { Card, FormBtn, FormInput } from '../../../components';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../../components/shared/util/validators';
import { useForm } from '../../../components/shared/hooks/form-hook';
import { AuthContext } from '../../../components/shared/context/authContext';
import './Auth.scss';

const Auth = () => {
  const auth = useContext(AuthContext);

  const [userRegistered, setUserRegistered] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const switchAuthMode = () => {
    if (!userRegistered) {
      setFormData(
        { ...formState.inputs, name: undefined },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false,
          },
        },
        false
      );
    }
    setUserRegistered((prevMode) => !prevMode);
  };

  const authSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
    auth.login();
  };

  return (
    <Card className='authentication'>
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!userRegistered && (
          <FormInput
            element='input'
            id='name'
            label='Name'
            validators={[VALIDATOR_REQUIRE()]}
            errorMsg='Please enter a name.'
            onInput={inputHandler}
          />
        )}
        <FormInput
          element='input'
          id='email'
          type='email'
          label='email'
          validators={[VALIDATOR_EMAIL()]}
          errorMsg='Please enter a valid email address.'
          onInput={inputHandler}
        />

        <FormInput
          element='input'
          id='password'
          type='password'
          label='password'
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorMsg='Please enter a valid email password (min 5 characters).'
          onInput={inputHandler}
        />

        <FormBtn type='submit' disabled={!formState.isValid}>
          {userRegistered ? 'Login' : 'Sign Up'}
        </FormBtn>
      </form>

      <FormBtn inverse onClick={switchAuthMode}>
        {userRegistered
          ? "Don't have an account? Sign Up!"
          : 'Already have an account? Log in!'}
      </FormBtn>
    </Card>
  );
};

export default Auth;
