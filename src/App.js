import React, { useState } from "react";
import AddUser from "./Users/AddUser";
import UserList from "./Users/UserList";

function App() {
  const [userli, setuserli] = useState([]);

  const addUserliHandler = (uName, uAge) => {
    setuserli((prevadduserli) => {
      return [
        ...prevadduserli,
        { name: uName, age: uAge, id: Math.random().toString() }
      ];
    });
  };

  return (
    <div>
      <AddUser addUserli={addUserliHandler} />

      <UserList items={userli} />
    </div>
  );
}

export default App;
