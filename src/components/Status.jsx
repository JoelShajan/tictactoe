import React from 'react'

const mystatus = ({win,isXNext,bdarr}) => {
const tieflag=bdarr.every((val)=>val!==null);
// console.log(win,tieflag);
  return (
    <div className='status-message'>
        {win!==null && 
        <>
        The winner is <span className={win==='X'?'text-green':'text-orange'}>{win} </span>
        </>
        }
        {win===null && tieflag===true && 
        <>
        <span className='text-green'>X</span> and <span className='text-orange'>Y</span> are tied!
        </>
        }
        {win===null && tieflag===false && 
        <>
        The next player is <span className={isXNext?'text-green':'text-orange'}>{isXNext?'X':'O'}</span>
        </>
        }
        
    </div>
  )
}
export default mystatus;
//let message= win? `The winner is ${win}` : current.isXNext? 'The next player is X' :'The next player is O';