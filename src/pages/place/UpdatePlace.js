import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useForm } from '../../components/shared/hooks/form-hook';
import {
  Card,
  ErrorModal,
  FormBtn,
  FormInput,
  LoadingSpinner,
} from '../../components';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../components/shared/util/validators';
import { useHttpClient } from '../../components/shared/hooks/http-hook';
import { AuthContext } from '../../components/shared/context/authContext';
import { API_BASE_URL } from '../../components/shared/util/urls';
import './PlaceForm.scss';

const UpdatePlace = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [fetchedPlace, setFetchedPlace] = useState(null);
  const params = useParams();
  const placeId = params.placeId;
  const navigate = useNavigate();

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    // can't use async/await directly for useEffect function, need to define separate function

    const fetchPlace = async () => {
      try {
        const url = `${API_BASE_URL}/places/${placeId}`;
        const responseData = await sendRequest(url);
        setFetchedPlace(responseData.place);

        setFormData(
          {
            title: {
              value: responseData.place.title,
              isValid: true,
            },
            description: {
              value: responseData.place.description,
              isValid: true,
            },
          },
          true
        );
      } catch (error) {
        console.log(error); //proper error handling done in custom http-hook
      }
    };
    fetchPlace();
  }, [sendRequest, placeId, setFormData]);

  const submitUpdateForm = async (e) => {
    e.preventDefault();
    try {
      const url = `${API_BASE_URL}/places/${placeId}`;

      await sendRequest(
        url,
        'PATCH',
        JSON.stringify({
          title: formState.inputs.title.value,
          description: formState.inputs.description.value,
        }),
        {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + auth.token,
        }
      );

      navigate(`/${auth.userId}/places`);
    } catch (error) {
      console.log(error); //proper error handling done in custom http-hook
    }
  };

  if (isLoading) {
    return (
      <div className='center'>
        <LoadingSpinner />
      </div>
    );
  }
  if (!fetchedPlace && !error) {
    return (
      <div className='center'>
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {!isLoading && fetchedPlace && (
        <form className='place-form' onSubmit={submitUpdateForm}>
          <h2>Update Place</h2>
          <FormInput
            id='title'
            element='input'
            type='text'
            label='Title'
            validators={[VALIDATOR_REQUIRE()]}
            errorMsg='Please enter a valid title.'
            onInput={inputHandler}
            initialValue={fetchedPlace.title}
            initialValid={true}
          />
          <FormInput
            id='description'
            element='textarea'
            type='text'
            label='Description'
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorMsg='Please enter a valid description (min 5 characters).'
            onInput={inputHandler}
            initialValue={fetchedPlace.description}
            initialValid={true}
          />
          <FormBtn type='submit' disabled={!formState.isValid}>
            update Place
          </FormBtn>
        </form>
      )}
    </React.Fragment>
  );
};

export default UpdatePlace;
