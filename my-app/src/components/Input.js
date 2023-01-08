import React, { useState, createRef } from 'react';



const Input = ({ fetchWord }) => {

  let inputRef = createRef();
  let [value, setValue] = useState("")

  return (
    <div className="word">
      <input type="text"
        ref={inputRef}
        className="search-word"
        autoFocus
        placeholder="Write the word here.."
        value={value}
        onChange={(e) => { setValue(e.target.value) }} />
        
      <button
        className="search-btn"
        onClick={(e) => {
          fetchWord(value)
          setValue("")
        }}
        type="button">Search word</button>
    </div>
  );
}
export default Input