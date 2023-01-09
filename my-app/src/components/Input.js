import React, { useState, createRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';





const Input = ({ fetchWord }) => {

  let inputRef = createRef();
  let [value, setValue] = useState("")


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

      <Button variant="outline-secondary" id="button-addon2" className="search-btn" onClick={(e) => { fetchWord(value) }}>
        Search word
      </Button>
    </InputGroup>
  );
}

export default Input

