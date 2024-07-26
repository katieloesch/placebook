import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useForm } from '../../shared/hooks/form-hook';
import { Card, FormBtn, FormInput } from '../../shared';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import './PlaceForm.scss';

const DUMMY_PLACES = [
  {
    id: 'p0',
    title: 'Camden Head',
    description: 'best hunting ground for reindeer enthusiasts',
    imgUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRh0g9I_ZYibJtTuldCxDJBGB0r7-TiU2EeA&s',
    address: '100 Camden High St, London NW1 0LU',
    coordinates: {
      lat: 51.536388,
      lng: -0.140556,
    },
    creator: 'u0',
  },
  {
    id: 'p1',
    title: 'Camden Head',
    description: 'best hunting ground for reindeer enthusiasts',
    imgUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRh0g9I_ZYibJtTuldCxDJBGB0r7-TiU2EeA&s',
    address: '100 Camden High St, London NW1 0LU',
    coordinates: {
      lat: 51.536388,
      lng: -0.140556,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: 'u0',
  },
  {
    id: 'p3',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: 'u1',
  },
];

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const placeId = params.placeId;

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

  const placeToUpdate = DUMMY_PLACES.find((place) => place.id === placeId);

  useEffect(() => {
    if (placeToUpdate) {
      setFormData(
        {
          title: {
            value: placeToUpdate.title,
            isValid: true,
          },
          description: {
            value: placeToUpdate.description,
            isValid: true,
          },
        },
        true
      );
    }

    setIsLoading(false);
  }, [setFormData, placeToUpdate]);

  const submitUpdateForm = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };

  if (!placeToUpdate) {
    return (
      <div className='center'>
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className='center'>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
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
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <FormInput
        id='description'
        element='textarea'
        type='text'
        label='Description'
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorMsg='Please enter a valid description (min 5 characters).'
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <FormBtn type='submit' disabled={!formState.isValid}>
        update Place
      </FormBtn>
    </form>
  );
};

export default UpdatePlace;
