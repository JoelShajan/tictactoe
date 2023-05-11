import React from 'react'
import { Square } from './Square'
function Board({bdarr,handleSqClick,winning}) {

  const rendersquare=(position)=>{
    //console.log(winning);
    const iswin=winning.includes(position);
    return (
    <Square 
    value={bdarr[position]}
    onClick={()=>{handleSqClick(position)}
    }
    iswin={iswin}
/>
    )
  }; 
  return (
    <div className='board'>
        <div className='board-row'>
            {rendersquare(0)}
            {rendersquare(1)}
            {rendersquare(2)}
        </div>
        <div className='board-row'>
            {rendersquare(3)}
            {rendersquare(4)}
            {rendersquare(5)}
        </div>
        <div className='board-row'>
            {rendersquare(6)}
            {rendersquare(7)}
            {rendersquare(8)}
        </div>
    </div>
  )
}

export default Board