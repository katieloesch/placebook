import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from '../../components/shared/hooks/form-hook';
import { useHttpClient } from '../../components/shared/hooks/http-hook';
import { AuthContext } from '../../components/shared/context/authContext';
import {
  ErrorModal,
  FormBtn,
  FormImgUpload,
  FormInput,
  LoadingSpinner,
} from '../../components';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../components/shared/util/validators';
import { API_BASE_URL } from '../../components/shared/util/urls';
import './PlaceForm.scss';

const NewPlace = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
      address: {
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

  const placeSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      // use FormData built-in browser API
      const formData = new FormData();
      formData.append('title', formState.inputs.title.value);
      formData.append('description', formState.inputs.description.value);
      formData.append('address', formState.inputs.address.value);
      formData.append('creator', auth.userId);
      formData.append('image', formState.inputs.image.value);

      await sendRequest(API_BASE_URL + '/places', 'POST', formData, {
        Authorization: 'Bearer ' + auth.token,
      });
      navigate('/');
    } catch (error) {
      console.log(error); //proper error handling done in custom http-hook
    }
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <form className='place-form' onSubmit={placeSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}

        <FormInput
          id='title'
          element='input'
          type='text'
          label='Title'
          validators={[VALIDATOR_REQUIRE()]}
          errorMsg='Please enter a valid title.'
          onInput={inputHandler}
        />

        <FormInput
          id='description'
          element='textarea'
          label='Description'
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorMsg='Please enter a valid description (min 5 characters).'
          onInput={inputHandler}
        />

        <FormInput
          id='address'
          element='input'
          type='text'
          label='Address'
          validators={[VALIDATOR_REQUIRE()]}
          errorMsg='Please enter a valid address.'
          onInput={inputHandler}
        />

        <FormImgUpload
          id='image'
          onInput={inputHandler}
          errorText='Please provide an image.'
        />

        <FormBtn type='submit' disabled={!formState.isValid}>
          add place
        </FormBtn>
      </form>
    </React.Fragment>
  );
};

export default NewPlace;
