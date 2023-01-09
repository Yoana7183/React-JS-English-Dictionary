import React from 'react'

const InterjectionDefinition = ({ word }) => {

  if (word.meanings[2] === undefined || word.meanings[2].definitions[1].definition === undefined || word.meanings[2].definitions[1] === undefined) {
    return (
      <div className='noInterjection'>
        There is no Interjection definition for this word
      </div>
    )
  }

  return (

    <div className='interjection'>
      Interjection Definition: {word.meanings[2].definitions[1].definition}
    </div>
  )
}


export default InterjectionDefinition
