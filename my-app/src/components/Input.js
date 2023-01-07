import React from 'react'
import { createRef } from 'react';

const Input = () => {
    let inputRef = createRef();
  return (
    <div>
      <input type = 'text'  ref={inputRef}>
        </input>
        <button
                className="todo-add-btn"
                onClick={(e) => {
                 
                }}
                type="button">Search</button>
    </div>
  )
}

export default Input;
