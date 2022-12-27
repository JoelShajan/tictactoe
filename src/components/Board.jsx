import React from 'react'
import { Square } from './Square'
function Board({bdarr,handleSqClick}) {

//console.log(bdarr);
//  const handleSqClick= position=>{
//     setbd(prev=>{
//       return prev.map(Square,pos) => {
//           if(pos === position){
//             return "X";
//           }
//           return  Square;
//         });
//     });
//  };

  const rendersquare=(position)=>{
    return (
    <Square 
    value={bdarr[position]}
    onClick={()=>{handleSqClick(position)}
    }
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