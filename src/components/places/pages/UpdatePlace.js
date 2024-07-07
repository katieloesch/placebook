import React from "react";
import "./UpdatePlace.scss";
import { useParams } from "react-router-dom";
import { FormBtn, FormInput } from "../../shared";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

const DUMMY_PLACES = [
  {
    id: "p0",
    title: "Camden Head",
    description: "best hunting ground for reindeer enthusiasts",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRh0g9I_ZYibJtTuldCxDJBGB0r7-TiU2EeA&s",
    address: "100 Camden High St, London NW1 0LU",
    coordinates: {
      lat: 51.536388,
      lng: -0.140556,
    },
    creator: "u0",
  },
  {
    id: "p1",
    title: "Camden Head",
    description: "best hunting ground for reindeer enthusiasts",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRh0g9I_ZYibJtTuldCxDJBGB0r7-TiU2EeA&s",
    address: "100 Camden High St, London NW1 0LU",
    coordinates: {
      lat: 51.536388,
      lng: -0.140556,
    },
    creator: "u1",
  },
];

const UpdatePlace = () => {
  const params = useParams();
  const placeId = params.placeId;

  const placeToUpdate = DUMMY_PLACES.find((place) => place.id === placeId);

  if (!placeToUpdate) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>;
      </div>
    );
  }

  return (
    <form>
      <h2>Update Place</h2>;
      <FormInput
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE]}
        errorMsg="Please enter a valid title."
        onInput={() => {}}
        value={placeToUpdate.title}
        valid={true}
      />
      <FormInput
        id="description"
        element="textarea"
        type="text"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorMsg="Please enter a valid description (at least 5 characters)."
        onInput={() => {}}
        value={placeToUpdate.description}
        valid={true}
      />
      <FormBtn type="submit" disabled={true}>
        update Place
      </FormBtn>
    </form>
  );
};

export default UpdatePlace;
