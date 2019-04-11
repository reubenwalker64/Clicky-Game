import React from "react";
import "./GameWrapper.css";

function GameWrapper(props) {
  return <div className="game-wrapper">{props.children}</div>;
}

export default GameWrapper;
