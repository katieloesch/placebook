import React from "react";
import { Link } from "react-router-dom";

import { Avatar, Card } from "../../../shared";
import "./UserItem.scss";

const UserItem = ({ id, name, placeCount, img }) => {
  return (
    <li className="user-item">
      <Card className={"user-item__content"}>
        <Link to={`/${id}/places`}>
          <div className="user-item__img">
            <Avatar img={img} alt={name} />
          </div>
          <div className="user-item__info">
            <h2>{name}</h2>
            <h3>
              {placeCount} {placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
