import React from 'react'

function Company(props) {
  return (
    <div>
        <h2>
             {props.name} , {props.year}
        </h2>
    </div>
  )
}

export default Company