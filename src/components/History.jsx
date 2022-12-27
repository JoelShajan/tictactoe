import React from 'react'

const ticHistory=({history,change,currentval})=>{
    return (
        <div className='history-wrapper'>
        <ul className='history'>
           {
            history.map((_,move)=>
            
                { 
                    return (<li key={move}><button type='button'
                    className={`btn-move ${(move===currentval)?'active':''}`}
                    onClick={()=>{change(move)}}>{(move===0)? "Game starts!":`This is move ${move}`}  </button></li>)}
                    )
           } 
        </ul>
        </div>
    )
}
export default ticHistory;