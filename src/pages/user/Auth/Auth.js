import React from 'react';

import { Card, FormBtn, FormInput } from '../../../components';
import { useForm } from '../../../components/shared/hooks/form-hook';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from '../../../components/shared/util/validators';
import './Auth.scss';

const Auth = () => {
  const [formState, inputHandler] = useForm(
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

  const authSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <Card className='authentication'>
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
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
          Login
        </FormBtn>
      </form>
    </Card>
  );
};

export default Auth;
