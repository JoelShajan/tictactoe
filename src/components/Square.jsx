import React from 'react';
export const Square = ({value,onClick,iswin}) => {
  //console.log(iswin);
  return (
    <button 
    className={`square ${iswin?'winning':''} ${value==='X'?'text-green':'text-orange'}`} 
    type='button' onClick={onClick} style={{
      fontWeight: iswin? 'bold':'normal',
    }}>
      {value}
      </button>
  )
}
