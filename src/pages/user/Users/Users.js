import React, { useEffect, useState } from 'react';

import { ErrorModal, LoadingSpinner, UsersList } from '../../../components';
import { BASE_URL } from '../../../components/shared/util/urls';

const Users = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetchedUsers, setFetchedUsers] = useState(null);

  useEffect(() => {
    // can't use async/await directly for useEffect function, need to define separate function

    const sendRequest = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(BASE_URL + '/users');
        const data = await response.json();

        if (!response.ok) {
          // a response is returned but there is an error
          throw new Error(data.message);
        }

        setFetchedUsers(data.users); // returns an array of user objects
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };
    sendRequest();
  }, []);

  const clearError = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className='center'>
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && fetchedUsers && <UsersList items={fetchedUsers} />}
    </React.Fragment>
  );
};

export default Users;
