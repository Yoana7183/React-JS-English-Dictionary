import React from 'react'

const InterjectionDefinition = ({ word }) => {
  return (
    <div>
        <div>
        Interjection Definition: {word.meanings[2].definitions[1].definition} , {word.meanings[2].definitions[2].definition}

    </div>
    </div>
  )
}

export default InterjectionDefinition
