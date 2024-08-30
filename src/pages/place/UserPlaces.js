import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ErrorModal, LoadingSpinner, PlaceList } from '../../components';
import { useHttpClient } from '../../components/shared/hooks/http-hook';
import { API_BASE_URL } from '../../components/shared/util/urls';

const UserPlaces = () => {
  const [fetchedPlaces, setFetchedPlaces] = useState(null);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const params = useParams();
  const userId = params.userId;

  useEffect(() => {
    // can't use async/await directly for useEffect function, need to define separate function

    const fetchPlaces = async () => {
      try {
        const url = `${API_BASE_URL}/places/user/${userId}`;

        const responseData = await sendRequest(url);
        setFetchedPlaces(responseData.places);
      } catch (error) {
        console.log(error); //proper error handling done in custom http-hook
      }
    };

    fetchPlaces();
  }, [sendRequest, userId]);

  const updatePlacesOnDelete = (deletedPlaceId) => {
    setFetchedPlaces((prevPlaces) =>
      prevPlaces.filter((place) => place.id !== deletedPlaceId)
    );
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className='center'>
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && fetchedPlaces && (
        <PlaceList items={fetchedPlaces} onDeletePlace={updatePlacesOnDelete} />
      )}
    </React.Fragment>
  );
};

export default UserPlaces;
