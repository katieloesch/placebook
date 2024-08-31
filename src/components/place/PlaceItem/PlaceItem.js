import React, { useContext, useState } from 'react';

import {
  Card,
  ErrorModal,
  FormBtn,
  LoadingSpinner,
  Map,
  Modal,
} from '../../../components';
import { AuthContext } from '../../shared/context/authContext';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { API_BASE_URL, BASE_URL } from '../../shared/util/urls';
import './PlaceItem.scss';

const PlaceItem = ({
  img,
  title,
  address,
  description,
  id,
  coordinates,
  onDelete,
  creatorId,
}) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const auth = useContext(AuthContext);
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

  const deletePlace = async () => {
    setShowModalDelete(false);

    try {
      const url = `${API_BASE_URL}/places/${id}`;
      await sendRequest(url, 'DELETE', null, {
        // no body required as it is a DELETE request
        Authorization: 'Bearer ' + auth.token,
      });
      onDelete(id);
    } catch (error) {
      console.log(error); //proper error handling done in custom http-hook
    }
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
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
          {isLoading && <LoadingSpinner asOverlay />}
          <div className='place-item__img'>
            <img src={`${BASE_URL}/${img}`} alt={title} />
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
            {auth.userId === creatorId && (
              <FormBtn to={`/places/${id}`}>edit</FormBtn>
            )}
            {auth.userId === creatorId && (
              <FormBtn danger onClick={openModalDelete}>
                delete
              </FormBtn>
            )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
