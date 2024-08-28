import React, { useContext, useState } from 'react';

import {
  Card,
  ErrorModal,
  FormBtn,
  FormInput,
  LoadingSpinner,
} from '../../../components';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../../components/shared/util/validators';
import { useForm } from '../../../components/shared/hooks/form-hook';
import { AuthContext } from '../../../components/shared/context/authContext';
import { BASE_URL } from '../../../components/shared/util/urls';
import './Auth.scss';

const Auth = () => {
  const auth = useContext(AuthContext);

  const [userRegistered, setUserRegistered] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

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

  const authSubmitHandler = async (e) => {
    e.preventDefault();

    if (userRegistered) {
    } else {
      try {
        setIsLoading(true);
        const response = await fetch(BASE_URL + '/users/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formState.inputs.name.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          // a response is sent back but there is an error
          throw new Error(data.message);
        }

        console.log(data);

        setIsLoading(false);
        auth.login();
      } catch (error) {
        console.log(error);

        setIsLoading(false);
        setError(error.message || 'Something went wrong, please try again.');
      }
    }
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Card className='authentication'>
        {isLoading && <LoadingSpinner asOverlay />}
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
    </React.Fragment>
  );
};

export default Auth;
