import React from "react";
import Board from "./components/Board";
import './style/root.scss'
const app=() => {
  return (
  <div className="app" >
  <h1>TIC TAC TOE</h1>
  <Board/>
</div>
);
};
  
export default app;
