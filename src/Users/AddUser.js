import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Errormodal from "../UI/Errormodal";
import Classes from "./AddUser.module.css";

const AddUser = props => {
  const [enteredUsername, setenteredUsername] = useState("");
  const [enteredAge, setenteredAge] = useState("");
  const [error, seterror] = useState();

  const addUserHandler = event => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      seterror({
        title: "Invalid input",
        message: "please enter a valid name and age (non empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      seterror({
        title: "Invalid age",
        message: "please enter a valid age (> 0)",
      });
      return;
    }
    // console.log(enteredUsername, enteredAge);

    props.addUserli(enteredUsername, enteredAge);

    setenteredUsername("");
    setenteredAge("");
  };

  const usernamechangeHandler = event => {
    setenteredUsername(event.target.value);
  };

  const agechangeHandler = event => {
    setenteredAge(event.target.value);
  };

  const errorhandler = () =>{
    seterror(null);
  };

  return (
    <div>
     {error &&  <Errormodal title={error.title} message={error.message} isConfirm={errorhandler} /> }
      <Card cssClass={Classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            id="username"
            value={enteredUsername}
            onChange={usernamechangeHandler}
          />

          <label htmlFor="age">Age (years)</label>
          <input
            type="text"
            id="age"
            value={enteredAge}
            onChange={agechangeHandler}
          />

          <Button type="submit">AddUser</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
