import React, { useEffect, useState } from 'react';

import { ErrorModal, LoadingSpinner, UsersList } from '../../../components';
import { useHttpClient } from '../../../components/shared/hooks/http-hook';
import { BASE_URL } from '../../../components/shared/util/urls';

const Users = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [fetchedUsers, setFetchedUsers] = useState(null);

  useEffect(() => {
    // can't use async/await directly for useEffect function, need to define separate function

    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(BASE_URL + '/users');

        setFetchedUsers(responseData.users); // returns an array of user objects
      } catch (error) {
        console.log(error); //proper error handling done in custom http-hook
      }
    };
    fetchUsers();
  }, [sendRequest]);

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
