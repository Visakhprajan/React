import React from 'react';

const person = (props) => {
  return(
    <div>
      <h1>{props.name} Hello world {props.age}</h1>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
}

export default person;