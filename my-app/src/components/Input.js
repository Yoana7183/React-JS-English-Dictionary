import React, { useState, createRef,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';





const Input = ({ fetchWord }) => {



  let inputRef = createRef();
  let [value, setValue] = useState("")

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      fetchWord(value)
    }
  };
  
  return (

    <InputGroup className="mb-3">
      <Form.Control
        ref={inputRef}
        className="search-word"
        autoFocus
        placeholder="Write the word here.."
        value={value}
        onChange={(e) => { setValue(e.target.value) }}
       
      />
      <Button variant="outline-secondary" id="button-addon2" className="search-btn" onClick={(e) => { fetchWord(value) }}  onKeyPress={handleKeyDown}>
        Search word
      </Button>
    </InputGroup>
  );
}

export default Input

