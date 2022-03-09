import React from "react";
import { Items } from "../style/tictac";
function TicTac(props) {
  
  return (
    <Items onClick={() => props.onClick(props.index)}>
      {props.state}
    </Items>
  );
}
export default TicTac;