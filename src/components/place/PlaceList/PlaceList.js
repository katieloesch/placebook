import React from 'react';

import { Card, FormBtn } from '../../../components';
import PlaceItem from '../PlaceItem/PlaceItem';
import './PlaceList.scss';

const PlaceList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className='place-list center'>
        <Card>
          <h2>No places found.</h2>
          <FormBtn to='/places/new'>add new place</FormBtn>
        </Card>
      </div>
    );
  }

  return (
    <ul className='place-list'>
      {items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          img={place.image}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
