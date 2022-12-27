import React from 'react'

const ticHistory=({history,change,currentval})=>{
    return (
        <ul>
           {
            history.map((_,move)=>
            
                { 
                    return (<li key={move}><button type='button'
                    style={{
                        fontWeight:(currentval===move)?'Bold':'normal',
                    }}
                    onClick={()=>{change(move)}}>{(move===0)? "This is the beginnig":`This is move ${move}`}  </button></li>)}
                    )
           } 
        </ul>
    )
}
export default ticHistory;