import React from "react";

import UserItem from "../UserItem/UserItem";
import "./UsersList.scss";

const UsersList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="users-list center">
        <h2>No users found.</h2>
      </div>
    );
  } else {
    return (
      <ul className="users-list">
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
