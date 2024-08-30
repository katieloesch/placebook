import React from 'react';
import { Link } from 'react-router-dom';

import { Avatar, Card } from '../../../components';
import { BASE_URL } from '../../shared/util/urls';
import './UserItem.scss';

const UserItem = ({ id, name, placeCount, img }) => {
  return (
    <li className='user-item'>
      <Card className={'user-item__content'}>
        <Link to={`/${id}/places`}>
          <div className='user-item__img'>
            <Avatar img={`${BASE_URL}/${img}`} alt={name} />
          </div>
          <div className='user-item__info'>
            <h2>{name}</h2>
            <h3>
              {placeCount} {placeCount === 1 ? 'Place' : 'Places'}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
