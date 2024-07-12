import React from 'react'
import '../App.css'


function Counter(props) {

    const {title} = props;
  return (
    <div>
       <h2 className='jjj hello'> this counter is {title} and it is {props.count}</h2>
    </div>
  )
}

export default Counter