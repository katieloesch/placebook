import React from "react";
import UsersList from "../components/UsersList/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u0",
      name: "Sara",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRePiA58k0fr1ctJENADPDrYvsENw6hmaPK5g&s",
      places: 7,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
