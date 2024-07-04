import React, { useState } from "react";
import { Card, FormBtn, Map, Modal } from "../../../shared";
import "./PlaceItem.scss";

const PlaceItem = ({ img, title, address, description, id, coordinates }) => {
  const [showMap, setShowMap] = useState(false);

  const openMap = () => {
    setShowMap(true);
  };

  const closeMap = () => {
    setShowMap(false);
  };

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMap}
        header={address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<FormBtn onClick={closeMap}>close</FormBtn>}
      >
        <div className="map-container">
          <Map center={coordinates} zoom={16} />
          {/* coordinates format: { lat: -34.397, lng: 150.644 } */}
        </div>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__img">
            <img src={img} alt={title} />
          </div>
          <div className="place-item__info">
            <h2>{title}</h2>
            <h3>{address}</h3>
            <p>{description}</p>
          </div>
          <div className="place-item__actions">
            <FormBtn inverse onClick={openMap}>
              view on map
            </FormBtn>
            <FormBtn to={`/places/${id}`}>edit</FormBtn>
            <FormBtn danger>delete</FormBtn>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
