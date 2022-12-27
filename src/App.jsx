import React,{useState} from "react";
import Board from "./components/Board";
import './style/root.scss'
import { wincon } from "./wincalc";
import History from "./components/History";
import  Status from "./components/Status";
const app=() => {
  const [history,setHistory] = useState([{bdarr:Array(9).fill(null),isXNext:false}]);
  const [currentval,setcurr]=useState(0);
  const current=history[currentval];
  const win =wincon(current.bdarr);
  
  const handleSqClick = (position)=>{
  if(current.bdarr[position]!=null || win){
    return;
  }
  setHistory ((prev) => {
    const last=prev[prev.length-1];
   const temp= last.bdarr.map((curr,pos) => {
    
    if (pos===position){
      
      return current.isXNext? 'X':'O';
    }
    return curr;
   });
    return prev.concat({bdarr:temp,isXNext:!current.isXNext})
})
setcurr((prev)=>{return prev+1})
};
const change=(move)=>{
  setcurr(move);
}
  return (
  <div className="app" >
  <h1>TIC TAC TOE</h1>
  <Status win={win} isXNext={current.isXNext} bdarr={current.bdarr}/>
  <Board handleSqClick={handleSqClick} bdarr={current.bdarr}/>
  <History history={history} currentval={currentval} change={change}/>
</div>
);
};
  
export default app;
