import React from "react";
import Button from "./Button";
import Card from "./Card";
import Classes from "./Errormodal.module.css";

const Errormodal = props => {
  return (
    <div>
    <div className={Classes.backdrop} onClick={props.isConfirm}></div>
      <Card cssClass={Classes.modal}>
        <header className={Classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={Classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={Classes.actions}>
          <Button onClick={props.isConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Errormodal;
