import React from 'react'

const mystatus = ({win,isXNext,bdarr}) => {
const tieflag=bdarr.every((val)=>val!==null);
console.log(win,tieflag);
  return (
    <h2>
        {win!==null && `The winner is ${win}`}
        {win===null && tieflag===true && 'X and Y are tied!'}
        {win===null && tieflag===false && `The next player is ${isXNext?'X':'O'}`}
        
    </h2>
  )
}
export default mystatus;
//let message= win? `The winner is ${win}` : current.isXNext? 'The next player is X' :'The next player is O';