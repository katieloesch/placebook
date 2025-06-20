import React, { useContext, useState } from 'react';

import {
  Card,
  ErrorModal,
  FormBtn,
  FormInput,
  FormImgUpload,
  LoadingSpinner,
} from '../../../components';

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../../components/shared/util/validators';
import { useForm } from '../../../components/shared/hooks/form-hook';
import { useHttpClient } from '../../../components/shared/hooks/http-hook';
import { AuthContext } from '../../../components/shared/context/authContext';
// import { API_BASE_URL } from '../../../components/shared/util/urls';
import './Auth.scss';

const Auth = () => {
  const auth = useContext(AuthContext);

  const [userRegistered, setUserRegistered] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

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
        { ...formState.inputs, name: undefined, image: undefined },
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
          image: {
            value: null,
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
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_API_BASE_URL + '/users/login',
          'POST',
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
          {
            'Content-Type': 'application/json',
          }
        );
        auth.login(responseData.userId, responseData.token);
      } catch (error) {
        console.log(error); //proper error handling done in custom http-hook
      }
    } else {
      try {
        // use FormData built-in browser API
        const formData = new FormData();
        formData.append('email', formState.inputs.email.value);
        formData.append('name', formState.inputs.name.value);
        formData.append('password', formState.inputs.password.value);
        formData.append('image', formState.inputs.image.value);
        const responseData = await sendRequest(
          process.env.REACT_APP_API_BASE_URL + '/users/signup',
          'POST',
          formData
        );

        auth.login(responseData.userId, responseData.token);
      } catch (error) {
        console.log(error); //proper error handling done in custom http-hook
      }
    }
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Card className='authentication'>
        {isLoading && <LoadingSpinner asOverlay />}
        <h2>{userRegistered ? 'Login' : 'Sign Up'}</h2>
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
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorMsg='Please enter a valid email password (min 6 characters).'
            onInput={inputHandler}
          />

          {!userRegistered && (
            <FormImgUpload
              center
              id='image'
              onInput={inputHandler}
              errorText='Please provide an image.'
            />
          )}

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
