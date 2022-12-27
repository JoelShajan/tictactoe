import React from 'react';
export const Square = ({value,onClick,iswin}) => {
  console.log(iswin);
  return (
    <button className="square" type='button' onClick={onClick} style={{
      fontWeight: iswin? 'bold':'normal',
    }}>
      {value}
      </button>
  )
}
