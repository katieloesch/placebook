import React, { useState } from 'react';

import { Card, FormBtn, Map, Modal } from '../../../components';
import './PlaceItem.scss';

const PlaceItem = ({ img, title, address, description, id, coordinates }) => {
  const [showMap, setShowMap] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  const openMap = () => {
    setShowMap(true);
  };

  const closeMap = () => {
    setShowMap(false);
  };

  const openModalDelete = () => {
    setShowModalDelete(true);
  };

  const cancelDelete = () => {
    setShowModalDelete(false);
  };

  const deletePlace = () => {
    setShowModalDelete(false);
    console.log('request to server to delete item...');
  };

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMap}
        header={address}
        contentClass='place-item__modal-content'
        footerClass='place-item__modal-actions'
        footer={<FormBtn onClick={closeMap}>close</FormBtn>}
      >
        <div className='map-container'>
          <Map center={coordinates} zoom={15} />
          {/* coordinates format: { lat: -34.397, lng: 150.644 } */}
        </div>
      </Modal>

      <Modal
        show={showModalDelete}
        header='Confirm Delete'
        onCancel={cancelDelete}
        footerClass='place-item__modal-actions'
        footer={
          <React.Fragment>
            <FormBtn inverse onClick={cancelDelete}>
              cancel
            </FormBtn>
            <FormBtn danger onClick={deletePlace}>
              delete
            </FormBtn>
          </React.Fragment>
        }
      >
        <p>
          Are you sure you want to delete this place? Please note this action
          can't be undone.
        </p>
      </Modal>

      <li className='place-item'>
        <Card className='place-item__content'>
          <div className='place-item__img'>
            <img src={img} alt={title} />
          </div>
          <div className='place-item__info'>
            <h2>{title}</h2>
            <h3>{address}</h3>
            <p>{description}</p>
          </div>
          <div className='place-item__actions'>
            <FormBtn inverse onClick={openMap}>
              view on map
            </FormBtn>
            <FormBtn to={`/places/${id}`}>edit</FormBtn>
            <FormBtn danger onClick={openModalDelete}>
              delete
            </FormBtn>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
