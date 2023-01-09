import React from 'react'

const InterjectionDefinition = ({ word }) => {
  if (word.meanings[2] === undefined) {
    return (
      <div>
        There is no Interjection definition for this word
      </div>
    )
  }
  let definition1 = word.meanings[2].definitions[1].definition
  let definition2 = word.meanings[2].definitions[2].definition

  if (definition1 && definition2 === undefined) {
    definition1 = 'There is no Interjection definition for this word'
    definition2 = 'There is no Interjection definition for this word'
  } else if (definition1 === undefined) {
    definition1 = 'There is no Interjection definition for this word'
  } else if (definition2 === undefined) {
    definition2 = 'There is no Interjection definition for this word'
  }
  return (
    <div>
      <div>
        Interjection Definition: {definition1} / {definition2}

      </div>
    </div>
  )
}

export default InterjectionDefinition
