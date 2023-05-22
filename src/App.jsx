import React,{useState,useEffect} from "react";
import Board from "./components/Board";
import './style/root.scss'
import { wincon } from "./wincalc";
import History from "./components/History";
import  Status from "./components/Status";
import Connection from "./Synkit/Connection";
const app=() => {
  const [history,setHistory] = useState([{bdarr:Array(9).fill(null),isXNext:false}]);
  const [currentval,setcurr]=useState(0);
  const current=history[currentval];
  const {win,winningcomb} =wincon(current.bdarr);
  const [socket1,setSocket1]=useState(null);
  const [turn,setTurn]= useState(1);
  //console.log(winningcomb);
  
  useEffect(()=>{
    console.log("hello world")
    Connection(setSocket1);
},[])

if(socket1) {
try{
  
  socket1.onmessage = (event) => {
    console.log(event.data);
    const pos=JSON.parse(event.data);
    if(pos.restart){
      setcurr(0);
      //  socket1.send(JSON.stringify("hello"));
      setHistory([{bdarr:Array(9).fill(null),isXNext:false}]);
    }
    else{
      handleRecieve(pos.position);
    }
    

}
}
catch(e){
  console.log(e);
}
}


  const handleSqClick = (position)=>{
    if(turn){
      socket1.send(JSON.stringify({"position":position}));
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
setTurn(0)
    }
    
};

const handleRecieve = (position)=>{
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
setTurn(1)
};


const change=(move)=>{
  setcurr(move);
}
const resetter=()=>{
  socket1.send(JSON.stringify({"restart":"yes"}));
   setcurr(0);
  //  socket1.send(JSON.stringify("hello"));
   setHistory([{bdarr:Array(9).fill(null),isXNext:false}]);

}


  return (
  <div className="app" >
  <h1>TIC <span className="text-green">TAC</span> TOE</h1>
  <Status win={win} isXNext={current.isXNext} bdarr={current.bdarr}/>
  <Board handleSqClick={handleSqClick} bdarr={current.bdarr} winning={winningcomb}/>
  <button className={`btn-reset ${win?'active':''}`} type="button" onClick={resetter}>Restart</button>
  <h2>
    Game History
  </h2>
  <History history={history} currentval={currentval} change={change}/>
</div>
);
};
  
export default app;
