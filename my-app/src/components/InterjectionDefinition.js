import React from 'react'

const InterjectionDefinition = ({ word }) => {

  if (word.meanings[2] === undefined || null || word.meanings[2].definitions[0].definition === undefined || null || word.meanings[2].definitions[1] === undefined || null) {
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
