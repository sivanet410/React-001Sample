import React from "react";
import Card from "../UI/Card";
import Classes from "./UserList.module.css";

const UserList = props => {
  return (
    <Card cssClass={Classes.users}>
      <ul>
        {props.items.map(user => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
