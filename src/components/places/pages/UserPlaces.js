import React from "react";
import PlaceList from "../components/PlaceList/PlaceList";
import { useParams } from "react-router-dom";

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

const UserPlaces = () => {
  const params = useParams();

  const filteredPlaces = DUMMY_PLACES.filter(
    (place) => place.creator === params.userId
  );

  return <PlaceList items={filteredPlaces} />;
};

export default UserPlaces;
