import React,{useState} from 'react'
import { Square } from './Square'
function Board() {
const [bdarr,setbd] = useState(Array(9).fill(null));
const [isXNext,setXNext] = useState(false);
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
const handleSqClick = (position)=>{
  if(bdarr[position]!=null){
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