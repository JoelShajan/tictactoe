import React,{useState} from "react";
import Board from "./components/Board";
import './style/root.scss'
import { wincon } from "./wincalc";
const app=() => {
  const [bdarr,setbd] = useState(Array(9).fill(null));
  const [isXNext,setXNext] = useState(false);
  const win =wincon(bdarr);
  let message= win? `The winner is ${win}` : isXNext? 'The next player is X' :'The next player is O';
  //console.log(win);
  const handleSqClick = (position)=>{
  if(bdarr[position]!=null || win){
    return;
  }
  setbd ((prev) => {
   return prev.map((curr,pos) => {
    
    if (pos===position){
      
      return isXNext? 'X':'O';
    }
    return curr;
   })
    
})
setXNext((prev)=> {return !prev;});
};
  return (
  <div className="app" >
  <h1>TIC TAC TOE</h1>
  <Board handleSqClick={handleSqClick} bdarr={bdarr}/>
  <h3>{message}</h3>
</div>
);
};
  
export default app;
