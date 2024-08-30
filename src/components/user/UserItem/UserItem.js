import React from 'react';
import { Link } from 'react-router-dom';

import { Avatar, Card } from '../../../components';
// import { LOCALHOST } from '../../shared/util/urls';
import './UserItem.scss';

const UserItem = ({ id, name, placeCount, img }) => {
  console.log(img);
  return (
    <li className='user-item'>
      <Card className={'user-item__content'}>
        <Link to={`/${id}/places`}>
          <div className='user-item__img'>
            <Avatar img={`http://localhost:5100/${img}`} alt={name} />
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
