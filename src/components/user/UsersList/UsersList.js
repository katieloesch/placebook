import React from 'react';

import { Card, UserItem } from '../../../components';
import './UsersList.scss';

const UsersList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className='users-list center'>
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  } else {
    return (
      <ul className='users-list'>
        {items.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            img={user.img}
            name={user.name}
            placeCount={user.places}
          />
        ))}
      </ul>
    );
  }
};

export default UsersList;
