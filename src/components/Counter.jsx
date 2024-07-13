import React, { useEffect, useState } from 'react'
import '../App.css'


function Counter(props) {

  const [ncount,setNcount]=useState(0);
  const [ncount2,setNcount2]=useState(0);

    const {title} = props;

    useEffect(()=>{
      console.log('Mounting....');
      console.log('count1.....'+ncount);
      console.log('count2.....'+ncount2);
    },[ncount,ncount2])
  return (
    <div>
       <h2 className='jjj hello'> this counter is {title} and it is {props.count}</h2>
       <button onClick={()=>setNcount(ncount+1)}>+plus+</button>  
       <h2>new count {ncount}</h2>
       <button onClick={()=>setNcount2(ncount2+1)}>+plus+</button>  
       <h2>new count {ncount2}</h2>
    </div>
  )
}

export default Counter