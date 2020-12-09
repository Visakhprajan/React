import React from 'react';

const person = (props) => {
  return(
    <div>
      <h1>{props.name} Hello world {props.age}</h1>
      <p>{props.children}</p>
    </div>
  )
}

export default person;