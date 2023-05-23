import React, { useState } from 'react';

async function Connection(url,setSocket1) {
   //const[connect,setConnect]=useState(null);
   const ws = new WebSocket(url);
   ws.onopen = async () => {
       console.log('Chat connection opened:');
       await setSocket1(ws);  
   };
   ws.onclose = () => {
       console.log('Chat connection closed');
       setSocket1(null);
   };


}

export default Connection;